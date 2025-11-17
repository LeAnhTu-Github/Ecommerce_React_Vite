import { ArrowRight } from "lucide-react";

const categories = [
  {
    title: "Fashion",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    img: "home-section1-1.png",
    bg: "from-yellow-400/90 to-orange-400/90",
  },
  {
    title: "Kitchen Utensils",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    img: "home-section3-2.png",
    bg: "from-cyan-300 to-cyan-200",
  },
  {
    title: "Smart Phones",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    img: "home-section3-3.png",
    bg: "from-sky-300 to-sky-200",
  },
  {
    title: "Electronics",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    img: "home-section3-4.png",
    bg: "from-green-300 to-lime-200",
  },
];

const Section3 = () => {
  return (
    <div className="w-full py-10">
      <h2 className="text-4xl font-bold mb-8">CONTINUE SHOPPING FOR</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {categories.map((item, index) => (
          <div
            key={index}
            className={`relative rounded-2xl overflow-hidden shadow-lg bg-gradient-to-r ${item.bg}`}
          >
            <img
              src={item.img}
              alt={item.title}
              className="w-full h-52 object-cover "
            />

            <div className="absolute bottom-0 w-full bg-white/40 backdrop-blur-md p-5">
              <h3 className="text-3xl font-semibold">{item.title}</h3>
              <p className="mt-2 text-sm">{item.desc}</p>
            </div>

            <button className="absolute top-4 right-4 w-10 h-10 flex items-center justify-center bg-white/50 backdrop-blur-md rounded-full shadow-md hover:bg-white transition">
              <ArrowRight size={20} />
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Section3;
