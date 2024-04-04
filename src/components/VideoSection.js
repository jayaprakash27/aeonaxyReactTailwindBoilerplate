import React from 'react'

const VideoSection = () => {
  return (
    <div className=' w-screen'>
    <div className=' w-full h-96 md:h-screen flex flex-col items-center justify-center'>
        <div className=' h-1/2 w-screen text-center bg-blue-950'>
        <div className=' mt-11 uppercase font-semibold  text-blue-300'>Video</div>
        <div className=" text-2xl text-center md:text-3xl mt-6 font-semibold text-white">
          See what you can do with Routing forms
        </div>
        </div>
        <div className=' h-1/2 w-screen bg-white'></div>
    <div className=" absolute mt-16 w-screen flex flex-col items-center z-20 ">
        <img  />
    </div>
    </div>
    </div>
  )
}

export default VideoSection
