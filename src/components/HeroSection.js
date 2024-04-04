import React from "react";

const HeroSection = () => {
  return (
    <div className=" mt-40 before:block before:-z-10 before:w-full before:h-full flex flex-col justify-center items-center before:absolute before:top-1/3 before:-inset-1 before:rounded-t-full before:bg-blue-50 before:opacity-50">
      <div className=" flex flex-col w-2/3 justify-center text-center items-center">
        <div className=" uppercase font-semibold text-blue-600">Routing forms</div>
        <div className=" text-3xl md:text-5xl mt-12 font-bold text-blue-950">
          Make higher quality connections
        </div>
        <div className=" text-sm md:text-xl font-light text-gray-600 mt-12 text-center">
          Request information from website visitors or invitees and-based on
          Misitors their responses-route them to the right person or resource.{" "}
          <div className="">Available on Professional plans and up.</div>
        </div>
        <div className=" flex flex-col md:flex-row mt-10 justify-center font-semibold gap-5">
          <button className=" bg-blue-600 hover:bg-blue-500 rounded-full px-10 py-5 text-sm text-white">
            Start for free
          </button>
          <button className=" border-2 border-blue-950 text-blue-950 rounded-full px-10 py-5 text-sm ">
            Talk with sales
          </button>
        </div>
      </div>
      <div className=" mt-8 bg-white gap-12 w-full flex flex-col md:flex-row">
        <div className=" mt-8 p-6 text-center md:text-left flex flex-col justify-center">
        <div className=" uppercase font-semibold text-blue-600">Better conversations</div>
        <h2 className=" text-3xl mt-6 font-bold text-blue-950">
          Screen and qualify website visitors or invitees
        </h2>
        <div className=" font-light text-blue-900 mt-6">
          Request information from website visitors or invitees and-based on
          Misitors their responses-route them to the right person or resource.{" "}
          <div className="">Available on Professional plans and up.</div>
        </div>
        </div>
        <div className=" flex flex-col">
            <img src="https://images.ctfassets.net/k0lk9kiuza3o/7mkknkKmPsEGwaB5mdt60t/f6a386c1a8c4944b51aae8b3b1fa607f/Calendly-Email-Embed-Recruiting.png?q=85&fm=webp" />
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
