import person from "../../../assets/icons/Ellipse 2.png";
import quote from "../../../assets/icons/quote.svg";

const Testimonial = () => {
  return (
    <div className="max-w-7xl mx-auto my-32">
      <div className="w-full mt-12 text-center space-y-5">
        <h3 className="text-xl font-bold text-[#FF3811]">Testimonial</h3>
        <h1 className="text-2xl lg:text-5xl font-bold">
          What Our Customer Says
        </h1>
        <p className="pb-6 text-[#737373]">
          The majority have suffered alteration in some form, by injected
          humour, or Randomized <br /> words which do not look even slightly
          believable.
        </p>
      </div>

      <div className="flex gap-6 flex-col md:flex-row mt-12">
        <div className="p-10 space-y-5">
          <div className="flex gap-6">
            <img src={person} alt="" />
            <div>
              <h1 className="font-bold">Nazmul Islam</h1>
              <p>Businessman</p>
            </div>
            <img className="w-14 text-orange-400" src={quote} alt="" />
          </div>
          <p className="text-[#737373]">
            There are many variations of passages of Lorem Ipsum available, but
            the majority have suffered alteration in some form, by injected
            humour, or randomized words which do not look even slightly
            believable.{" "}
          </p>

          <div className="rating rating-sm">
            <input
              type="radio"
              name="rating-6"
              className="mask mask-star-2 bg-orange-400"
            />
            <input
              type="radio"
              name="rating-6"
              className="mask mask-star-2 bg-orange-400"
              checked
            />
            <input
              type="radio"
              name="rating-6"
              className="mask mask-star-2 bg-orange-400"
            />
            <input
              type="radio"
              name="rating-6"
              className="mask mask-star-2 bg-orange-400"
            />
            <input
              type="radio"
              name="rating-6"
              className="mask mask-star-2 bg-orange-400"
            />
          </div>
        </div>

        <div className="p-10 space-y-5">
          <div className="flex gap-6">
            <img src={person} alt="" />
            <div className="">
              <h1 className="font-bold">Nazmul Islam</h1>
              <p>Businessman</p>
            </div>
            <img className="w-14 text-orange-400" src={quote} alt="" />
          </div>
          <p className="text-[#737373]">
            There are many variations of passages of Lorem Ipsum available, but
            the majority have suffered alteration in some form, by injected
            humour, or randomized words which do not look even slightly
            believable.
          </p>

          <div className="rating rating-sm">
            <input
              type="radio"
              name="rating-6"
              className="mask mask-star-2 bg-orange-400"
            />
            <input
              type="radio"
              name="rating-6"
              className="mask mask-star-2 bg-orange-400"
              checked
            />
            <input
              type="radio"
              name="rating-6"
              className="mask mask-star-2 bg-orange-400"
            />
            <input
              type="radio"
              name="rating-6"
              className="mask mask-star-2 bg-orange-400"
            />
            <input
              type="radio"
              name="rating-6"
              className="mask mask-star-2 bg-orange-400"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonial;
