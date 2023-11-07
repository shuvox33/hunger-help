import { useLoaderData } from "react-router-dom";
import Swal from 'sweetalert2'
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { useState } from "react";



const UpdateFood = () => {

    const food = useLoaderData()
    const {_id, foodImage, foodName, quantity, location, notes} = food;
    const [expireDate, setExpireDate] = useState(new Date());

    const handleUpdateFood =(e) =>{
        e.preventDefault();

        const result = e.target;
        const foodImage = result.foodImage.value;
        const foodName = result.foodName.value;
        const quantity = result.quantity.value;
        const location = result.location.value;
        const notes = result.notes.value;
        const updatedFood = {foodImage, foodName, quantity, location, notes, expireDate};

        fetch(`https://a11-hunger-help-server.vercel.app/foods/${_id}`, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(updatedFood)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.modifiedCount) {
                    Swal.fire({
                        title: 'Success!',
                        text: 'Food Updated Successfully',
                        icon: 'success',
                        confirmButtonText: 'OK'
                    })
                }
            })
    }

    return (
        <div>
                        <div className="mt-8  max-w-7xl mx-auto">
                <h3 className="text-center text-4xl">Update Food </h3>
                <form onSubmit={handleUpdateFood}>
                    <div className="max-w-4xl mx-auto flex flex-col gap-3">
                        <label className="text-xl" htmlFor="image">Food Image : </label>
                        <input className=" w-full h-10 rounded-lg border border-orange-200 border-" type="text" name="foodImage" id="foodimage" defaultValue={foodImage} />
                    </div>
                    <div className="max-w-4xl mx-auto flex flex-col gap-3">
                        <label className="text-xl" htmlFor="name">Food Name : </label>
                        <input className=" w-full h-10 rounded-lg border border-orange-200 border-" type="text" name="foodName" id="foodname" defaultValue={foodName} />
                    </div>
                    <div className="max-w-4xl mx-auto flex flex-col gap-3">
                        <label className="text-xl" htmlFor="brand">Food Quantity : </label>
                        <input className=" w-full h-10 rounded-lg border border-orange-200 border-" type="text" name="quantity" id="quantity" defaultValue={quantity} />
                    </div>
                    <div className="max-w-4xl mx-auto flex flex-col gap-3">
                        <label className="text-xl" htmlFor="type">Pickup Location : </label>
                        <input className=" w-full h-10 rounded-lg border border-orange-200 border-" type="text" name="loaction" id="location" defaultValue={location} />
                    </div>
                    <div className="max-w-4xl mx-auto flex flex-col gap-3">
                        <label className="text-xl" htmlFor="price">Additional Notes: </label>
                        <input className=" w-full h-10 rounded-lg border border-orange-200 border-" type="text" name="notes" id="notes" defaultValue={notes} />
                    </div>
                    <div className="max-w-4xl mx-auto flex flex-col gap-3">
                        <label className="text-xl "> Expire Date</label>
                        <DatePicker selected={expireDate} onChange={(date) => setExpireDate(date)} />
                    </div>


                    <div className="text-center mt-5">
                        <button className=" text-white bg-orange-500 px-4 py-2 rounded-lg ">Update Food</button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default UpdateFood;