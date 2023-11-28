import { createContext, useEffect, useState } from "react";
import {
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  getAuth,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  updateProfile,
} from "firebase/auth";
import app from "../firebase/firebase.config";
import useAxiosSecure from "../hooks/useAxiosSecure";
import useIpAddress from "../hooks/useIpAddress";
import Swal from "sweetalert2";

export const AuthContext = createContext(null);

const auth = getAuth(app);
const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [authLoading, setAuthLoading] = useState(true);

  const axiosSecure = useAxiosSecure();
  const [ipAddress] = useIpAddress();

  //   Provider
  const google_provider = new GoogleAuthProvider();

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);

      const userData = {
        name: currentUser?.displayName,
        email: currentUser?.email,
        email_verified: currentUser?.emailVerified,
        role: "user",
        profile_pic: currentUser?.photoURL,
        last_login_ip: ipAddress?.ip,
      };
      console.log(currentUser);
      if (currentUser !== null && currentUser?.displayName) {
        axiosSecure.put(`/users/${currentUser?.email}`, userData);
      }
      setAuthLoading(false);
    });
    return () => {
      unsubscribe();
    };
  }, [ipAddress?.ip]);

  const createUserWithEmail = (email, password) => {
    setAuthLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };

  const updateUserProfile = (name, photo) => {
    return updateProfile(auth.currentUser, {
      displayName: name,
      photoURL: photo,
    });
  };

  const signInWithEmail = (email, password) => {
    setAuthLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  };

  const contineWithGoogle = () => {
    setAuthLoading(true);
    return signInWithPopup(auth, google_provider);
  };

  const logOutUser = () => {
    return signOut(auth).then(() => {
      Swal.fire({
        position: "center",
        icon: "success",
        title: "Logout successfully done",
        showConfirmButton: false,
        timer: 2500,
      });
    });
  };

  const authInfo = {
    user,
    authLoading,
    createUserWithEmail,
    signInWithEmail,
    contineWithGoogle,
    updateUserProfile,
    logOutUser,
  };
  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
