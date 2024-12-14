import Image from "next/image";

export default function Newsletter() {
  return (
    <div className="w-full">
      <div className="md:mx-16 mx-5 pb-20 md:pb-48 ">
        <div className="overflow-hidden rounded-3xl ">
          {/* Content wrapper */}
          <div className="grid grid-cols-1 md:grid-cols-[1.2fr,2fr] h-[450px]">
            {/* Red section */}
            <div className="bg-[#f01e2a] p-8 sm:p-12 lg:p-16 flex items-center justify-center">
              <div>
                <h2 className="text-white text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight mb-4 sm:mb-6">
                  Get the Latest Updates & Insights
                </h2>
                <p className="text-white/90 text-base sm:text-lg leading-relaxed">
                  Subscribe to our newsletter and stay informed about new
                  features, emerging trends, and essential updates. Be the first
                  to know what's shaping the industry.
                </p>
              </div>
            </div>

            {/* Email subscription form */}
            <div className="relative">
              {/* Background image section */}
              <div className="absolute top-0 left-0 w-full h-full">
                <Image
                  src="/Placeholder-2.png"
                  alt="Business professionals collaborating"
                  width={2000}
                  height={1800}
                  className="w-full h-full object-cover"
                  priority
                />
                <div className="absolute inset-0 bg-blue-900/20" />
              </div>

              {/* Form content */}

              <div className="relative flex items-center justify-center h-full ">
                <form className="w-full mx-5 md:mx-0 max-w-md">
                  <div className="flex flex-col md:flex-row gap-4">
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
        </div>
      </div>
    </div>
  );
}
