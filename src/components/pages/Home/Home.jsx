import { Helmet } from "react-helmet-async";
import Header from "../../shared/Header";
import Slider from "./Slider";

const Home = () => {
  return (
    <div>
      <Helmet>
        <title>Car Doctor | Home Page</title>
      </Helmet>
      <Header></Header>
      <Slider></Slider>
      <h1>Car Doctor Client</h1>
    </div>
  );
};

export default Home;
