import { Helmet } from "react-helmet-async";
import Header from "../../shared/Header";
import Slider from "./Slider";
import Footer from "../../shared/Footer";
import AboutUs from "./AboutUs";

const Home = () => {
  return (
    <div>
      <Helmet>
        <title>Car Doctor | Home Page</title>
      </Helmet>
      <Header></Header>
      <Slider></Slider>
      <AboutUs></AboutUs>
      <Footer></Footer>
    </div>
  );
};

export default Home;
