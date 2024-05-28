import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../../firebase.config";

const DashHome = () => {
  const bg =
    "https://img.freepik.com/free-vector/abstract-realistic-technology-particle-background_23-2148433468.jpg";
  const [user, loading, error] = useAuthState(auth);
  const { email, displayName, photoURL } = user;
  // console.log(user?.photoURL);
  return (
    <div
      className="font-serif h-full flex justify-center items-center "
      style={{
        backgroundImage: `url(${bg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {loading ? (
        <span className="loading loading-dots loading-sm"></span>
      ) : error ? (
        <span>{error?.message}</span>
      ) : (
        <div className="flex flex-col items-center bg-white shadow-md rounded-lg p-48">
          <img
            className="w-24 h-24 rounded-full mb-4"
            src={photoURL}
            alt={`${displayName}'s avatar`}
          />
          <h1 className="text-2xl font-bold mb-2">{displayName}</h1>
          <p className="text-gray-600 mb-2">{email}</p>
        </div>
      )}
    </div>
  );
};

export default DashHome;
