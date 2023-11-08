import useAuth from "../hooks/useAuth";
import Swal from 'sweetalert2'
import { useEffect, useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";


const AddFood = () => {

    useEffect(()=>{
        document.title = "Hunger-Help | AddFood"
    },[])

    const { user } = useAuth();
    const { displayName, email, photoURL } = user;

    const [expireDate, setExpireDate] = useState(new Date());

    // console.log(startDate);

    const handleAddFood = (e) => {
        e.preventDefault();

        const result = e.target;
        const foodImage = result.foodImage.value;
        const foodName = result.foodName.value;
        const quantity = result.quantity.value;
        const location = result.location.value;
        const notes = result.notes.value;
        const donatorImage = result.donatorImage.value;
        const donatorName = result.donatorName.value;
        const donatorEMail = result.donatorMail.value;
        const status = 'available';

        const newFood = {
            foodImage, foodName, quantity, location, notes, expireDate, donatorImage, donatorName, donatorEMail, status
        }

        fetch('http://localhost:5000/foods', {
            method: 'POST',
            credentials: 'include',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(newFood)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.insertedId) {
                    Swal.fire({
                        title: 'Success!',
                        text: 'Food Added Successfully',
                        icon: 'success',
                        confirmButtonText: 'OK'
                    })
                }
            })
    }


    return (
        <div>
            <div className="mt-8  max-w-7xl mx-auto">
                <h3 className="text-center text-4xl">Add Food </h3>
                <form onSubmit={handleAddFood}>
                    <div className="max-w-4xl mx-auto flex flex-col gap-3">
                        <label className="text-xl" htmlFor="image">Food Image : </label>
                        <input className=" w-full h-10 rounded-lg border border-orange-200 border-" type="text" name="foodImage" id="foodimage" placeholder="  food image" />
                    </div>
                    <div className="max-w-4xl mx-auto flex flex-col gap-3">
                        <label className="text-xl" htmlFor="name">Food Name : </label>
                        <input className=" w-full h-10 rounded-lg border border-orange-200 border-" type="text" name="foodName" id="foodname" placeholder="  Name" />
                    </div>
                    <div className="max-w-4xl mx-auto flex flex-col gap-3">
                        <label className="text-xl" htmlFor="brand">Food Quantity : </label>
                        <input className=" w-full h-10 rounded-lg border border-orange-200 border-" type="text" name="quantity" id="quantity" placeholder="  food quantity" />
                    </div>
                    <div className="max-w-4xl mx-auto flex flex-col gap-3">
                        <label className="text-xl" htmlFor="type">Pickup Location : </label>
                        <input className=" w-full h-10 rounded-lg border border-orange-200 border-" type="text" name="loaction" id="location" placeholder="  pickup location" />
                    </div>
                    <div className="max-w-4xl mx-auto flex flex-col gap-3">
                        <label className="text-xl" htmlFor="price">Additional Notes: </label>
                        <input className=" w-full h-10 rounded-lg border border-orange-200 border-" type="text" name="notes" id="notes" placeholder="  additional notes" />
                    </div>
                    <div className="max-w-4xl mx-auto flex flex-col gap-3">
                        <label className="text-xl "> Expire Date</label>
                        <DatePicker selected={expireDate} onChange={(date) => setExpireDate(date)} />
                    </div>
                    {/* <div>
                        <h2>Donor Information</h2>
                    </div> */}
                    <br />
                    <br />
                    <div className="max-w-4xl mx-auto flex flex-col gap-3">
                        <label className="text-xl" htmlFor="description">Donator Image : </label>
                        <input className=" w-full h-10 rounded-lg border border-orange-200 border-" type="text" name="donatorImage" id="image" defaultValue={photoURL} />
                    </div>
                    <div className="max-w-4xl mx-auto flex flex-col gap-3">
                        <label className="text-xl" htmlFor="name">Name : </label>
                        <input className=" w-full h-10 rounded-lg border border-orange-200 border-" type="text" name="donatorName" id="name" defaultValue={displayName} />
                    </div>
                    <div className="max-w-4xl mx-auto flex flex-col gap-3">
                        <label className="text-xl" htmlFor="mail">Email : </label>
                        <input className=" w-full h-10 rounded-lg border border-orange-200 border-" type="text" name="donatorMail" id="mail" defaultValue={email} />
                    </div>
                    <div className="max-w-4xl mx-auto flex flex-col gap-3">
                        <label className="text-xl" htmlFor="status">Choose status:</label>
                        <select className="w-full h-10 rounded-lg border border-orange-200" name="status" id="status">
                            <option className="" value="Available">Available</option>
                        </select>
                    </div>

                    <div className="text-center mt-5">
                        <button className=" text-white bg-orange-500 px-4 py-2 rounded-lg ">Add Food</button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default AddFood;