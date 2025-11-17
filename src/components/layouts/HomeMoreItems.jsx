import { Button } from "@/components/ui/button";

const products = [
  {
    id: 1,
    image: "/home-section4-1.png",
    description: "Adidas 4DFWD X Parley Running Shoes",
    price: "₫125",
  },
  {
    id: 2,
    image: "/home-section4-2.png",
    description: "Adidas 4DFWD X Parley Running Shoes",
    price: "₫150",
  },
  {
    id: 3,
    image: "/home-section4-3.png",
    description: "Adidas 4DFWD X Parley Running Shoes",
    price: "₫130",
  },
  {
    id: 4,
    image: "/home-section4-4.png",
    description: "Adidas 4DFWD X Parley Running Shoes",
    price: "₫110",
  },
];

const HomeMoreItems = () => {
  return (
    <section className="w-full py-6">
      <h2 className="text-2xl font-bold max-w-6xl mx-auto mb-4 px-4">
        MORE ITEMS TO CONSIDER
      </h2>

      <div className="max-w-6xl mx-auto px-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
        {products.map(({ id, image, description, price, flash }) => (
          <div
            key={id}
            className="bg-white rounded-lg p-4 flex flex-col items-center shadow-md relative"
          >
            <img
              src={image}
              alt={description}
              className="w-full h-40 object-contain mb-4"
            />

            <p className="text-center font-semibold text-gray-800 mb-2">
              {description}
            </p>

            <Button className="w-full">{`BUY NOW - ${price}`}</Button>
          </div>
        ))}
      </div>
    </section>
  );
};

export default HomeMoreItems;
