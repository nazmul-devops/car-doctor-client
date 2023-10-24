import aboutImage1 from "./../../../assets/images/about_us/person.jpg";
import aboutImage2 from "./../../../assets/images/about_us/parts.jpg";

const AboutUs = () => {
  return (
    <div>
      <div className="hero">
        <div className="hero-content flex-col lg:flex-row mb-20">
          <div className="lg:w-1/2 relative ">
            <img
              src={aboutImage1}
              className="w-10/12 mr-16 rounded-lg shadow-2xl"
            />
            <img
              src={aboutImage2}
              className="w-2/3 absolute right-5 top-1/2 rounded-lg border-8 border-white"
              alt=""
            />
          </div>
          <div className="w-full mt-12 md:w-1/2 lg:w-1/2">
            <h3 className="text-xl font-bold text-[#FF3811] pb-5">About Us</h3>
            <h1 className="text-2xl lg:text-5xl font-bold">
              We are qualified <br /> & of experience <br /> in this field
            </h1>
            <p className="py-6 text-[#737373]">
              There are many variations of passages of Lorem Ipsum available,
              but the majority have suffered alteration in some form, by
              injected humour, or randomised words which do not look even
              slightly believable.
            </p>
            <p className="pb-6 text-[#737373]">
              the majority have suffered alteration in some form, by injected
              humour, or randomised words which do not look even slightly
              believable.
            </p>
            <button className="btn bg-[#FF3811] hover:bg-[rgb(212,85,59)] text-white">
              Get More Info
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
