import React, { createContext, useState } from 'react';
import auth from '../Firebase/firebase.config';
import { GoogleAuthProvider, signInWithEmailAndPassword, signInWithPopup } from 'firebase/auth';

export const AuthContext = createContext(null);

const AuthProvider = ({children}) => {
    const [user, setUser] = useState([null]);
    const provider = new GoogleAuthProvider();

    // create user
    const createUser = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password);
    }
    // user login
    const userLogin = (email, password) => {
       return signInWithEmailAndPassword(auth, email, password);
    }

    // login with google
    const googleLogin = () => {
        return signInWithPopup(auth);
    }
    const authInfo = {user, createUser, userLogin, googleLogin};

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;