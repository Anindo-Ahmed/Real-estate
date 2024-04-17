import { useContext } from "react";
import { useLoaderData, useParams } from "react-router-dom";
import { AuthContext } from "../../Provider/AuthProvider";

const EstateDetails = () => {
    const {user} = useContext(AuthContext);
    const homes = useLoaderData();
    const {id} =useParams();
    // const home = homes.find (each => console.log(each));
    // console.log(home)
    return (
        <div>
            <h2 className="text-3xl">Esatet details info</h2>
            <p>{id}</p>
            {/* <p>{home.id}</p> */}
            

        </div>
    );
};

export default EstateDetails;