import { useLoaderData } from "react-router-dom";
import Modal from 'react-modal';
import React from "react";
import useAuth from "../hooks/useAuth";
import Swal from 'sweetalert2'
// import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
// import RequestModal from "./RequestModal";
import moment from 'moment';


const customStyles = {
    content: {
        top: '50%',
        left: '50%',
        right: 'auto',
        bottom: 'auto',
        marginRight: '-50%',
        transform: 'translate(-50%, -50%)',
    },
};

Modal.setAppElement('#root');


const AvailableFoodDetail = () => {

    const { user } = useAuth();
    const { email } = user;

    const food = useLoaderData();
    const { _id, foodImage, foodName, quantity, location, expireDate, donatorName, donatorEMail } = food;

    const formattedExpireDate = new Date(expireDate).toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
    });

    // let subtitle;
    const [modalIsOpen, setIsOpen] = React.useState(false);


    function openModal() {
        setIsOpen(true);
    }
    function afterOpenModal() {
        // references are now sync'd and can be accessed.
        // subtitle.style.color = '#f00';
    }
    function closeModal() {
        setIsOpen(false);
    }


    const handleRequest = (e) => {
        e.preventDefault();

        const result = e.target;
        const donation = result.donation.value;
        const addiNotes = result.addiNotes.value;

        const requestDate = moment().format("MMM Do YY");

        const requestFood = {food_id : _id, foodImage, foodName, location, formattedExpireDate, donatorName, donatorEMail, email, requestDate, donation, addiNotes }

        fetch('http://localhost:5000/reqfoods', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(requestFood)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.insertedId) {
                    Swal.fire({
                        title: 'Success!',
                        text: 'Request Successfull',
                        icon: 'success',
                        confirmButtonText: 'OK'
                    })
                    setIsOpen(false)
                }
            })

        console.log(requestFood);


    }



    return (
        <div id="root" className="">
            <div className="flex justify-center mt-16">
                <div className=" card w-96 bg-base-100 shadow-xl">
                    <figure><img src={foodImage} alt="Shoes" /></figure>
                    <div className="card-body">
                        <h2 className="card-title">
                            {foodName}
                        </h2>
                        <div>
                            <h3>Donator Name : {donatorName}</h3>
                            <h3>Location : {location}</h3>
                        </div>
                        {/* < hr className="h-px my-8 bg-gray-200 border-0 dark:bg-gray-700" /> */}
                        <div>
                            <h3>Quantity : {quantity}</h3>
                            <h3>Expire Date : {formattedExpireDate}</h3>
                        </div>
                        <div className="mx-auto mt-2">
                            <button onClick={openModal} className="btn btn-primary btn-sm ">Request</button>
                            <Modal
                                isOpen={modalIsOpen}
                                onAfterOpen={afterOpenModal}
                                onRequestClose={closeModal}
                                style={customStyles}
                                contentLabel="Example Modal"
                            >

                                {/* <RequestModal></RequestModal> */}
                                <div className="hero min-h- bg-base-200">
                                    <div className="hero-content flex-col">
                                        <form onSubmit={handleRequest}>
                                            <div className="grid sm:grid-cols-1 md:grid-cols-2 gap-2">
                                                <div className="flex gap-2 items-center">
                                                    <h3 className="w-2/5">Food Name </h3>
                                                    <input readOnly type="text" defaultValue={foodName}  name="foodName" className="input input-bordered input-success w-96 max-w-xs" />
                                                </div>

                                                <div className="flex gap-2 items-center">
                                                    <h3 className="w-2/5">Food Image </h3>
                                                    <input readOnly type="text" defaultValue={foodImage} name="foodImage" className="input input-bordered input-success w-96 max-w-xs" />
                                                </div>
                                                <div className="flex gap-2 items-center">
                                                    <h3 className="w-2/5">Food Id </h3>
                                                    <input readOnly type="text" defaultValue={_id} name="foodId" className="input input-bordered input-success w-96 max-w-xs" />
                                                </div>

                                                <div className="flex gap-2 items-center">
                                                    <h3 className="w-2/5">User Email </h3>
                                                    <input readOnly type="text" defaultValue={email} name="userEmail" className="input input-bordered input-success w-96 max-w-xs" />
                                                </div>

                                                <div className="flex gap-2 items-center">
                                                    <h3 className="w-2/5">Donator Name </h3>
                                                    <input readOnly type="text" defaultValue={donatorName} name="DonatorName" className="input input-bordered input-success w-96 max-w-xs" />
                                                </div>
                                                <div className="flex gap-2 items-center">
                                                    <h3 className="w-2/5">Donator Email </h3>
                                                    <input readOnly type="text" defaultValue={donatorEMail} name="DonatorEmail" className="input input-bordered input-success w-96 max-w-xs" />
                                                </div>


                                                <div className="flex gap-2 items-center">
                                                    <h3 className="w-2/5">Pickup Location </h3>
                                                    <input name="location" readOnly type="text" defaultValue={location} className="input input-bordered input-success w-96 max-w-xs" />
                                                </div>

                                                <div className="flex gap-2 items-center">
                                                    <h3 className="w-2/5">Request Date </h3>
                                                    {
                                                        <input readOnly type="text" defaultValue={moment().format("MMM Do YY")} className="input input-bordered input-success w-96 max-w-xs" />

                                                    }
                                                </div>

                                                <div className="flex gap-2 items-center">
                                                    <h3 className="w-2/5">Expire Date </h3>
                                                    <input readOnly type="text" defaultValue={expireDate} className="input input-bordered input-success w-96 max-w-xs" />
                                                </div>

                                                <div className="flex gap-2 items-center">
                                                    <h3 className="w-2/5">Additional Notes </h3>
                                                    <input name="addiNotes" type="text" placeholder="Additional Notes" className="input input-bordered input-success w-96 max-w-xs" />
                                                </div>

                                                <div className="flex gap-2 items-center">
                                                    <h3 className="w-2/5">Donation Money </h3>
                                                    <input name="donation" type="text" placeholder="Donation Money" className="input input-bordered input-success w-96 max-w-xs" />
                                                </div>

                                            </div>
                                            <div className="mt-5 flex justify-center items-center">
                                                <button className="btn btn-primary btn-sm">Request</button>
                                            </div>
                                        </form>
                                    </div>
                                </div>
                            </Modal>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default AvailableFoodDetail;