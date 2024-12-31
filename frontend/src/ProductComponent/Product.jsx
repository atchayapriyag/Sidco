
import { Link } from "react-router-dom";

const Product = () => {
  const products = [
    {
      id: 1,
      image:
        "https://ik.imagekit.io/aw0yzgyse/_MG_7973.JPG?updatedAt=1734591224159",
      title: "PEARL BOX",
      
    },
    {
      id: 2,
      image:
        "https://ik.imagekit.io/aw0yzgyse/_MG_8012.JPG?updatedAt=1734591389165",
      title: "GRANULES",
      
    },
    {
      id: 3,
      image:
        "https://ik.imagekit.io/aw0yzgyse/_MG_7903.JPG?updatedAt=1734591642994",
      title: "SPACERS",
     
    },
  ];

  return (
    <section className="bg-[#FFFF99] py-11 mt-8 mb-8">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-4xl font-bold">Products</h2>
          <Link to="/products" className="text-xl hover:underline">
            See All
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {products.map((product) => (
            <div
              key={product.id}
              className="bg-white rounded-2xl p-4 shadow-lg hover:shadow-xl transition-shadow"
            >
              <div className="aspect-[4/3] relative overflow-hidden rounded-xl mb-4">
                <img
                  src={product.image}
                  alt={product.title}
                  className="object-cover w-full h-full"
                />
              </div>
              <h3 className="text-2xl font-bold mb-2">{product.title}</h3>
              <p className="text-gray-700">{product.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Product;

