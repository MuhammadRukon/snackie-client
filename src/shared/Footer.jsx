import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="footer footer-center p-10 ">
      <aside>
        <Link to="/" className="text-xl font-semibold">
          Snackie
        </Link>
        <p className="font-bold">PH Ltd.</p>
        <p>Copyright © 2023 - All right reserved</p>
      </aside>
    </footer>
  );
};

export default Footer;
