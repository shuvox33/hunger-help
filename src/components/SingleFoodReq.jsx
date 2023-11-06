import PropTypes from 'prop-types';
import { useState } from 'react';
import Swal from 'sweetalert2'


const SingleFoodReq = ({ req }) => {

    const { _id, food_id, reqName, reqImg, reqMail, requestDate, status } = req;

    const [Status, setStatus] = useState(status);



    const handleDelivered = () => {

        const updatedStatus = { status: 'delivered' }

        fetch(`http://localhost:5000/reqFoods/${_id}`, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(updatedStatus)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.modifiedCount) {
                    setStatus('delivered')
                    Swal.fire({
                        title: 'Success!',
                        text: 'Food Updated Successfully',
                        icon: 'success',
                        confirmButtonText: 'OK'
                    })
                }
            })

            
        fetch(`http://localhost:5000/foods/${food_id}`, {
            method: 'DELETE'

        })
            .then(res => res.json())
            .then(data => {
                console.log(data.deletedCount);
            })
    }

    return (
        <div>
            {
                <div className="mx-auto card w-96 bg-base-100 shadow-xl">
                    <figure className="px-10 pt-10">
                        <img src={reqImg} alt="Shoes" className="rounded-xl" />
                    </figure>
                    <div className="card-body items-center text-center">
                        <h2 className="card-title">{reqName}</h2>
                        <p>Email : {reqMail}</p>
                        <p>Request Date : {requestDate}</p>
                        <div className="card-actions">
                            {
                                (Status === 'available') ?
                                    <button onClick={handleDelivered} className="btn btn-primary">Make Delivered</button>
                                    : <button className="btn btn-primary"> Delivered</button>
                            }
                        </div>
                    </div>
                </div>
            }
        </div>
    );
};

SingleFoodReq.propTypes = {
    req: PropTypes.object
};
export default SingleFoodReq;