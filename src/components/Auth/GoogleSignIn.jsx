import { useNavigate } from "react-router-dom";
import auth from "../../../firebase.config";
import { useAuthState, useSignInWithGoogle } from "react-firebase-hooks/auth";
import { useEffect } from "react";

const GoogleSignIn = () => {
  const [user] = useAuthState(auth);
  const [signInWithGoogle] = useSignInWithGoogle(auth);
  const navigate = useNavigate();

  useEffect(() => {
    if (user) {
      navigate("/", { state: { key: "value" } });
    }
  }, [navigate, user]);
  return (
    <div>
      <button
        onClick={() => signInWithGoogle()}
        className="btn btn-secondary w-full"
      >
        Google
      </button>
    </div>
  );
};

export default GoogleSignIn;
