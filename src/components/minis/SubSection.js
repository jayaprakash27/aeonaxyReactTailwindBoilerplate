import React from 'react'
import { motion } from "framer-motion"

const SubSection = ({ item, reverse }) => {
  return (
    <motion.div
    initial={{ opacity: 0.5, y: 200 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 1, type: 'spring' }}
    viewport={{ once: true }}
    className={` mt-8 bg-white justify-around w-full flex flex-col ${reverse ?'md:flex-row-reverse' : 'md:flex-row'}`}>
    <div className=" md:w-1/2 mt-8 p-6 text-center md:text-left flex flex-col justify-center">
    <div className=" uppercase font-semibold text-blue-600">{item.title}</div>
    <h2 className=" text-3xl mt-6 font-bold text-blue-950">
      {item.subTitle}
    </h2>
    <p className=" font-light text-blue-900 mt-6">
      {item.bodyText}
    </p>
    </div>
    <div className=" flex md:w-1/2 flex-col">
        <img src={item.imgSrc} />
    </div>
  </motion.div>
  )
}

export default SubSection
