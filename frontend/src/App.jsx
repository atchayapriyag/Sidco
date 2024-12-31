// import Hero from "./HeroComponent/Hero";
// import About from "./AboutComponent/About";
// import Enquire from "./EnquireComponent/Enquire";
// import Footer from "./FooterComponent/Footer";
// import Navbar from "./NavbarComponent/Navbar";
// import Product from "./ProductComponent/Product";
// import ProductSection from "./ProductsectionComponent/ProductSection";
// import Gallery from "./GalleryComponent/Gallery";
// import AboutSection from "./AboutsectionComponent/AboutSection";
// import Contact from "./Contactus Component/Contact";

// const App = () => {
//   return (
//     <>
//       <Navbar />
//       <Hero />
//       <About />
//       <Product />
//       <ProductSection />
//       <Enquire />
//       <Gallery />
//       <AboutSection />
//       <Contact />
//       <Footer />
//     </>
//   );
// };

// export default App;

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Hero from "./HeroComponent/Hero";
import About from "./AboutComponent/About";
import Enquire from "./EnquireComponent/Enquire";
import Footer from "./FooterComponent/Footer";
import Navbar from "./NavbarComponent/Navbar";
import Product from "./ProductComponent/Product";
import ProductSection from "./ProductsectionComponent/ProductSection";
import Gallery from "./GalleryComponent/Gallery";
import AboutSection from "./AboutsectionComponent/AboutSection";
import Contact from "./Contactus Component/Contact";
import Services from "./ServicesComponent/Services";
const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Hero />
              <About />
              <Product />
            </>
          }
        />
        <Route path="/product" element={<ProductSection />} />
        <Route path="/services" element={<Services />} />
        <Route path="/gallery" element={<Gallery />} />

        <Route path="/about" element={<AboutSection />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/" element={<Product />} />
        <Route path="/products" element={<ProductSection />} />
      </Routes>
      <Enquire />
      <Footer />
    </Router>
  );
};

export default App;

/* <Router>
        <Routes>
          <Route path="/" element={<Product />} />
          <Route path="/products" element={<ProductSection />} />
        </Routes>
      </Router> */
