import { useEffect, useState } from "react";
import ShowSortedFood from "./ShowSortedFood";
import { NavLink } from "react-router-dom";

const FeatureFoods = () => {

    const [sortedFoods, setSortedFoods] = useState([]);

    useEffect(() => {
        fetch('https://a11-hunger-help-server.vercel.app/sortedfoods')
            .then(res => res.json())
            .then(data => setSortedFoods(data))
    }, [])

    return (
        <div>
            <h3 className="text-3xl font-semibold text-center mt-5">Featured Foods</h3>
            <div className=" max-w-7xl mx-auto grid grid-cols-4 mt-10 gap-5">
                {
                    sortedFoods.map(food => <ShowSortedFood key={food._id} food={food}></ShowSortedFood>)
                }
            </div>
            <div className="flex justify-center mt-5">
                <NavLink to='availablefoods'>
                    <button className="btn btn-primary btn-sm">Show All</button>
                </NavLink>
            </div>
        </div>
    );
};

export default FeatureFoods;