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
        <div className=" max-w-7xl mx-auto mt-10">
            <div className=" flex justify-evenly">
                <div className="form-control">
                    <div className="input-group">
                        <input type="text" name="searchText" placeholder="Search…" className="input input-bordered" />
                        <button className="btn btn-square">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>
                        </button>
                    </div>
                </div>
            </div>
            <div className="grid grid-cols-4 mt-10 gap-5">
                {
                    foods.map(food => <ShowAvailableFoods key={food._id} food={food}></ShowAvailableFoods>)
                }
            </div>
        </div>
    );
};

export default AvailableFoods;