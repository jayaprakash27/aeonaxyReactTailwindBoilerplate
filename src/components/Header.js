import React, { useState } from 'react'
import logo from '../assets/images/logo.png'
import MenuItem from './minis/MenuItem';
import { FiMenu } from 'react-icons/fi';
import { RxCross1 } from 'react-icons/rx'

const menuItems = [
  {
  name: 'individuals',
  subMenu: []
  },
  {
  name: 'Teams',
  subMenu: []
  },
  {
  name: 'Enterprise',
  subMenu: []
  },
  {
  name: 'Product',
  subMenu: [
    {
      name: 'Company',
      subMenu: [],
    }
  ],
  },
  {
  name: 'Pricing',
  subMenu: []
  },
  {
  name: 'Resources',
  subMenu: [
    {
      name: 'LEARN',
      subMenu: [
        {
          name: 'Customer Stories',
          subMenu: []
        },
        {
          name: 'Resource Center',
          subMenu: []
        },
        {
          name: 'Integrations',
          subMenu: []
        },
        {
          name: 'About',
          subMenu: []
        }
      ]
    },
    {
      name: 'CONNECT',
      subMenu: [
        {
          name: 'Community',
          subMenu: []
        },
        {
          name: 'Developers',
          subMenu: []
        },
        {
          name: 'Contact Us',
          subMenu: []
        }
      ]
    }
  ],
  },
]

const Header = () => {
  const [menuIsOn, setMenuIsOn] = useState(false);
  return (
    <div className='fixed z-20 w-screen top-0'>
    <div className=' bg-white w-full flex items-center justify-between'>
      <div className=' text-3xl flex items-center m-5 text-blue-600'>
        <img src={logo} width={50} />
      Calendly
      </div>
      <div className=' hidden md:flex gap-4 text-gray-900'>
        {menuItems.map((item, index) => (
          <MenuItem key={index} item={item} zIndex={20} />
        ))}
      </div>
      <div className='  hidden md:flex gap-3 m-3'>
        <button className=' p-3 hover:text-blue-600'>Log In</button>
        <button className=' bg-blue-600 hover:bg-blue-500 rounded-full px-5 py-1 text-white'>Get Started</button>
      </div>
      <div onClick={() => setMenuIsOn(!menuIsOn)} className=' m-5 text-blue-600 text-2xl md:hidden'>
        { menuIsOn ? <RxCross1 /> : <FiMenu /> }
      </div>
    </div>
    { menuIsOn && (
    <div className=' md:hidden h-full bg-white flex flex-col items-center justify-between'>
      <div className=' flex flex-col gap-4 text-gray-900'>
        {menuItems.map((item, index) => (
          <MenuItem key={index} item={item} zIndex={20} />
        ))}
      </div>
      <div className='flex flex-col items-center md:gap-3 m-3'>
        <button onClick={() => setMenuIsOn(!menuIsOn)} className=' w-fit p-3 hover:text-blue-600'>Log In</button>
        <button onClick={() => setMenuIsOn(!menuIsOn)} className=' w-fit p-3 bg-blue-600 hover:bg-blue-500 rounded-full px-5 py-1 text-white'>Get Started</button>
      </div>
    </div>
    ) }
    </div>
  )
}

export default Header
