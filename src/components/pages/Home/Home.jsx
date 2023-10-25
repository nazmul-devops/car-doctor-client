import { Helmet } from "react-helmet-async";
import Header from "../../shared/Header";
import Slider from "./Slider";
import Footer from "../../shared/Footer";
import AboutUs from "./AboutUs";
import Services from "./Services";
import Products from "./Products";
import OurTeam from "./OurTeam";
import CoreFetures from "./CoreFetures";
import Testimonial from "./Testimonial";

const Home = () => {
  return (
    <div>
      <Helmet>
        <title>Car Doctor | Home Page</title>
      </Helmet>
      <Header></Header>
      <Slider></Slider>
      <AboutUs></AboutUs>
      <Services></Services>
      <Products></Products>
      <OurTeam></OurTeam>
      <CoreFetures></CoreFetures>
      <Testimonial></Testimonial>
      <Footer></Footer>
    </div>
  );
};

export default Home;
