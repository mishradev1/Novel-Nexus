import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import { IoPersonOutline } from "react-icons/io5";


// react icons
import {FaStar} from 'react-icons/fa6'
import { Avatar } from "flowbite-react";
import proPic from '../assets/book-inventory-starter-files-main/assets/profile.jpg'


// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

// import './styles.css';

// import required modules
import { Pagination } from 'swiper/modules';

const Review = () => {
  return (
    <div className='my-12 px-4 lg:px-24'>
        <h2 className='text-5xl font-bold text-center mb-10 leading-snug'>Our Customers</h2>
        <div>
        <Swiper
        slidesPerView={1}
        spaceBetween={30}
        pagination={{
          clickable: true,
        }}
        breakpoints={{
          640: {
            slidesPerView: 1,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 2,
            spaceBetween: 40,
          },
          1024: {
            slidesPerView: 3,
            spaceBetween: 50,
          },
        }}
        modules={[Pagination]}
        className="mySwiper"
      >
        <SwiperSlide className='shadow-2x1 bg-white py-8 px-4 md:m-5 rounded-lg border'>
            <div className='space-y-7'>
                <div className='text-amber-500 flex gap-2'>
                    <FaStar/>
                    <FaStar/>
                    <FaStar/>
                    <FaStar/>
                </div>

                {/* text*/}
                <div className='mt-7'>
                    <p className='mb-5'>
                      "Dive into Novel Nexus for a literary journey like no other! With its user-friendly
                       interface and vast collection spanning genres, it's a haven for bookworms. Engage 
                       with fellow readers, discover new favorites, and explore the magic of storytelling 
                       in every click."</p>
                    <IoPersonOutline  alt="avatar of Jese" rounded 
                    className='w-25 mb-3 ml-7'/>
                    <h5 className='text-lg font-medium'>Gaurav Jha</h5>
                    <p className='text-base'>Avid Reader </p>
                </div>
            </div>
        </SwiperSlide>
        <SwiperSlide className='shadow-2x1 bg-white py-8 px-4 md:m-5 rounded-lg border'>
            <div className='space-y-7'>
                <div className='text-amber-500 flex gap-2'>
                    <FaStar/>
                    <FaStar/>
                    <FaStar/>
                    <FaStar/>
                </div>

                {/* text*/}
                <div className='mt-7'>
                    <p className='mb-5'>"Novel Nexus is a bibliophile's dream come true! From classic masterpieces to 
                    contemporary gems, it's a haven for all tastes. With intuitive navigation and a robust community, 
                    every visit promises new adventures and endless literary discoveries. A must-visit destination for 
                    every book lover!"</p>
                    <IoPersonOutline  alt="avatar of Jese" rounded 
                    className='w-25 mb-3 ml-19'/>
                    <h5 className='text-lg font-medium'>Aman Chauhan</h5>
                    <p className='text-base'>Distributor, Chauhan Publications</p>
                </div>
            </div>
        </SwiperSlide>
                <SwiperSlide className='shadow-2x1 bg-white py-8 px-4 md:m-5 rounded-lg border'>
            <div className='space-y-7'>
                <div className='text-amber-500 flex gap-2'>
                    <FaStar/>
                    <FaStar/>
                    <FaStar/>
                    <FaStar/>
                </div>

                {/* text*/}
                <div className='mt-7'>
                    <p className='mb-5'>"Novel Nexus stands out as the ultimate literary hub, connecting readers with 
                    captivating stories from around the globe. With its seamless platform and diverse selection, it's 
                    the go-to destination for anyone craving literary adventures. Get ready to embark on an unforgettable 
                    reading journey!"</p>
                    <IoPersonOutline  alt="avatar of Jese" rounded 
                    className='w-25 mb-3 ml-7'/>
                    <h5 className='text-lg font-medium'>Abhijeet Chavda</h5>
                    <p className='text-base'>CEO, Chavda Publications</p>
                </div>
            </div>
        </SwiperSlide>
        <SwiperSlide className='shadow-2x1 bg-white py-8 px-4 md:m-5 rounded-lg border'>
            <div className='space-y-7'>
                <div className='text-amber-500 flex gap-2'>
                    <FaStar/>
                    <FaStar/>
                    <FaStar/>
                    <FaStar/>
                </div>

                {/* text*/}
                <div className='mt-7'>
                    <p className='mb-5'>
                    "Novel Nexus redefines the online book experience with its vast library and user-friendly interface. 
                    Seamlessly browse through genres, connect with fellow book enthusiasts, and discover your next favorite 
                    read. It's the digital haven every reader deserves!"
                    </p>
                    <IoPersonOutline  alt="avatar of Jese" rounded 
                    className='w-25 mb-3 ml-7'/>
                    <h5 className='text-lg font-medium'>Mark Spencer</h5>
                    <p className='text-base'>CEO, Spencer Publications</p>
                </div>
            </div>
        </SwiperSlide>
        

      </Swiper>
        </div>
    </div>
  )
}

export default Review