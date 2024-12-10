import Image from "next/image";

export default function Newsletter() {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle newsletter subscription
  };

  return (
    <div className="min-h-screen px-16 bg-[#14162E] flex items-center justify-center">
      {/* Existing box */}

      {/* New total box under the existing box */}
      <div className="w-full h-[250px] md:h-[450px] rounded-2xl overflow-hidden">
        <div className="grid md:grid-cols-2 h-full">
          {/* Left Section of the new box */}
          <div className="bg-[#F01E2A] p-12 md:p-16 flex items-center justify-center">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">
                Get the Latest
                <br />
                Updates & Insights
              </h2>
              <p className="text-white/90 text-lg leading-relaxed">
                Subscribe to our newsletter and stay informed about new
                features, emerging trends, and essential updates. Be the first
                to know what's shaping the industry.
              </p>
            </div>
          </div>

          {/* Right Section with background image */}
          <div className="relative h-full">
            <div className="absolute inset-0">
              <Image
                src="/newslatter.png"
                alt="Background Image"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-black/40" />
            </div>

            <div className="relative h-full flex items-center justify-center p-4 md:p-8">
              <form
                onSubmit={handleSubmit}
                className="w-full flex flex-col md:flex-row gap-4"
              >
                <input
                  type="email"
                  placeholder="Your email here"
                  className="flex-1 px-6 py-3 rounded-full bg-white/10 border border-white/20 text-white placeholder-white/60 focus:outline-none focus:border-white/40 backdrop-blur-sm"
                />
                <button
                  type="submit"
                  className="px-8 py-3 rounded-full border border-[#EE1D52] text-white hover:bg-[#EE1D52] transition-colors duration-200"
                >
                  Subscribe
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
