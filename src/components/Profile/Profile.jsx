import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../../firebase.config";
import bgVictory from "../../assets/logo/bg-victory.avif";

const Profile = () => {
  const [user, loading, error] = useAuthState(auth);
  const { email, displayName, photoURL } = user;
  return (
    <div className="font-serif h-full flex justify-center items-center my-10">
      {loading ? (
        <span className="loading loading-dots loading-sm"></span>
      ) : error ? (
        <span>{error?.message}</span>
      ) : (
        <div
          className="flex flex-col items-center bg-white shadow-md rounded-lg p-48 text-white"
          style={{
            backgroundImage: `url(${bgVictory})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <img
            className="w-24 h-24 rounded-full mb-4"
            src={photoURL}
            alt={`${displayName}'s avatar`}
          />
          <h1 className="text-2xl font-bold mb-2">{displayName}</h1>
          <p className=" mb-2">{email}</p>
        </div>
      )}
    </div>
  );
};

export default Profile;
