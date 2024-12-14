import React from "react";

export default function Newsletter2() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-[1fr,2fr]  mx-5 md:mx-16 my-10">
      {/* Left Content Row */}
      <div className="flex flex-col rounded-l-3xl justify-center items-start p-10 bg-[#ff0000] ">
        <h2 className="text-white text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight mb-4 sm:mb-6">
          Get the Latest Updates & Insights
        </h2>
        <p className="text-white/90 text-base sm:text-lg leading-relaxed mb-8 lg:mb-0">
          Subscribe to our newsletter and stay informed about new features,
          emerging trends, and essential updates. Be the first to know what's
          shaping the industry.
        </p>
      </div>

      {/* Right Background Image Row */}
      <div
        className="relative flex justify-center items-center bg-cover bg-center rounded-r-3xl"
        style={{
          backgroundImage: "url('Placeholder-2.png')",
        }}
      >
        <div className="">
          <form className="w-full max-w-md">
            <div className="flex flex-col sm:flex-row gap-4">
              <input
                type="email"
                placeholder="Your email here"
                className="flex-1 px-6 py-3 rounded-full bg-transparent border border-white text-white placeholder:text-white/70 focus:outline-none focus:ring-2 focus:ring-white"
              />
              <button
                type="submit"
                className="px-8 py-3 border-2 border-white text-white rounded-full hover:bg-white hover:text-[#ff0000] transition-all duration-300"
              >
                Subscribe
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
