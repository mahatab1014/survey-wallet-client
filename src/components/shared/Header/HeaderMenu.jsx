import { Link, NavLink } from "react-router-dom";
import { FaFacebook, FaXTwitter } from "react-icons/fa6";
import { AiOutlineSearch } from "react-icons/ai";
import Container from "../../Container/Container";
import HeaderTop from "./HeaderTop";
import LogoDark from "../../../assets/images/logo/logo_dark.png";

const HeaderMenu = () => {
  const activeButton = `!bg-transparent !border-b-2 hover:!border-b-2 !border-white active:scale-95 font-bold uppercase`;
  const inActiveButton = `!bg-transparent !border-b-2 !border-transparent hover:!border-b-2 hover:!border-white hover:!text-white active:scale-95 font-medium uppercase`;
  const menuLinks = (
    <>
      <li>
        <NavLink
          to="/"
          className={({ isActive, isPending }) =>
            isPending ? "pending" : isActive ? activeButton : inActiveButton
          }
        >
          Home
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/surveys"
          className={({ isActive, isPending }) =>
            isPending ? "pending" : isActive ? activeButton : inActiveButton
          }
        >
          Surveys
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/blog"
          className={({ isActive, isPending }) =>
            isPending ? "pending" : isActive ? activeButton : inActiveButton
          }
        >
          Blog
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/about-us"
          className={({ isActive, isPending }) =>
            isPending ? "pending" : isActive ? activeButton : inActiveButton
          }
        >
          About Us
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/contact-us"
          className={({ isActive, isPending }) =>
            isPending ? "pending" : isActive ? activeButton : inActiveButton
          }
        >
          Contact Us
        </NavLink>
      </li>
    </>
  );

  return (
    <>
      <div className="bg-slate-100 hidden lg:block">
        <HeaderTop />
      </div>

      <div className="bg-[#041729fa] sticky top-0">
        <Container>
          <nav>
            <div className="navbar">
              <div className="navbar-start">
                <div className="dropdown">
                  <label tabIndex={0} className="btn btn-ghost lg:hidden">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M4 6h16M4 12h8m-8 6h16"
                      />
                    </svg>
                  </label>
                  <ul
                    tabIndex={0}
                    className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
                  >
                    {menuLinks}
                  </ul>
                </div>
                <Link>
                  <picture>
                    <img className="w-2/4" src={LogoDark} alt="" />
                  </picture>
                </Link>
              </div>
              <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1 text-white">
                  {menuLinks}
                </ul>
              </div>
              <div className="hidden md:inline-flex navbar-end space-x-2">
                <button className="btn btn-square border-none bg-gray-950 hover:bg-stone-950 text-white">
                  <AiOutlineSearch className="text-2xl" />
                </button>
                <button className="btn btn-square border-none bg-gray-950 hover:bg-stone-950 text-white">
                  <FaFacebook className="text-2xl" />
                </button>
                <button className="btn btn-square border-none bg-gray-950 hover:bg-stone-950 text-white">
                  <FaXTwitter className="text-2xl" />
                </button>
              </div>
            </div>
          </nav>
        </Container>
      </div>
    </>
  );
};

export default HeaderMenu;
