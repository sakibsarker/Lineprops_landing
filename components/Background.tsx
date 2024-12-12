import React from "react";

const Background = () => {
  return (
    <>
      {/* <div className="relative bg-[#161b29] overflow-hidden h-screen">
     
        <div
          className="absolute inset-0 bg-[url('/Ellipse.png')] bg-no-repeat"
          style={{
            backgroundPosition: "top left", // Set the position to the top-left corner
            backgroundSize: "80%", // Keep the size adjustment
          }}
          aria-hidden="true"
        ></div>

   
        <div className="relative z-10 p-10">
          <h1 className="text-white text-3xl font-bold">Hello</h1>
          <h1 className="text-white text-2xl">Hello Sakib</h1>
        </div>
      </div> */}

      <div className="w-full h-full bg-[#161b29] overflow-hidden grid grid-rows-2">
        {/* Single red glow on the top */}

        <div className="flex justify-start items-start">
          <div className="w-[800px] h-[800px] semi-circle bg-[#ff0000] blur-[150px] opacity-50" />
        </div>
        <div className="flex justify-end items-end">
          <div className="w-[800px] h-[800px] semi-circle_right bg-[#ff0000] blur-[150px] opacity-50" />
        </div>
        <div className="flex relative justify-start items-start py-20">
          <div className="w-[900px] h-[900px] bg-[#ff0000] blur-[150px] rounded-full opacity-65" />
        </div>
        {/* Content on top of the background */}
        <div className="flex items-center justify-center text-white absolute inset-0">
          <h1 className="text-4xl font-bold">Your Content Here</h1>
        </div>
      </div>
    </>
  );
};

export default Background;
