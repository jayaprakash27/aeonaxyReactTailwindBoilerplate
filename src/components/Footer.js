import React from 'react'
import { FaFacebook, FaInstagram, FaLinkedin, FaTwitter, FaYoutube } from 'react-icons/fa';

const menu_items = [
  {
      "category": "About",
      "items": [
          "About Calendly",
          "Contact Sales",
          "Newsroom",
          "Careers",
          "Security"
      ]
  },
  {
      "category": "Solutions",
      "items": [
          "Customer Success",
          "Sales",
          "Recruiting",
          "Information Technology",
          "Marketing"
      ]
  },
  {
      "category": "Popular Features",
      "items": [
          "Embed Calendly",
          "Availability",
          "Sending Notifications",
          "Using Calendly Mobile"
      ]
  },
  {
      "category": "Support",
      "items": [
          "Help Center",
          "Video Tutorials",
          "Cookie Settings"
      ]
  },
  {
      "category": "Add-Ons",
      "items": [
          "Download for Chrome",
          "Download for Firefox"
      ]
  },
  {
      "category": "Developers",
      "items": [
          "Developer Tools"
      ]
  }
];

const socials = [<FaTwitter /> , <FaFacebook />, <FaInstagram />, <FaLinkedin />, <FaYoutube />]

const Footer = () => {
  return (
    <div className=' w-screen p-10 bg-white flex flex-col-reverse md:flex-row'>
      <div className=' w-full mt-6 md:w-1/3 flex items-start flex-col'>
        <h2 className=' text-4xl my-1 font-bold text-blue-950'>Easy</h2>
        <h2 className=' text-4xl my-1 font-bold text-blue-600'>ahead</h2>
    <p className=" font-light text-blue-900 mt-6">
      We take the work out of connections so you accomplish more.
    </p>
    <div className=' flex cursor-pointer w-full text-2xl justify-center md:justify-left my-5 gap-4'>
      {socials.map((item, index) => (
<a href='#' key={index} className=' text-black hover:text-blue-600'>
  {item}
</a>
      ))}
    </div>
      </div>
      <div className=' w-full md:w-2/3 grid grid-cols-3 gap-4'>
        {menu_items.map((item) => (
          <div key={item.category} className=' flex flex-col gap-3'>
            <a href='#' className=' text-blue-950 hover:text-blue-800 text-xl font-bold'>{item.category}</a>
            {item.items.map((item) => (
            <a href='#' key={item} className=' hover:text-gray-500 text-gray-600'>{item}</a>
            ))}
          </div>
        ))}
      </div>
    </div>
  )
}

export default Footer
