import { Navigate } from 'react-router-dom';
import useAuth from '../hooks/useAuth';
import PropTypes from 'prop-types';

const PrivateRoute = ({children}) => {
    const {user, loading} = useAuth();

    if(loading){
        return <span className="loading loading-infinity loading-lg"></span>
        
    }
    if(user){
        return children;
    }
    return <Navigate to={'/login'}></Navigate>;
};

PrivateRoute.propTypes = {
    children : PropTypes.object.isRequired
}

export default PrivateRoute;