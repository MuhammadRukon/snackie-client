import { createContext, useEffect, useState } from "react";
import PropTypes from "prop-types";
import {
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  updateProfile,
} from "firebase/auth";
import { auth } from "../firebase/firebase.config";

export const AuthContext = createContext(null);
const AuthProvider = ({ children }) => {
  const [loading, setLoading] = useState(true);
  const [user, setUser] = useState(null);
  const [registeredUsers, setRegisteredUsers] = useState(null);
  const [effect, setEffect] = useState(false);

  // set registered user
  useEffect(() => {
    const fetchUsers = () => {
      fetch(`https://brand-server-iota.vercel.app/users`)
        .then((res) => res.json())
        .then((data) => setRegisteredUsers(data))
        .catch((error) => console.log(error.message));
    };
    fetchUsers();
  }, [effect]);
  // register
  const createUser = (email, password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };
  // log in
  const logInUser = (email, password) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  };
  // update profile
  const updateUser = (name, photo) => {
    return updateProfile(auth.currentUser, {
      displayName: name,
      photoURL: photo,
    });
  };
  // log in with google
  const googleProvider = new GoogleAuthProvider();

  const googleSignIn = () => {
    setLoading(true);
    return signInWithPopup(auth, googleProvider);
  };

  // log out
  const logOutUser = () => {
    setLoading(true);
    return signOut(auth);
  };

  // on auth state changed
  useEffect(() => {
    const unSubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      setLoading(false);
    });
    return () => {
      unSubscribe();
    };
  }, []);
  const authInfo = {
    createUser,
    loading,
    user,
    logOutUser,
    logInUser,
    googleSignIn,
    updateUser,
    registeredUsers,
    setEffect,
  };
  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};
AuthProvider.propTypes = {
  children: PropTypes.node,
};
export default AuthProvider;
