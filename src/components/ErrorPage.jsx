import { NavLink } from "react-router-dom";

const ErrorPage = () => {
    return (
        <div>
            <div className="text-center">
                <figure className="max-w-xl mx-auto">
                    <img src="https://i.ibb.co/KVHWCrS/errorpage.jpg" alt="" />
                </figure>
                <NavLink className="text-xl font-semibold bg-slate-200 px-4 py-1 rounded-lg" to={'/'}>Go Back</NavLink>
            </div>
        </div>
    );
};

export default ErrorPage;