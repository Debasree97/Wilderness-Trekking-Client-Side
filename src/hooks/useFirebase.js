import {
  getAuth,
  signInWithPopup,
  GoogleAuthProvider,
  signOut,
  onAuthStateChanged,
} from "firebase/auth";
import { useEffect, useState } from "react";
import initializeAuthentication from "./../Firebase/firebase.init";

initializeAuthentication();

const useFirebase = () => {
  const [user, setUser] = useState({});
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(true);
  const auth = getAuth();
    const googleProvider = new GoogleAuthProvider();

  // Google sign in
  const handleGoogleSignIn = () => {
    setLoading(true);
    return signInWithPopup(auth, googleProvider)
  };

  // Observing user state
  useEffect(() => {
    const unsubscribed = onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user);
      } else {
        setUser({});
      }
      setLoading(false);
    });
    return unsubscribed;
  }, [auth]);

  // Google sign out
  const handleGoogleSignOut = () => {
    setLoading(true);
    signOut(auth)
      .then(() => { })
      .finally(()=>setLoading(false))
      .catch((error) => {
        setError(error);
      });
  };
  return { loading,setLoading,error,setError, user,setUser, handleGoogleSignIn, handleGoogleSignOut };
};

export default useFirebase;
