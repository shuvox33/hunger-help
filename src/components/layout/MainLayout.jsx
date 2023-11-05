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
                                    <NavLink to="availableFoods"
                                        className={({ isActive }) => isActive ? 'btn btn-primary btn-sm' : 'btn btn-ghost btn-sm'}> Available Foods</NavLink>
                                    <NavLink to="addfood"
                                        className={({ isActive }) => isActive ? 'btn btn-primary btn-sm' : 'btn btn-ghost btn-sm'}>Add Food</NavLink>

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
                    <div className='min-h-screen'>
                        {children}
                    </div>

                    <footer className='mt-14'>
                        <footer className="footer p-10 bg-base-300 text-base-content">
                            <nav>
                                <header className="footer-title">Services</header>
                                <a className="link link-hover">Branding</a>
                                <a className="link link-hover">Design</a>
                                <a className="link link-hover">Marketing</a>
                                <a className="link link-hover">Advertisement</a>
                            </nav>
                            <nav>
                                <header className="footer-title">Company</header>
                                <a className="link link-hover">About us</a>
                                <a className="link link-hover">Contact</a>
                                <a className="link link-hover">Jobs</a>
                                <a className="link link-hover">Press kit</a>
                            </nav>
                            <nav>
                                <header className="footer-title">Social</header>
                                <div className="grid grid-flow-col gap-4">
                                    <a><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" className="fill-current"><path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"></path></svg></a>
                                    <a><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" className="fill-current"><path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z"></path></svg></a>
                                    <a><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" className="fill-current"><path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"></path></svg></a>
                                </div>
                            </nav>
                        </footer>
                    </footer>
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