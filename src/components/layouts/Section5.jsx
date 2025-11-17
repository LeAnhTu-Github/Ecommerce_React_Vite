import { Star } from "lucide-react";

const reviews = [
  {
    title: "Good Quality",
    desc: "I highly recommend shopping from kicks",
    rating: 5.0,
    userImg: "home-section5-img1.png",
    productImg: "home-section5-1.png",
  },
  {
    title: "Good Quality",
    desc: "I highly recommend shopping from kicks",
    rating: 5.0,
    userImg: "home-section5-img2.png",
    productImg: "home-section5-2.png",
  },
  {
    title: "Good Quality",
    desc: "I highly recommend shopping from kicks",
    rating: 5.0,
    userImg: "home-section5-img3.png",
    productImg: "home-section5-3.png",
  },
];

const Section5 = () => {
  return (
    <div className="w-full py-10 space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <h2 className="text-4xl font-bold">REVIEWS</h2>
        <button className="bg-yellow-400 hover:bg-yellow-500 text-white font-semibold py-2 px-5 rounded-md">
          SEE ALL
        </button>
      </div>

      {/* Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {reviews.map((item, index) => (
          <div
            key={index}
            className="bg-white rounded-2xl shadow-md overflow-hidden"
          >
            {/* Top info */}
            <div className="p-5 flex items-start justify-between">
              <div>
                <h3 className="text-xl font-semibold">{item.title}</h3>
                <p className="text-sm text-gray-500 mt-1">{item.desc}</p>

                {/* Rating */}
                <div className="flex items-center gap-1 mt-2">
                  <Star size={18} className="text-yellow-400 fill-yellow-400" />
                  <span className="font-semibold">{item.rating}</span>
                </div>
              </div>

              {/* Avatar */}
              <img
                src={item.userImg}
                alt="user"
                className="w-10 h-10 rounded-full object-cover"
              />
            </div>

            {/* Review Image */}
            <img
              src={item.productImg}
              className="w-full h-56 object-cover"
              alt="review product"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Section5;
