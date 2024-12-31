

import { Link } from "react-router-dom";

const ProductSection = () => {
  const products = [
    {
      title: "WHITE GRANULES",

      image:
        "https://ik.imagekit.io/aw0yzgyse/_MG_7988.JPG?updatedAt=1734591301218",
    },

    {
      title: "TRI-ANGLE PHONE STAND",

      image:
        "https://ik.imagekit.io/aw0yzgyse/_MG_7965.JPG?updatedAt=1734591532961",
    },

    {
      title: "ALL TYPES OF SPACERS",

      image:
        "https://ik.imagekit.io/aw0yzgyse/_MG_7954.JPG?updatedAt=1734590913347",
    },

    {
      title: "COLOUR GRANULES",

      image:
        "https://ik.imagekit.io/aw0yzgyse/_MG_8012.JPG?updatedAt=1734591389165",
    },

    {
      title: "PEARL WHITE BOX",

      image:
        "https://ik.imagekit.io/aw0yzgyse/_MG_7973.JPG?updatedAt=1734591224159",
    },
    {
      title: "CAP 680",

      image: "https://ik.imagekit.io/aw0yzgyse/cap.jpg?updatedAt=1735406272418",
    },
  ];

  const otherProducts = [
    "All types of Plastic Caps",
    "Plastic containers",
    "lnjection mold",
    "Product Design",
    "Mold design",
    "NPD (New Products Development)",
    "Recycled Plastic Materials (Any Colors)",
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 mt-8 ">
      {/* Hero Banner */}

      <div className="relative w-full h-48 mb-3 rounded-3xl  overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage:
              "url('https://ik.imagekit.io/aw0yzgyse/productbg.jpg?updatedAt=1734677891155')",
          }}
        />
        <div className="absolute inset-0 " />
        <div className="absolute inset-0 flex items-center justify-center">
          <h1 className="text-white text-5xl font-bold">Products</h1>
        </div>
      </div>

      {/* Products Grid */}
      <section className="max-w-7xl mx-auto px-4 py-9">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product, index) => (
            <div
              key={index}
              className="border rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow"
            >
              <img
                src={product.image}
                alt={product.title}
                className="w-full h-48 object-cover bg-black"
              />
              <div className="p-4">
                <h3 className="font-semibold text-lg mb-2">{product.title}</h3>
                <p className="text-gray-600 text-sm">{product.description}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Other Products & Image */}
      <section className="max-w-7xl mx-auto px-4 py-11 grid md:grid-cols-2 gap-16">
        <div>
          <h2 className="text-2xl font-bold mb-8">Other Products & Services</h2>
          <ul className="space-y-3">
            {otherProducts.map((product, index) => (
              <li key={index} className="flex items-center">
                <span className="mr-2 text-emerald-600">•</span>
                {product}
              </li>
            ))}
          </ul>
        </div>

        <div className="flex items-center justify-center">
          <img
            src="https://ik.imagekit.io/aw0yzgyse/productservice.jpg?updatedAt=1735406946105"
            alt="Showcase"
            className="w-full h-auto rounded-lg shadow-lg"
          />
        </div>
      </section>

      <div className="max-w-6xl mx-auto px-4 py-8">
        <Link to="/" className="text-emerald-600 hover:underline">
          ← Back to Home
        </Link>
      </div>
    </div>
  );
};

export default ProductSection;
