import { FaBath, FaBed, FaSquare } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";

const EachHome = ({ home }) => {
  const { id, segment_name, estate_title, description, price, status, area, location, image, facilities, bed, bath } = home;
  return (
    <div className="card w-full bg-base-100 shadow-xl my-12">
      <figure className="hover:scale-105 duration-200 delay-100">
        <img
          src={image}
          alt="appartments"
          className="w-96"
        />
      </figure>
      <div className="card-body">
        <p className="text-orange-500 text-lg font-semibold">{price}</p>
        <h2 className="card-title">{estate_title}</h2>
        <p className="flex flex-row gap-2 items-center mb-3"><FaLocationDot/> <span className="font-light text-sm ">{location}</span></p>
        {
            status=='rent' ? <div className="bg-cyan-700 w-12 text-center text-white">Rent</div> : <div className="bg-orange-500 w-12 text-center text-white">Sale</div>
        }
        <hr className="border mt-3"/>
        <div className="flex flex-row justify-between font-light mt-2">
            <div><p className="flex flex-row gap-2 items-center"><FaBed/>{bed} <span>Beds</span></p></div>
            <div><p className="flex flex-row gap-2 items-center"><FaBath/>{bath} <span>Baths</span></p></div>
            <div><p className="flex flex-row gap-2 items-center"><FaSquare/>{area}</p></div>
        </div>
        <hr className="border my-2"/>
        <div className="card-actions justify-start">
          <button className=" bg-[#2a2929] text-white py-2 px-6 rounded-md hover:bg-orange-400">View Property</button>
        </div>
      </div>
    </div>
  );
};

export default EachHome;
