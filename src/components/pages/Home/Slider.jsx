import sliderImage1 from "./../../../assets/images/banner/1.jpg";
import sliderImage2 from "./../../../assets/images/banner/2.jpg";
import sliderImage3 from "./../../../assets/images/banner/3.jpg";
import sliderImage4 from "./../../../assets/images/banner/4.jpg";
import sliderImage5 from "./../../../assets/images/banner/5.jpg";
import sliderImage6 from "./../../../assets/images/banner/6.jpg";

const Slider = () => {
  return (
    <div className="max-w-7xl mx-auto">
      <div className="carousel w-full rounded-lg h-[300px] mx-3 md:h-[600px]">
        {/* slide 01 */}
        <div id="slide1" className="carousel-item relative w-full">
          <img src={sliderImage1} className="w-full" />
          <div className="hidden md:absolute md:flex md:h-full md:w-1/2 md:text-white">
            <div className="pl-20 pt-20 bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0.00)]">
              <h1 className="text-6xl font-bold mb-7">
                Affordable <br /> Price For Car Servicing
              </h1>
              <p className="mb-7">
                There are many variations of passages of available, but the
                majority have suffered alteration in some form
              </p>
              <div className="space-x-5">
                <button className="btn bg-[#FF3811] hover:bg-[#ce4b31] text-white">
                  Discover More
                </button>
                <button className="btn btn-outline btn-secondary text-white">
                  Latest Project
                </button>
              </div>
            </div>
          </div>
          <div className="absolute flex right-5 bottom-5">
            <a
              href="#slide6"
              className="btn btn-circle mr-5 text-white bg-transparent hover:bg-[#FF3811]"
            >
              ❮
            </a>
            <a
              href="#slide2"
              className="btn btn-circle  text-white bg-transparent hover:bg-[#FF3811]"
            >
              ❯
            </a>
          </div>
        </div>
        {/* slide 02 */}
        <div id="slide2" className="carousel-item relative w-full">
          <img src={sliderImage2} className="w-full" />
          <div className="hidden md:absolute md:flex md:h-full md:w-1/2 md:text-white">
            <div className="pl-20 pt-20 bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0.00)]">
              <h1 className="text-6xl font-bold mb-7">
                Affordable <br /> Price For Car Servicing
              </h1>
              <p className="mb-7">
                There are many variations of passages of available, but the
                majority have suffered alteration in some form
              </p>
              <div className="space-x-5">
                <button className="btn bg-[#FF3811] hover:bg-[#ce4b31] text-white">
                  Discover More
                </button>
                <button className="btn btn-outline btn-secondary text-white">
                  Latest Project
                </button>
              </div>
            </div>
          </div>
          <div className="absolute flex right-5 bottom-5">
            <a
              href="#slide1"
              className="btn btn-circle mr-5 text-white bg-transparent hover:bg-[#FF3811]"
            >
              ❮
            </a>
            <a
              href="#slide3"
              className="btn btn-circle  text-white bg-transparent hover:bg-[#FF3811]"
            >
              ❯
            </a>
          </div>
        </div>
        {/* slide 03  */}
        <div id="slide3" className="carousel-item relative w-full">
          <img src={sliderImage3} className="w-full" />
          <div className="hidden md:absolute md:flex md:h-full md:w-1/2 md:text-white">
            <div className="pl-20 pt-20 bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0.00)]">
              <h1 className="text-6xl font-bold mb-7">
                Affordable <br /> Price For Car Servicing
              </h1>
              <p className="mb-7">
                There are many variations of passages of available, but the
                majority have suffered alteration in some form
              </p>
              <div className="space-x-5">
                <button className="btn bg-[#FF3811] hover:bg-[#ce4b31] text-white">
                  Discover More
                </button>
                <button className="btn btn-outline btn-secondary text-white">
                  Latest Project
                </button>
              </div>
            </div>
          </div>
          <div className="absolute flex right-5 bottom-5">
            <a
              href="#slide2"
              className="btn btn-circle mr-5 text-white bg-transparent hover:bg-[#FF3811]"
            >
              ❮
            </a>
            <a
              href="#slide4"
              className="btn btn-circle  text-white bg-transparent hover:bg-[#FF3811]"
            >
              ❯
            </a>
          </div>
        </div>
        {/* slide 04  */}
        <div id="slide4" className="carousel-item relative w-full">
          <img src={sliderImage4} className="w-full" />
          <div className="hidden md:absolute md:flex md:h-full md:w-1/2 md:text-white">
            <div className="pl-20 pt-20 bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0.00)]">
              <h1 className="text-6xl font-bold mb-7">
                Affordable <br /> Price For Car Servicing
              </h1>
              <p className="mb-7">
                There are many variations of passages of available, but the
                majority have suffered alteration in some form
              </p>
              <div className="space-x-5">
                <button className="btn bg-[#FF3811] hover:bg-[#ce4b31] text-white">
                  Discover More
                </button>
                <button className="btn btn-outline btn-secondary text-white">
                  Latest Project
                </button>
              </div>
            </div>
          </div>
          <div className="absolute flex right-5 bottom-5">
            <a
              href="#slide3"
              className="btn btn-circle mr-5 text-white bg-transparent hover:bg-[#FF3811]"
            >
              ❮
            </a>
            <a
              href="#slide5"
              className="btn btn-circle  text-white bg-transparent hover:bg-[#FF3811]"
            >
              ❯
            </a>
          </div>
        </div>

        {/* slide 05  */}
        <div id="slide5" className="carousel-item relative w-full">
          <img src={sliderImage5} className="w-full" />
          <div className="hidden md:absolute md:flex md:h-full md:w-1/2 md:text-white">
            <div className="pl-20 pt-20 bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0.00)]">
              <h1 className="text-6xl font-bold mb-7">
                Affordable <br /> Price For Car Servicing
              </h1>
              <p className="mb-7">
                There are many variations of passages of available, but the
                majority have suffered alteration in some form
              </p>
              <div className="space-x-5">
                <button className="btn bg-[#FF3811] hover:bg-[#ce4b31] text-white">
                  Discover More
                </button>
                <button className="btn btn-outline btn-secondary text-white">
                  Latest Project
                </button>
              </div>
            </div>
          </div>
          <div className="absolute flex right-5 bottom-5">
            <a
              href="#slide4"
              className="btn btn-circle mr-5 text-white bg-transparent hover:bg-[#FF3811]"
            >
              ❮
            </a>
            <a
              href="#slide6"
              className="btn btn-circle  text-white bg-transparent hover:bg-[#FF3811]"
            >
              ❯
            </a>
          </div>
        </div>
        {/* slide 06  */}
        <div id="slide6" className="carousel-item relative w-full">
          <img src={sliderImage6} className="w-full" />
          <div className="hidden md:absolute md:flex md:h-full md:w-1/2 md:text-white">
            <div className="pl-20 pt-20 bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0.00)]">
              <h1 className="text-6xl font-bold mb-7">
                Affordable <br /> Price For Car Servicing
              </h1>
              <p className="mb-7">
                There are many variations of passages of available, but the
                majority have suffered alteration in some form
              </p>
              <div className="space-x-5">
                <button className="btn bg-[#FF3811] hover:bg-[#ce4b31] text-white">
                  Discover More
                </button>
                <button className="btn btn-outline btn-secondary text-white">
                  Latest Project
                </button>
              </div>
            </div>
          </div>
          <div className="absolute flex right-5 bottom-5">
            <a
              href="#slide5"
              className="btn btn-circle mr-5 text-white bg-transparent hover:bg-[#FF3811]"
            >
              ❮
            </a>
            <a
              href="#slide1"
              className="btn btn-circle  text-white bg-transparent hover:bg-[#FF3811]"
            >
              ❯
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Slider;
