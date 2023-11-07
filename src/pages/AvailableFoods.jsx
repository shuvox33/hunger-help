// import { useLoaderData } from "react-router-dom";
import ShowAvailableFoods from "../components/ShowAvailableFoods";
import { useEffect, useState } from "react";

const AvailableFoods = () => {

    const [foods, setFoods] = useState([])

    useEffect(() => {
        fetch('https://a11-hunger-help-server.vercel.app/foods')
            .then(res => res.json())
            .then(data => setFoods(data));
    }, [])

    // const foods = useLoaderData();


    return (
        <div className=" max-w-7xl mx-auto grid grid-cols-4 mt-10 gap-5">
            {
                foods.map(food =><ShowAvailableFoods key={food._id} food = {food}></ShowAvailableFoods>)
            }
        </div>
    );
};

export default AvailableFoods;