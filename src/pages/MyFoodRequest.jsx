import { useState } from "react";
import { useLoaderData } from "react-router-dom";
import Swal from 'sweetalert2'


const MyFoodRequest = () => {
    const reqData = useLoaderData();

    const [totalReq, setTotalReq] = useState(reqData)

    const handleCancelReq = (id) => {
        console.log(id);
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        }).then((result) => {
            if (result.isConfirmed) {
                fetch(`https://a11-hunger-help-server.vercel.app/reqfoods/${id}`, {
                    method: 'DELETE'

                })
                    .then(res => res.json())
                    .then(data => {
                        if (data.deletedCount > 0) {
                            const remainingReq = totalReq.filter(food => food._id != id);
                            setTotalReq(remainingReq);
                            Swal.fire(
                                'Deleted!',
                                'Your Request has been deleted.',
                                'success'
                            )
                        }
                    })
            }
        })
    }
    return (

        <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mt-10 max-w-7xl mx-auto">
            {
                totalReq.map(data =>
                    <>
                        <div >
                            <div key={data.id} className=" card w-96 bg-base-200 shadow-xl">
                                <figure className="px-10 pt-10">
                                    {/* <img src="/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg" alt="Shoes" className="rounded-xl" /> */}
                                </figure>
                                <div className="card-body items-center text-center">
                                    <h2 className="card-title">{data.donatorName}</h2>
                                    <p>{data.location}</p>
                                    <p>{data.formattedExpireDate}</p>
                                    <p>{data.requestDate}</p>
                                    <p>{data.donation}</p>
                                    <p>{data.status}</p>

                                    {
                                        (data.status === 'available') && <button onClick={()=>handleCancelReq(data._id)} className="btn btn-primary">Cancel Request</button>
                                    }
                                    
                                </div>
                            </div>
                        </div>
                    </>)
            }
        </div>

    );
};

export default MyFoodRequest;
