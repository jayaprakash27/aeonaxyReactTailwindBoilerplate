import React from 'react'
import { FaPlay } from "react-icons/fa";
import { motion } from "framer-motion";

const VideoSection = () => {
  return (
    <div className=' w-screen'>
    <div className=' w-full h-96 md:h-screen flex flex-col items-center justify-center'>
        <div className=' h-1/2 w-screen flex flex-col items-center bg-blue-950'>
        <div className=' mt-11 uppercase font-semibold  text-blue-300'>Video</div>
        <h2 className=" text-xl md:text-4xl w-4/5 mt-4 md:mt-10 text-center font-bold text-white">
          See what you can do with Routing forms
        </h2>
        </div>
        <div className=' h-1/2 w-screen bg-white'></div>
    <motion.div
        initial={{ opacity: 0.6, scale: 0.6 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1, type: "spring" }}
        viewport={{ once: true }}
        className=" absolute cursor-pointer w-2/3 md:w-1/2 h-40 md:h-1/2 bg-gray-400 mt-16 flex justify-center items-center flex-col z-10 ">
        <div className=' bg-blue-600 flex hover:bg-blue-500 justify-center items-center rounded-full w-16 h-16'>
            <FaPlay className='text-white text-2xl' />
        </div>
    </motion.div>
    </div>
    </div>
  )
}

export default VideoSection
