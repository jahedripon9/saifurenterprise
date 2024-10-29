import AboutUs from "../AboutUs/AboutUs";
import ClientLogo from "../ClientLogo/ClientLogo.jsx";
import Contact from "../Contact/Contact";
import Experience from "../Experience/Experience";
import Feature33 from "../Feature/Feature33.jsx";
import Hero from "../Hero/Hero";
import Hero1 from "../Hero/Hero1.jsx";
import Footer from "../Navbar/Footer";
import Navigation2 from "../Navbar/Navigation2.jsx";
import PackageSection from "../Package/PackageSection.jsx";
import ServicesSection from "../Service/ServicesSection.jsx";
import PackageTab from "../Package/PackageTab.jsx";
import TravelInfo from "../TravelInfo/TravelInfo";
import TravelPlace from "../TravelPlace/TravelPlace";
import Divider from "./Divider.jsx";

const Home = () => {
  return (
    <div className="">
      <Navigation2 />
      <Hero />
      <TravelInfo />
      <Hero1></Hero1>
      <Divider />
      <PackageSection />
      <PackageTab />
      <Divider />
      <ServicesSection />
      <Divider />
      <Feature33 />
      <ClientLogo />
      <TravelPlace />
      <Divider />
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
