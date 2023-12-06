import { Link } from "react-router-dom";
import { LuSearch } from "react-icons/lu";
import logo from "../../../assets/logo.png";
import navBanner from "../../../assets/navbanner.jpeg";

const Navigation = () => {
  return (
    <div>
      <div className="flex justify-between mt-10">
        <div>
          <img src={logo} alt="" />
        </div>
        <div>
          <img src={navBanner} width={700} alt="" />
        </div>
      </div>
      <div className="flex justify-between my-4 shadow-md">
        <ul className="flex">
          <li className="text-lg px-3 uppercase font-semibold ">
            <Link className="hover:border-sky-500 hover:border-b-4 duration-100">
              News
            </Link>
          </li>
          <li className="text-lg px-3 uppercase font-semibold ">
            <Link className="hover:border-sky-500 hover:border-b-4 duration-100">
              fashions
            </Link>
          </li>
          <li className="text-lg px-3 uppercase font-semibold ">
            <Link className="hover:border-sky-500 hover:border-b-4 duration-100">
              gedgets
            </Link>
          </li>
          <li className="text-lg px-3 uppercase font-semibold ">
            <Link className="hover:border-sky-500 hover:border-b-4 duration-100">
              lifestyles
            </Link>
          </li>
          <li className="text-lg px-3 uppercase font-semibold ">
            <Link className="hover:border-sky-500 hover:border-b-4 duration-100">
              videos
            </Link>
          </li>
          <li className="text-lg px-3 uppercase font-semibold ">
            <Link className="hover:border-sky-500 hover:border-b-4 duration-100">
              features
            </Link>
          </li>
        </ul>
        <div>
          <LuSearch />
        </div>
      </div>
    </div>
  );
};

export default Navigation;
