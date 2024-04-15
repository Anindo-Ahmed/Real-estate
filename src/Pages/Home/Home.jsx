import banner1 from "../../assets/banner 1.jpeg";
import banner2 from "../../assets/banner 2.jpeg";
import banner3 from "../../assets/banner 3.jpeg";
import banner4 from "../../assets/banner 4.jpeg";
import React, { useEffect, useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import 'swiper/css/bundle';

// import required modules
import { Pagination, Navigation } from 'swiper/modules';
import EachHome from "../EachHome";
import { Helmet } from "react-helmet-async";
const Home = () => {
    const [homes, setHomes] = useState([]);

    useEffect(() => {
        fetch('residential.json')
        .then (res => res.json())
        .then (data => setHomes(data))
    },[])
  return (
    
    <div>
        <Helmet>
            <title>
                Dream Home | Home
            </title>
        </Helmet>
        <Swiper 
            pagination={true}
            navigation={true}
            modules={[Pagination, Navigation]}
            className="mySwiper mt-20"
            loop={true}>
            <SwiperSlide >
                <img src={banner1} alt="banner1" />
            </SwiperSlide>
            <SwiperSlide>
                <img src={banner2} alt="banner2"/>
            </SwiperSlide>
            <SwiperSlide>
                <img src={banner3} alt="banner3"/>
            </SwiperSlide>
            <SwiperSlide>
                <img src={banner4} alt="banner4"/>
            </SwiperSlide>
        </Swiper>
        <h2 className="text-4xl text-center font-semibold mt-12">Discover The Latest Properties</h2>
        <p className="text-center mt-3">Find a property that's right for you</p>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
         
        {
            homes.map(home => <EachHome key={home.id} home={home}></EachHome>)
        }
      </div>
    </div>
  );
};

export default Home;
