import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';

const ShowSortedFood = ({ food }) => {
    const { _id, foodImage, foodName, quantity, location, notes, formattedExpireDate, donatorImage, donatorName } = food;


    return (
        <div>
            <div className='text-lg border-2 rounded-lg bg-green-100'>
                <figure className='p-4'>
                    <img className='border-2' src={foodImage} alt="" />
                </figure>
                <div className='p-5 space-y-3'>
                    <div className=''>
                        <h3>Name : {foodName}</h3>
                        <h3>Quantity : {quantity}</h3>
                    </div>
                    <div className='flex'>
                        <h3>Expire Date : {formattedExpireDate}</h3>
                    </div>
                    <div>
                        <h3>Location : {location}</h3>
                    </div>
                    <div>
                        <h3 className='bg-white rounded-md px-2'>{notes}</h3>
                    </div>
                    <div className=' flex '>
                        <figure className='max-w-[35px] '>
                            <img className='rounded-full' src={donatorImage} alt="" />
                        </figure>
                        <h3>Donator Name : {donatorName}</h3>
                    </div>
                    <div className='flex justify-center'>
                        <NavLink to={`availableFoods/details/${_id}`}>
                            <button  className='btn btn-primary btn-sm'>View Details</button>
                        </NavLink>
                    </div>
                </div>
            </div>
        </div>
    );
};

ShowSortedFood.propTypes = {
    food: PropTypes.object
};
export default ShowSortedFood;