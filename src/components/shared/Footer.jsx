import logo from "./../../assets/logo.svg";
const Footer = () => {
  return (
    <div className="">
      <footer className="p-10  bg-[#151515] text-[#f3f3f3]">
        <div className="max-w-7xl mx-auto md:h-[400px] items-center flex flex-col gap-10 md:flex-row md:justify-around">
          <aside className="md:w-1/5">
            <img src={logo} className="text-white mb-5" alt="" />
            <p>
              Edwin Diaz is a software and web technologies engineer, a life
              coach trainer who is also a serial .
            </p>
          </aside>

          <nav>
            <header className="footer-title">Services</header>
            <li className="link link-hover list-none">Branding</li>
            <li className="link link-hover list-none">Design</li>
            <li className="link link-hover list-none">Marketing</li>
            <li className="link link-hover list-none">Advertisement</li>
          </nav>
          <nav>
            <header className="footer-title">Company</header>
            <li className="link link-hover list-none">About us</li>
            <li className="link link-hover list-none">Contact</li>
            <li className="link link-hover list-none">Jobs</li>
            <li className="link link-hover list-none">Press kit</li>
          </nav>
          <nav>
            <header className="footer-title">Legal</header>
            <li className="link link-hover list-none">Terms of Condition</li>
            <li className="link link-hover list-none">Privacy policy</li>
            <li className="link link-hover list-none">Cookie policy</li>
            <li className="link link-hover list-none">Security policy</li>
          </nav>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
