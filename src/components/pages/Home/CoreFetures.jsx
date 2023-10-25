import feature1 from "../../../assets/icons/group.svg";
import feature2 from "../../../assets/icons/Group 38729.svg";
import feature3 from "../../../assets/icons/person.svg";
import feature4 from "../../../assets/icons/Wrench.svg";
import feature5 from "../../../assets/icons/check.svg";
import feature6 from "../../../assets/icons/deliveryt.svg";
const CoreFetures = () => {
  return (
    <div className="max-w-7xl mx-auto mb-32">
      <div className="w-full mt-12 text-center space-y-5">
        <h3 className="text-xl font-bold text-[#FF3811]">Core Features</h3>
        <h1 className="text-2xl lg:text-5xl font-bold">Why Choose Us</h1>
        <p className="pb-6 text-[#737373]">
          The majority have suffered alteration in some form, by injected
          humour, or Randomized <br /> words which do not look even slightly
          believable.
        </p>
      </div>

      <div className="flex justify-around gap-6 flex-col md:flex-row lg:flex-row my-10 mx-3">
        <div className="border rounded-xl space-y-2 p-7 hover:bg-[#FF3811] hover:text-white">
        <div className="flex justify-center">
         <img src={feature1} alt="" />
         </div>
          <p className="text-lg font-bold">Expert Team</p>
        </div>

        <div className="border rounded-xl space-y-2 p-7 hover:bg-[#FF3811] hover:text-white">
        <div className="flex justify-center">
         <img className="text-black" src={feature2} alt="" />
         </div>
          <p className="text-lg font-bold">Timely Delivery</p>
        </div>

        <div className="border rounded-xl space-y-2 p-7 hover:bg-[#FF3811] hover:text-white">
         <div className="flex justify-center">
         <img src={feature3} alt="" />
         </div>
          <p className="text-lg font-bold">24/7 Support</p>
        </div>

        <div className="border rounded-xl space-y-2 p-7 hover:bg-[#FF3811] hover:text-white">
         <div className="flex justify-center">
         <img src={feature4} alt="" />
         </div>
          <p className="text-lg font-bold">Best Equipment</p>
        </div>

        <div className="border rounded-xl space-y-2 p-7 hover:bg-[#FF3811] hover:text-white">
         <div className="flex justify-center">
         <img src={feature5} alt="" />
         </div>
          <p className="text-lg font-bold">100% Guranty</p>
        </div>

        <div className="border rounded-xl space-y-2 p-7 hover:bg-[#FF3811] hover:text-white">
         <div className="flex justify-center">
         <img src={feature6} alt="" />
         </div>
          <p className="text-lg font-bold">Timely Delivery</p>
        </div>
      </div>
    </div>
  );
};

export default CoreFetures;
