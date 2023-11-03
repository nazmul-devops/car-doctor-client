import { Link, useNavigate } from "react-router-dom";
import Footer from "../../shared/Footer";
import Header from "../../shared/Header";
import loginImage from "../../../assets/images/login/login.svg";
import { Helmet } from "react-helmet-async";
import { FcGoogle } from "react-icons/fc";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../../providers/AuthProvider";

const Login = () => {
  const [showToast, setShowToast] = useState(false);

  const { signInUser, googleSignIn } = useContext(AuthContext);

  const navigate = useNavigate();

  useEffect(() => {
    if (showToast) {
      toast.success("You have Signed In successfully.", {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
    }
  }, [showToast]);

  // Email & password sign in
  const handleSignIn = async e => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;

    signInUser(email, password)
      .then(result => {
        console.log(result.user);
        setShowToast(true);
        setTimeout(() => {
          navigate("/");
        }, 1000);
      })
      .catch(error => {
        if (email === "auth/user-not-found") {
          toast.error("Email not found. Please check your email.");
        } else if (error.code === "auth/wrong-password") {
          toast.error("Incorrect password. Please try again.");
        } else {
          toast.error("An unexpected error occurred. Please try again.");
        }
      });
  };

  // Google Sign In
  const handleGoogleSignIn = () => {
    googleSignIn()
      .then(result => {
        console.log(result.user);
        setShowToast(true);
        setTimeout(() => {
          navigate("/");
        }, 1000);
      })
      .catch(error => {
        console.error(error);
      });
  };
  return (
    <div>
      <Helmet>
        <title>Car Doctor | Sign In Page</title>
      </Helmet>
      <Header></Header>
      <div className="hero min-h-screen">
        <div className="hero-content space-x-28 flex-col lg:flex-row">
          <div className="text-center lg:text-left">
            <img src={loginImage} alt="" />
          </div>
          <div className="card w-full max-w-md border-2 shadow-xl">
            <form onSubmit={handleSignIn} className="card-body">
              <h1 className="text-4xl font-bold text-center">Login</h1>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="email"
                  placeholder="email"
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
                  placeholder="password"
                  className="input input-bordered"
                  required
                />
                <label className="label">
                  <a href="#" className="label-text-alt link link-hover">
                    Forgot password?
                  </a>
                </label>
              </div>
              <div className="form-control mt-6 space-y-5 text-center">
                <button className="btn bg-[#FF3811]  text-white hover:bg-orange-700">
                  Sign In
                </button>
                <p>Or Sign In With</p>
                <div className="flex gap-6 justify-center items-center">
                  <button className="btn" onClick={handleGoogleSignIn}>
                    Sign in with <FcGoogle></FcGoogle>
                  </button>
                </div>
                <p>
                  Do not have an account?{" "}
                  <Link to="/register">
                    <span className="text-[#FF3811]">Sign Up</span>
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

export default Login;
