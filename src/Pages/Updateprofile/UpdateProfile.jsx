import { useContext } from "react";
import { AuthContext } from "../../Provider/AuthProvider";

const UpdateProfile = () => {
    const { user } = useContext(AuthContext);
  return (
    <div className="avatar flex flex-col justify-center items-center mb-20">
      <div className="w-24 rounded-full">
        <img src={user} className="bg-base-300"/>
        <p>{user.displayName}</p>
        <p>{user.email}</p>
      </div>
    </div>
  );
};

export default UpdateProfile;
