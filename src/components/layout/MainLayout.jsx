import PropTypes from 'prop-types';
// import { useContext } from 'react';
import { NavLink } from 'react-router-dom';
// import { AuthContext } from '../../providers/AuthProvider';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { PiBowlFoodFill } from 'react-icons/pi';
import useAuth from '../../hooks/useAuth';


const MainLayout = ({ children }) => {
    const { user, logOut } = useAuth();

    const handleLogOut = () => {
        logOut()
            .then(() => {
                toast("Logout Successful!")
            })
            .catch(error => {
                console.error(error);
            })
    }
    return (
        <div>
            <div className="drawer">
                <input id="my-drawer-3" type="checkbox" className="drawer-toggle" />
                <div className="drawer-content flex flex-col">
                    {/* Navbar */}
                    <div className="w-full navbar bg-base-300">
                        <div className='w-full max-w-7xl mx-auto'>
                            <div className="flex-none lg:hidden">
                                <label htmlFor="my-drawer-3" aria-label="open sidebar" className="btn btn-square btn-ghost">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-6 h-6 stroke-current"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path></svg>
                                </label>
                            </div>
                            
                                <div className='text-5xl text-green-500'><PiBowlFoodFill></PiBowlFoodFill></div>
                                <div className="flex-1 px-2 mx-2 text-3xl ">Hunger <span className='text-green-500'>Help</span> </div>

                            <div className="flex-none hidden lg:block">
                                <div className='flex gap-2'>
                                    <NavLink to="/"
                                        className={({ isActive }) => isActive ? 'btn btn-primary btn-sm' : 'btn btn-ghost btn-sm'}>Home</NavLink>

                                    {
                                        user ? <>
                                            <button onClick={handleLogOut} className=" ml-4 px-3 py-1 btn btn-ghost btn-sm">Log Out</button>
                                            {/* <span className=''>{user.displayName}</span> */}
                                            <figure className=" ml-3 ">
                                                <img className="max-h-10 rounded-full" src={user.photoURL} alt="" />
                                            </figure>
                                        </>
                                            : <NavLink to="login" className={({ isActive }) => isActive ? 'btn btn-primary btn-sm' : 'btn btn-ghost btn-sm'}>Login/Signup</NavLink>
                                    }
                                    {/* <NavLink to="login"
                                        className={({ isActive }) => isActive ? 'btn btn-primary btn-sm' : 'btn btn-ghost btn-sm'}>Login/Signup</NavLink> */}
                                </div>
                            </div>
                        </div>

                    </div>
                    {/* Page content here */}
                    {children}
                </div>
                <div className="drawer-side">
                    <label htmlFor="my-drawer-3" aria-label="close sidebar" className="drawer-overlay"></label>
                    <div className="menu p-4 w-80 min-h-full bg-base-200">
                        {/* Sidebar content here */}
                        <NavLink to="home"
                            className={({ isActive }) => isActive ? 'btn btn-primary btn-sm' : 'btn btn-ghost btn-sm'}>Home</NavLink>
                        <NavLink to="login"
                            className={({ isActive }) => isActive ? 'btn btn-primary btn-sm' : 'btn btn-ghost btn-sm'}>Login/Signup</NavLink>
                    </div>
                </div>
            </div>
            <ToastContainer />
        </div>
    );
};

MainLayout.propTypes = {
    children: PropTypes.node
};

export default MainLayout;