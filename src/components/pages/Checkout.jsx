import Footer from "../shared/Footer";
import Header from "../shared/Header";

import checkoutImage from "../../assets/images/checkout/checkout.png";
import { Helmet } from "react-helmet-async";
import { useLoaderData, useNavigate } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../../providers/AuthProvider";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Checkout = () => {
  const { user } = useContext(AuthContext);
  const service = useLoaderData();
  const { title, _id, price, img } = service;
  const navigate = useNavigate();

  const handleBookService = e => {
    e.preventDefault();

    const form = e.target;
    const full_name = form.full_name.value;
    const phone = form.phone.value;
    const email = form.email.value;
    const price = form.price.value;
    const date = form.date.value;
    const message = form.message.value;
    const booking = {
      customerName: full_name,
      phone,
      email,
      date,
      img,
      price,
      message,
      service: title,
      service_id: _id,
    };
    console.log(booking);

    fetch("http://localhost:5002/bookings/", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(booking),
    })
      .then(res => res.json())
      .then(data => {
        console.log(data);
      });
    toast.success("You booked successfully.");
    navigate("/");
  };

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
            <div className="card w-full">
              <h2 className="text-center text-3xl">Book Service: {title}</h2>
              <form
                onSubmit={handleBookService}
                className="card-body grid grid-cols-1 md:grid-cols-2 gap-6"
              >
                <div className="form-control">
                  <input
                    type="text"
                    placeholder="Full Name"
                    defaultValue={user.displayName}
                    name="full_name"
                    className="input input-bordered"
                    required
                  />
                </div>

                <div className="form-control">
                  <input
                    type="text"
                    placeholder="Your Phone"
                    name="phone"
                    className="input input-bordered"
                    required
                  />
                </div>
                <div className="form-control">
                  <input
                    type="text"
                    name="email"
                    placeholder="Your Email"
                    defaultValue={user.email}
                    className="input input-bordered"
                    required
                  />
                </div>
                <div className="form-control">
                  <input
                    type="date"
                    name="date"
                    className="input input-bordered"
                    required
                  />
                </div>
                <div className="form-control col-span-2">
                  <input
                    type="text"
                    name="price"
                    defaultValue={"$ " + price}
                    className="input input-bordered"
                    required
                  />
                </div>

                <div className="form-control col-span-2">
                  <textarea
                    placeholder="Your Message"
                    name="message"
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
        <ToastContainer></ToastContainer>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default Checkout;
