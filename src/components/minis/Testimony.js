import React from 'react'
import { motion } from "framer-motion"

const Testimony = ({ item }) => {
  return (
    <motion.div
    initial={{ opacity: 0.5, y: 200 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 1, type: 'spring' }}
    viewport={{ once: true }} className={` mt-8 text-left justify-around w-9/12 gap-4 flex flex-col md:flex-row`}>
    <div className=" hidden md:flex w-2/5 flex-col items-center">
        <img className=' w-full md:max-h-2/5 rounded-3xl' src={item.imgSrc} />
    </div>
    <div className=" w-full md:w-3/5 mt-8 text-left flex flex-col justify-end md:p-8">
    <p className=" font-bold md:text-2xl text-blue-950 mt-6">
      "{item.bodyText}"
    </p>
    <p className=" mt-10 md:text-xl font-bold">{item.title}</p>
    <h2 className=" mt-4 md:text-lg text-gray-600 ">
      {item.subTitle}
    </h2>
    </div>
  </motion.div>
  )
}

export default Testimony
