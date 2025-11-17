const Section1 = () => {
  return (
    <section className="w-full py-6">
      <div className="mx-auto px-4 grid grid-cols-1 md:grid-cols-2 gap-4 max-w-6xl">
        {/* LEFT GRID */}
        <div className="flex flex-col gap-4 h-full">
          {/* Box 1 */}
          <div className="flex-1 relative rounded-xl overflow-hidden bg-gradient-to-br from-amber-300 via-yellow-300 to-orange-400 p-4 flex items-center justify-center">
            <img
              src="/home-section1-1.png"
              alt=""
              className="w-80 h-full object-contain"
            />
          </div>

          {/* Box 2 */}
          <div className="flex-1 relative rounded-xl overflow-hidden bg-gradient-to-br from-amber-300 via-yellow-300 to-orange-400 p-6">
            <div>
              <h2 className="text-2xl font-bold text-black">Flash Deals</h2>
              <p className="text-black/80 text-sm mt-2 max-w-xs">
                Nike introducing the new air max for everyone’s comfort
              </p>
            </div>
            <img
              src="/home-section1-2.png"
              alt=""
              className="w-60  md:w-52 absolute bottom-0 left-20"
            />
          </div>
        </div>

        {/* RIGHT IMAGE */}
        <div className="rounded-xl overflow-hidden relative">
          <img
            src="/home-section1-3.png"
            alt=""
            className="w-full h-full object-cover"
          />
        </div>
      </div>
    </section>
  );
};

export default Section1;
