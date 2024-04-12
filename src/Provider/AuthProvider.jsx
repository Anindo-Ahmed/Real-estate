import React, { createContext, useEffect, useState } from 'react';
import auth from '../Firebase/firebase.config';
import { GoogleAuthProvider, createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from 'firebase/auth';

export const AuthContext = createContext(null);

const AuthProvider = ({children}) => {
    const [user, setUser] = useState(null);
    
    const googleProvider = new GoogleAuthProvider();
    
    // create user
    const createUser = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password);
    }
    // user login
    const userLogin = (email, password) => {
       return signInWithEmailAndPassword(auth, email, password);
    }
    //  user sign out
    const logOut = () => {
        return signOut(auth);
    }
    // login with google
    const googleLogin = () => {
        return signInWithPopup(auth, googleProvider);
    }
    const authInfo = {user, createUser, userLogin, googleLogin, logOut};

    // observe an auth state
    useEffect(() => {
        const unSubscribe = onAuthStateChanged(auth, (currentUser) => {
            setUser(currentUser);
        });
        return () => {
            unSubscribe()
        }
    }, [])

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );

    
    
};

export default AuthProvider;