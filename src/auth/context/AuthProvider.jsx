import React, { useEffect, useState } from "react";
import AuthContext from "./authContext";
import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  GoogleAuthProvider,
} from "firebase/auth";
import auth from "../../../firebase/config";

const AuthProvider = ({ children }) => {
  const [user, setuser] = useState(null);
  const [loading, setloading] = useState(true);

  const provider = new GoogleAuthProvider();

  const createUser = (email, password) => {
    setloading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };

  const signInUser = (email, password) => {
    setloading(true);
    return signInWithEmailAndPassword(auth, email, password);
  };
  // signOutUser
  const signOutUser = () => {
    setloading(true);
    return signOut(auth);
  };

  // signInWithGoogle
  const signInWithGoogle = () => {
    return signInWithPopup(auth, provider);
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setuser(user);
      setloading(false);
    });

    return () => {
      unsubscribe();
    };
  }, []);

  const authInfo = {
    user,
    loading,
    createUser,
    signInUser,
    signOutUser,
    signInWithGoogle,
  };

  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
