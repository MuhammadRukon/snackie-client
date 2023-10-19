import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="footer footer-center p-10 ">
      <aside>
        <Link
          to="/"
          className="flex items-center normal-case text-3xl italic font-bold"
        >
          <div className="w-[40px]">
            <img
              className=""
              src="https://i.ibb.co/4sqQkb2/pngegg.png"
              alt=""
            />
          </div>
          Snackie
        </Link>
        <p className="font-bold">PH Ltd.</p>
        <p>Copyright © 2023 - All right reserved</p>
      </aside>
    </footer>
  );
};

export default Footer;
