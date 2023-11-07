// import { useLoaderData } from "react-router-dom";
import ShowAvailableFoods from "../components/ShowAvailableFoods";
import { useEffect, useState } from "react";

const AvailableFoods = () => {

    const [foods, setFoods] = useState([]);
    const [tempFoods, setTempFoods] = useState([]);
    const [searchText, setSearchText] = useState('');

    useEffect(() => {
        fetch('https://a11-hunger-help-server.vercel.app/foods')
            .then(res => res.json())
            .then(data => {
                setFoods(data);
                setTempFoods(data); // Set the initial value of tempFoods to the fetched data
            });
    }, []);

    const handleSearch = (event) => {
        event.preventDefault();
        const searchedFood = foods.filter(food => food.foodName.toLowerCase().includes(searchText.toLowerCase()));
        setTempFoods(searchedFood);
        setSearchText('');
    };

    const handleInputChange = (event) => {
        setSearchText(event.target.value); // Update the input value as the user types
    };

    const handleSort = () => {
        const temp = [...tempFoods]; // Create a copy of tempFoods before sorting
        temp.sort((a, b) => new Date(a.expireDate) - new Date(b.expireDate));
        setTempFoods(temp);
    };

    return (
        <div className=" max-w-7xl mx-auto mt-10">
            <div className=" flex justify-evenly">
                <div className="form-control">
                    <div className="input-group">
                        <form onSubmit={handleSearch}>
                            <input type="text" name="searchText" placeholder="Search…" className="input input-bordered" value={searchText}
                                onChange={handleInputChange} />
                            <button className="btn btn-square">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>
                            </button>
                        </form>
                    </div>
                </div>
                <div>
                    <button onClick={handleSort} className="btn btn-primary btn-sm">Sort</button>
                </div>
            </div>
            <div className="grid grid-cols-4 mt-10 gap-5">
                {
                    tempFoods.map(food => <ShowAvailableFoods key={food._id} food={food}></ShowAvailableFoods>)
                }
            </div>
        </div>
    );
};

export default AvailableFoods;