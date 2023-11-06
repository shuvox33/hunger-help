import { useLoaderData } from "react-router-dom";
import SingleFoodReq from "./SingleFoodReq";


const ManageSingleFood = () => {

    const foodReq = useLoaderData();


    return (
        
        <div>

            {
                (foodReq.length > 0) ? foodReq.map(req => <SingleFoodReq key={req._id} req = {req}></SingleFoodReq>) : <h3 className="text-3xl text-center m-12">No Request</h3>
                
            }

            
        </div>
    );
};

export default ManageSingleFood;