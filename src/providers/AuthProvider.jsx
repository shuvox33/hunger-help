import { createContext, useEffect, useState } from "react";
import PropTypes from 'prop-types';
import { GoogleAuthProvider, createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import auth from "../config/firebase.config";
import axios from "axios";

export const AuthContext = createContext(null);

const AuthProvider = ({children}) => {
    const [loading, setLoading] = useState(true);
    const [user, setUser] = useState(null);
    const provider = new GoogleAuthProvider();

    const createUser = (email, password) =>{
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password);
    }

    const logInUser = (email, password) =>{
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password);
    }

    const logInWithGoogle =() =>{
        setLoading(true)
        return signInWithPopup(auth, provider);
    }

    const logOut =() =>{
        setLoading(true)
        return signOut(auth);
    }

    useEffect(()=>{
        const unSubscribe = onAuthStateChanged(auth,
            currentUser=>{
                const userEmail = currentUser?.email || user?.email;
                const loggedUser = {email :userEmail}
                
                setUser(currentUser);

                if(currentUser){
                    axios.post('https://a11-hunger-help-server.vercel.app/jwt',loggedUser,{withCredentials : true})
                    .then(res =>{
                        console.log('token', res.data);
                    })
                }
                else{
                    axios.post('https://a11-hunger-help-server.vercel.app/logout', loggedUser, {withCredentials : true})
                    .then(res => {
                        console.log(res.data);
                    })
                }

                setLoading(false)
            });
            return() =>{
                unSubscribe();
            }
    },[])
    


    const authInfo = {user, createUser, logInUser, logInWithGoogle, logOut, loading};
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};


AuthProvider.propTypes = {
    children : PropTypes.node
}
export default AuthProvider;