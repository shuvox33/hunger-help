import { useLoaderData } from "react-router-dom";
import ShowAvailableFoods from "../components/ShowAvailableFoods";

const AvailableFoods = () => {

    const foods = useLoaderData();


    return (
        <div className=" max-w-7xl mx-auto grid grid-cols-4 mt-10 gap-5">
            {
                foods.map(food =><ShowAvailableFoods key={food._id} food = {food}></ShowAvailableFoods>)
            }
        </div>
    );
};

export default AvailableFoods;