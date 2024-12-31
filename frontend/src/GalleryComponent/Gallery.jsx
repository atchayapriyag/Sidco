// import { useState } from "react";

// const Gallery = () => {
//   const [selectedImage, setSelectedImage] = useState(null);

//   // Handle image click to show the full view
//   const handleClick = (imageUrl) => {
//     setSelectedImage(imageUrl);
//   };

//   // Close the modal
//   const handleClose = () => {
//     setSelectedImage(null);
//   };

//   // Array of images for the gallery
//   const images = [
//     "https://ik.imagekit.io/aw0yzgyse/_MG_7919.JPG?updatedAt=1734591336403",
//     "https://ik.imagekit.io/aw0yzgyse/_MG_7942.JPG?updatedAt=1734590977498",
//     "https://ik.imagekit.io/aw0yzgyse/_MG_7881.JPG?updatedAt=1734591497974",
//     "https://ik.imagekit.io/aw0yzgyse/_MG_7980.JPG?updatedAt=1734591186745",
//     "https://ik.imagekit.io/aw0yzgyse/_MG_7920.JPG?updatedAt=1734591411799",
//     "https://ik.imagekit.io/aw0yzgyse/_MG_7975.JPG?updatedAt=1734591001758",
//     "https://ik.imagekit.io/aw0yzgyse/_MG_7900.JPG?updatedAt=1734591585783",
//     "https://ik.imagekit.io/aw0yzgyse/_MG_7954.JPG?updatedAt=1734590913347",
//     "https://ik.imagekit.io/aw0yzgyse/_MG_8012.JPG?updatedAt=1734591389165",
//     "https://ik.imagekit.io/aw0yzgyse/_MG_7988.JPG?updatedAt=1734591301218",
//     "https://ik.imagekit.io/aw0yzgyse/_MG_7834.JPG?updatedAt=1734590861774",
//     "https://ik.imagekit.io/aw0yzgyse/_MG_7965.JPG?updatedAt=1734591532961",
//   ];

//   return (
//     <div className="max-w-7xl mx-auto px-4 mt-5 mb-8">
//       {/* Hero Banner */}
//       <div className="relative w-full h-48 mb-12 rounded-3xl overflow-hidden">
//         <div
//           className="absolute inset-0 bg-cover bg-center"
//           style={{
//             backgroundImage:
//               "url('https://ik.imagekit.io/aw0yzgyse/Galleryfin.jpg?updatedAt=1734677717242')",
//           }}
//         />
//         <div className="absolute inset-0 flex items-center justify-center">
//           <h1 className="text-white text-5xl font-bold">Gallery</h1>
//         </div>
//       </div>

//       {/* Gallery Grid */}
//       <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
//         {images.map((image, index) => (
//           <div
//             key={index}
//             className="w-full h-60 rounded-lg overflow-hidden cursor-pointer"
//             style={{
//               backgroundImage: `url(${image})`,
//               backgroundSize: "cover",
//               backgroundPosition: "center",
//             }}
//             onClick={() => handleClick(image)}
//           ></div>
//         ))}
//       </div>

//       {/* Full View Modal */}
//       {selectedImage && (
//         <div
//           className="fixed inset-0 bg-black bg-opacity-80 flex justify-center items-center z-50"
//           onClick={handleClose}
//         >
//           <div
//             className="relative bg-white rounded-lg overflow-hidden"
//             onClick={(e) => e.stopPropagation()} // Prevent closing when clicking inside the modal
//           >
//             <img
//               src={selectedImage}
//               alt="Full View"
//               className="w-[900px] h-auto max-h-[90vh]"
//             />
//             <button
//               className="absolute top-2 right-2 bg-red-600 text-white rounded-full px-4 py-2"
//               onClick={handleClose}
//             >
//               X
//             </button>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// };

// export default Gallery;

import { useState } from "react";

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  // Handle image click to show the full view
  const handleClick = (imageUrl) => {
    setSelectedImage(imageUrl);
  };

  // Close the modal
  const handleClose = () => {
    setSelectedImage(null);
  };

  // Array of images for the gallery
  const images = [
    "https://ik.imagekit.io/aw0yzgyse/_MG_7919.JPG?updatedAt=1734591336403",
    "https://ik.imagekit.io/aw0yzgyse/_MG_7942.JPG?updatedAt=1734590977498",
    "https://ik.imagekit.io/aw0yzgyse/_MG_7881.JPG?updatedAt=1734591497974",
    "https://ik.imagekit.io/aw0yzgyse/_MG_7980.JPG?updatedAt=1734591186745",
    "https://ik.imagekit.io/aw0yzgyse/orange.jpg?updatedAt=1735406571795",
    "https://ik.imagekit.io/aw0yzgyse/_MG_7975.JPG?updatedAt=1734591001758",
    "https://ik.imagekit.io/aw0yzgyse/_MG_7900.JPG?updatedAt=1734591585783",
    "https://ik.imagekit.io/aw0yzgyse/_MG_7954.JPG?updatedAt=1734590913347",
    "https://ik.imagekit.io/aw0yzgyse/_MG_8012.JPG?updatedAt=1734591389165",
    "https://ik.imagekit.io/aw0yzgyse/_MG_7988.JPG?updatedAt=1734591301218",
    "https://ik.imagekit.io/aw0yzgyse/cap.jpg?updatedAt=1735406272418",
    "https://ik.imagekit.io/aw0yzgyse/_MG_7965.JPG?updatedAt=1734591532961",
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 mt-8 mb-8">
      {/* Hero Banner */}
      <div className="relative w-full h-48 mb-12  overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage:
              "url('https://ik.imagekit.io/aw0yzgyse/Galleryfin.jpg?updatedAt=1734677717242')",
          }}
        />
        <div className="absolute inset-0 flex items-center justify-center">
          <h1 className="text-white text-5xl font-bold">Gallery</h1>
        </div>
      </div>

      {/* Gallery Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 ">
        {images.map((image, index) => (
          <div
            key={index}
            className="w-full h-60 rounded-lg overflow-hidden cursor-pointer"
            style={{
              backgroundImage: `url(${image})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
            onClick={() => handleClick(image)}
          ></div>
        ))}
      </div>

      {/* Full View Modal */}
      {selectedImage && (
        <div
          className="fixed inset-0 bg-black bg-opacity-80 flex justify-center items-center z-50"
          onClick={handleClose}
        >
          <div
            className="relative bg-white rounded-lg overflow-hidden"
            onClick={(e) => e.stopPropagation()} // Prevent closing when clicking inside the modal
          >
            <img
              src={selectedImage}
              alt="Full View"
              className="w-[900px] h-auto max-h-[90vh]"
            />
            <button
              className="absolute top-2 right-2 bg-red-600 text-white rounded-full px-4 py-2"
              onClick={handleClose}
            >
              X
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Gallery;

