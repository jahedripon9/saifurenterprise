import AboutUs from "../AboutUs/AboutUs";
import ClientLogo from "../ClientLogo/ClientLogo.jsx";
import Contact from "../Contact/Contact";
// import CarouselTestimonial from "../Experience/CarouselTestimonial.jsx"
import Experience from "../Experience/Experience";
import Testimonial from "../Experience/Testimonial";
import Feature33 from "../Feature/Feature33.jsx";
import Hero from "../Hero/Hero";
import Hero1 from "../Hero/Hero1.jsx";
import Footer from "../Navbar/Footer";
// import Header from "../Navbar/Header"
import Header1 from "../Navbar/Header1.jsx";
import PackageSection from "../Package/PackageSection.jsx";
import ServicesSection from "../Service/ServicesSection.jsx";
// import PackageTab from "../Package/PackageTab.jsx"
// import TravelInfo from "../TravelInfo/TravelInfo";
import TravelPlace from "../TravelPlace/TravelPlace";
import Divider from "./Divider.jsx";

const Home = () => {
  return (
    <div className="">
      {/* <Header /> */}
      <Header1 />
      <Hero />
      <Hero1></Hero1>
      <Divider  />
      {/* <TravelInfo /> */}
      {/* <Divider /> */}
      <PackageSection />
      {/* <PackageTab /> */}
      <Divider />
      <ServicesSection />
      <Divider />
      <Feature33 />
      <ClientLogo />
      <TravelPlace />
      <Divider />
      <Testimonial />
      {/* <CarouselTestimonial /> */}
      <Experience />
      <Divider />
      <AboutUs />
      <Divider />
      <Contact />
      <Footer />
    </div>
  );
};

export default Home;
