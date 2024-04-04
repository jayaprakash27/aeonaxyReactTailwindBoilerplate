import React from 'react'
import { SubSection } from './minis'
import feat1 from '../assets/images/feat-1.jpg'
import feat2 from '../assets/images/feat-2.jpg'
import feat3 from '../assets/images/feat-3.jpg'

const featuresList = [
  {
    index: 1,
    title: 'Automated experience',
    subTitle: 'Schedule efficiently and save everyone time',
    bodyText: 'The faster you connect clients, students, or customers to the right people and resources, the more time everyone gets back.',
    imgSrc: feat1,
  },
  {
    index: 2,
    title: 'Automated experience',
    subTitle: 'Schedule efficiently and save everyone time',
    bodyText: 'The faster you connect clients, students, or customers to the right people and resources, the more time everyone gets back.',
    imgSrc: feat2,
  },
  {
    index: 3,
    title: 'Automated experience',
    subTitle: 'Schedule efficiently and save everyone time',
    bodyText: 'The faster you connect clients, students, or customers to the right people and resources, the more time everyone gets back.',
    imgSrc: feat3,
  },
]
const Features = () => {
  return (
    <div className=' flex flex-col justify-center'>
      {featuresList.map((item, index) => (
        <SubSection key={index} item={item} reverse={ index%2} />
      ))}
    </div>
  )
}

export default Features
