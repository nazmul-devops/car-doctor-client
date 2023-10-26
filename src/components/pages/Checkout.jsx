import Footer from "../shared/Footer";
import Header from "../shared/Header";

import checkoutImage from "../../assets/images/checkout/checkout.png";
import { Helmet } from "react-helmet-async";

const Checkout = () => {
  return (
    <div>
      <Helmet>
        <title>Car Doctor | Checkout</title>
      </Helmet>
      <Header></Header>
      <div className="relative max-w-7xl mx-auto my-12">
        <div className="relative w-full">
          <div className="hidden md:absolute  md:flex md:h-full md:text-white">
            <div className="rounded-xl pl-20 pt-32 bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0.00)]">
              <h1 className="text-5xl font-bold mb-7">Checkout</h1>
            </div>
          </div>
          <div>
            <h1 className="absolute text-xl py-2 px-10 bottom-0 right-1/2 font-medium text-white bg-[#FF3811]">
              Home/Checkout
            </h1>
          </div>
          <img src={checkoutImage} className="w-full" alt="" />
        </div>

        <div className="my-32">
          <div className="hero h-auto md:p-24 bg-base-200 rounded-xl">
            <div className="w-full">
              <form className="card-body grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="form-control">
                  <input
                    type="text"
                    placeholder="First Name"
                    className="input input-bordered"
                    required
                  />
                </div>
                <div className="form-control">
                  <input
                    type="text"
                    placeholder="Last Name"
                    className="input input-bordered"
                    required
                  />
                </div>
                <div className="form-control">

                  <input
                    type="text"
                    placeholder="Your Phone"
                    className="input input-bordered"
                    required
                  />
                </div>
                <div className="form-control">

                  <input
                    type="text"
                    placeholder="Your Email"
                    className="input input-bordered"
                    required
                  />
                </div>

                <div className="form-control col-span-2">
                  <textarea
                    placeholder="Your Message"
                    className="textarea textarea-bordered textarea-lg"
                  ></textarea>
                </div>
                <div className="form-control mt-6 col-span-2 ">
                  <button className="btn btn-primary bg-[#FF3811] text-white hover:bg-[#d35238]">
                    Order Confirm
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default Checkout;
