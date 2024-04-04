import React, { useState, useEffect } from 'react'
import { Testimony } from './minis'
import img1 from '../assets/images/person-1.jpg'
import img2 from '../assets/images/person-2.jpg'
import img3 from '../assets/images/person-3.jpg'
import Carousel from "nuka-carousel";

const testimonies = [
  {
    index: 1,
    title: 'Keneth Burke',
    subTitle: 'Vice President of Marketing, Text Request',
    bodyText: "Before adding Calendly Routing Forms, 60% of people who started to book a meeting on our website did not complete the booking. Now, we're automatically sending demos to specific reps based on company size, which has created better experiences for both our customers and employees. We're winning more business with less work.",
    imgSrc: img1,
  },
  {
    index: 2,
    title: 'Automated experience',
    subTitle: 'Schedule efficiently and save everyone time',
    bodyText: 'The faster you connect clients, students, or customers to the right people and resources, the more time everyone gets back.',
    imgSrc: img2,
  },
  {
    index: 3,
    title: 'Automated experience',
    subTitle: 'Schedule efficiently and save everyone time',
    bodyText: 'The faster you connect clients, students, or customers to the right people and resources, the more time everyone gets back.',
    imgSrc: img3,
  }
]

const Testimonials = () => {
  const [currItem, setcurrItem] = useState(0);
  useEffect(() => {
    var timer = setInterval(() => {
      setcurrItem(currItem+1)
    }, 3000);
  
    return () => {
      clearInterval(timer);
    }
  }, [])
  
  return (
    <div className=' w-screen flex flex-col items-center'>
    <div className=' w-screen p-5 bg-blue-50 justify-center flex items-center'>
      {/* {testimonies.map((item) => (
        <Testimony key={item.index} item={item} />
      ))} */}
        <Testimony item={testimonies[0]} />
    </div>
    <div className=" flex flex-col w-full justify-center bg-blue-950 text-center items-center">
        <h2 className=" text-2xl md:text-4xl w-4/5 mt-12 font-bold text-white">
          Win more business with less work
        </h2>
        <div className=" text-sm md:text-lg font-light text-gray-100 w-3/5 mt-8 text-center">
          Routing Forms help you screen and qualify website visitors, automate scheduling and offer a seemless customer experience
        </div>
        <div className="mb-8 flex flex-col md:flex-row mt-10 justify-center font-semibold gap-5">
          <button className=" bg-blue-600 hover:bg-blue-500 rounded-full px-10 py-5 text-sm text-white">
            Start for free
          </button>
          <button className=" border-2 border-white text-white rounded-full px-10 py-5 text-sm ">
            Talk with sales
          </button>
        </div>
      </div>
    </div>
  )
}

export default Testimonials
