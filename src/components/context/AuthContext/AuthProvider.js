import React, { createContext, useEffect, useState } from 'react';
import app from '../../firebase/firebase.config';
import { GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, sendPasswordResetEmail, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";

const authContext = createContext();

const auth = getAuth(app);

const googleAuth = new GoogleAuthProvider();

const AuthProvider = ({ children }) => {
    const [user, setUser] = useState([]);

    const signup = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password);
    }

    const signin = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password);
    }

    const modifyInfo = (updateinfo) => {
        return updateProfile(auth.currentUser, updateinfo);
    }

    const modifyPassword = (email) => {
        return sendPasswordResetEmail(auth, email);
    }

    const googleSignin = () => {
        return signInWithPopup(auth, googleAuth);
    }

    const logout = () => {
        return signOut(auth);
    }

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
            setUser(currentUser);
        });
        return () => unsubscribe();
    }, [])

    const authValue = {
        signup,
        signin,
        user,
        modifyInfo,
        modifyPassword,
        googleSignin,
        logout,
    };
    return (
        <authContext.Provider value={authValue}>
            {children}
        </authContext.Provider>
    );
};

export default AuthProvider;