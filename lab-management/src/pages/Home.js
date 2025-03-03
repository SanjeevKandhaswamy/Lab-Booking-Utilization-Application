import React from 'react';
import {ReactTyped} from "react-typed"
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Pagination, Navigation } from "swiper/modules";
import { FaArrowAltCircleLeft } from "react-icons/fa";
import { FaArrowAltCircleRight } from "react-icons/fa";
import { useRef } from 'react';


const Home = () => {
  const labTypes = [
    { name: 'Computer Labs', icon: '💻', description: 'Modern computing facilities with latest software' },
    { name: 'Hardware Labs', icon: '🔧', description: 'Equipment for circuit design and testing' },
    { name: 'Chemical Labs', icon: '🧪', description: 'Fully equipped for experiments and research' },
    { name: 'Electrical Labs', icon: '⚡', description: 'Power systems and electrical engineering' },
    { name: 'Mechanical Labs', icon: '⚙️', description: 'Machinery and mechanical testing equipment' },
    { name: 'Electronic Labs', icon: '📱', description: 'Electronic component testing and design' },
    { name: 'Physics Labs', icon: '🔭', description: 'Experimental setup for physics research' }
  ];
  const swiperef = useRef(null);

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
      <div className="max-w-6xl mx-auto px-4 py-8">
        {/* Hero Section */}
        <div className="text-center mb-16 pt-8">
          <h1 className="text-6xl font-bold text-blue-700 mb-10">
            Welcome to Lab Management System
          </h1>
          <p className="text-gray-500 text-2xl max-w-3xl mx-auto">
            Efficiently manage and allocate laboratory resources across departments
            with our comprehensive solution for faculty and students.
          </p>
          <div className="mt-8 flex justify-center gap-4">
            <button className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors shadow-md">
              Get Started
            </button>
            <button className="px-6 py-3 bg-white text-blue-600 border border-blue-600 rounded-lg hover:bg-blue-50 transition-colors shadow-sm">
              Learn More
            </button>
          </div>
        </div>

        {/* Features Section */}
        <div className="mb-16">
          <h2 className="text-6xl font-bold mb-8 text-center text-gray-800">Key Features</h2>
      <div className="flex  justify-center gap-4 mb-8 text-4xl">
      <ReactTyped
          strings={[
            "Easy Scheduling...",
            "Real-time Updates...",
            "Resource Tracking...",
            "Automated Reports...",

          ]}
          typeSpeed={60}
          backSpeed={50}
          loop
        />
      </div>
       
        </div>

        {/* User Roles Section */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          <div className="bg-white rounded-xl shadow-lg p-8 border-t-4 border-blue-600">
            <h2 className="text-2xl font-semibold mb-6 text-gray-800">For Faculty</h2>
            <div className="space-y-3">
              <p className="flex items-center"><span className="text-blue-600 mr-2">✓</span> Request lab access for your courses</p>
              <p className="flex items-center"><span className="text-blue-600 mr-2">✓</span> Track request status in real-time</p>
              <p className="flex items-center"><span className="text-blue-600 mr-2">✓</span> View lab allocation schedule</p>
              <p className="flex items-center"><span className="text-blue-600 mr-2">✓</span> Manage course requirements</p>
              <p className="flex items-center"><span className="text-blue-600 mr-2">✓</span> Access detailed equipment lists</p>
            </div>
            <button className="mt-6 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
              Faculty Login
            </button>
          </div>

          <div className="bg-white rounded-xl shadow-lg p-8 border-t-4 border-green-600">
            <h2 className="text-2xl font-semibold mb-6 text-gray-800">For Students</h2>
            <div className="space-y-3">
              <p className="flex items-center"><span className="text-green-600 mr-2">✓</span> View allocated lab schedules</p>
              <p className="flex items-center"><span className="text-green-600 mr-2">✓</span> Check upcoming lab sessions</p>
              <p className="flex items-center"><span className="text-green-600 mr-2">✓</span> Access lab resources</p>
              <p className="flex items-center"><span className="text-green-600 mr-2">✓</span> Track attendance</p>
              <p className="flex items-center"><span className="text-green-600 mr-2">✓</span> Submit lab reports online</p>
            </div>
            <button className="mt-6 px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors">
              Student Login
              
            </button>
          </div>
        </div>

        {/* Lab Types Section */}
        <div className="mt-16 mb-16">
          <h2 className="text-3xl font-semibold mb-11 text-center text-gray-800 ">Available Laboratory Types</h2>
          {/* <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {labTypes.map((lab, index) => (
              <div key={index} className="bg-white p-6 rounded-xl shadow-md text-center hover:shadow-lg transition-all hover:-translate-y-1 duration-300 border border-gray-100">
                <div className="text-4xl mb-3">{lab.icon}</div>
                <h3 className="font-medium text-lg text-gray-800 mb-2">{lab.name}</h3>
                <p className="text-gray-600 text-sm">{lab.description}</p>
              </div>
            ))}
          </div> */}
          <div className='flex items-center '>
            <button className='text-3xl' onClick={()=>swiperef.current?.slidePrev()}>
            <FaArrowAltCircleLeft />
            </button>
            
          <Swiper
          onSwiper={(swiper)=>swiperef.current= swiper}
          slidesPerView={1}
          spaceBetween={20}
          Navigation={{enabled:true}}
          Pagination={{enabled:true}}
          loop={true}
          breakpoints={{
            640:{slidesPerView: 2},
            768:{slidesPerView: 3},
            1024:{slidesPerView: 4}
          }}
          modules={[Pagination,Navigation]}
          className='mySwiper'
          >
            {labTypes.map((labs,index)=>{
              return(
                <SwiperSlide key={index}>
                  <div className="bg-white p-6  rounded-xl shadow-md text-center hover:shadow-xl transition-all hover:-translate-y-1 duration-300 border border-gray-100">
                  <div className='text-3xl'>{labs.icon}</div>
                  <h3 className='text-2xl font-semibold'>{labs.name}</h3>
                  <p className='text-gray-600 text-xl'>{labs.description}</p>
                </div>
                </SwiperSlide>
              )
            })}
            
          </Swiper>
          <button className='text-3xl' onClick={()=>swiperef.current?.slideNext()}>
            <FaArrowAltCircleRight />
            </button>
            </div>
        </div>

        {/* Footer */}
       
      </div>
    </div>
  );
};

export default Home;