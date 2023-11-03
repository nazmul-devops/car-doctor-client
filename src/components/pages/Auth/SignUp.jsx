import { Link, useNavigate } from "react-router-dom";
import Footer from "../../shared/Footer";
import Header from "../../shared/Header";
import loginImage from "../../../assets/images/login/login.svg";
import { Helmet } from "react-helmet-async";
import { useContext } from "react";
import { AuthContext } from "../../../providers/AuthProvider";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const SignUp = () => {
  const { createUser } = useContext(AuthContext);

  const navigate = useNavigate();

  const handleRegister = e => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;
    const name = e.target.name.value;
    const phone = e.target.phone.value;

    const passMinLength = 6;
    const passHasCapitalLetter = /[A-Z]/.test(password);
    const passHasSpecialCharacter = /[!@#$%^&*()_+{}[\]:;<>,.?~\\-]/.test(
      password
    );

    if (password.length < passMinLength) {
      toast.error("Password must be at least 6 characters long.");
      return;
    }

    if (!passHasCapitalLetter) {
      toast.error("Password must contain at least one capital letter.");
      return;
    }

    if (!passHasSpecialCharacter) {
      toast.error("Password must contain at least one special character.");
      return;
    }

    createUser(email, password)
      .then(result => {
        console.log(result.user);
        const user = { email, password, name, phone };
        fetch("http://localhost:5002/users", {
          method: "POST",
          headers: {
            "content-type": "application/json",
          },
          body: JSON.stringify(user),
        })
          .then(res => res.json())
          .then(data => {
            console.log(data);
          });
        navigate("/login");
      })
      .catch(error => {
        console.error(error);
      });
    toast.success("You have Registered successfully.");
  };

  return (
    <div>
      <Helmet>
        <title>Car Doctor | Sign Up Page</title>
      </Helmet>
      <Header></Header>
      <div className="hero min-h-screen">
        <div className="hero-content space-x-28 flex-col lg:flex-row">
          <div className="text-center lg:text-left">
            <img src={loginImage} alt="" />
          </div>
          <div className="card w-full max-w-md border-2 shadow-xl">
            <form onSubmit={handleRegister} className="card-body">
              <h1 className="text-4xl font-bold text-center">Sign Up</h1>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Name</span>
                </label>
                <input
                  type="name"
                  placeholder="name"
                  name="name"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="email"
                  placeholder="email"
                  name="email"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Phone</span>
                </label>
                <input
                  type="text"
                  name="phone"
                  placeholder="phone"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input
                  type="password"
                  name="password"
                  placeholder="password"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control mt-6 space-y-5 text-center">
                <button className="btn bg-[#FF3811] text-white hover:bg-orange-700">
                  Sign Up
                </button>
                <p>Or Sign In With</p>
                <div className="flex gap-6 justify-center items-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="55"
                    height="55"
                    viewBox="0 0 55 55"
                    fill="none"
                  >
                    <circle cx="27.5" cy="27.5" r="27.5" fill="#F5F5F8" />
                  </svg>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="55"
                    height="55"
                    viewBox="0 0 55 55"
                    fill="none"
                  >
                    <circle cx="27.5" cy="27.5001" r="27.5" fill="#F5F5F8" />
                  </svg>
                </div>
                <p>
                  Already have an account?
                  <Link to="/login">
                    <span className="text-[#FF3811]"> Sign In</span>
                  </Link>
                </p>
              </div>
            </form>
          </div>
        </div>
        <ToastContainer></ToastContainer>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default SignUp;
