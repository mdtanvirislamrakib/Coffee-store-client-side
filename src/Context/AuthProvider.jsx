import React from 'react';
import { AuthContext } from './AuthContext';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../FIrebase/firebase.init';

const AuthProvider = ({children}) => {

    // Sign Up user
    const createUser = ( email, password) => {
        return createUserWithEmailAndPassword(auth, email, password)
    }

    // Sign In user
    const signInUser = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password)
    }


    const userInfo = {
        createUser,
        signInUser
    }

    return (
        <AuthContext value={userInfo}>
            {children}
        </AuthContext>
    );
};

export default AuthProvider;