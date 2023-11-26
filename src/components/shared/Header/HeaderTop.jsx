import Container from "../../Container/Container";
import LogoLight from "../../../assets/images/logo/logo_light.png";
import { FaEnvelope, FaPhone } from "react-icons/fa6";
import { LuLayoutDashboard } from "react-icons/lu";

import { Link } from "react-router-dom";
import useAuth from "../../../hooks/useAuth";

const HeaderTop = () => {
  const { user } = useAuth();

  return (
    <>
      {/* <Container>
        <div className="flex justify-between items-center">
          <div>
            <Link>
              <picture>
                <img className="w-56" src={LogoLight} alt="Survey Wallet" />
              </picture>
            </Link>
          </div>

          <div className="flex gap-5">
            <div className="flex items-center space-x-2">
              <span className="inline-block bg-[#F5972F] p-2 rounded-full text-white">
                <FaPhone className="text-xl" />
              </span>
              <div>
                <strong className="block">Call Now</strong>
                <Link to="tel:8801775025349">
                  <span className="hover:underline">(+00) 888.666.88</span>
                </Link>
              </div>
            </div>

            <div className="flex items-center space-x-2">
              <span className="inline-block bg-[#F5972F] p-2 rounded-full text-white">
                <FaEnvelope className="text-xl" />
              </span>
              <div>
                <strong className="block">Email</strong>
                <Link to="mailto:mahatab1014@gmail.com">
                  <span className="hover:underline">support@sw.com</span>
                </Link>
              </div>
            </div>
            <div>
              <button className="btn">Request a Quote</button>
            </div>
          </div>
        </div>
      </Container> */}
      <Container>
        <div className="flex justify-end items-center py-1">
          <div className="flex gap-5">
            <div className="flex items-center space-x-2 text-sm">
              <span className="inline-block bg-orange-color p-1.5 rounded-full text-white">
                <FaPhone className="" />
              </span>
              <div>
                <Link to="tel:8801775025349">
                  <span className="hover:underline">(+880) 17750-25349</span>
                </Link>
              </div>
            </div>

            <div className="flex items-center space-x-2 text-sm">
              <span className="inline-block bg-orange-color p-1.5 rounded-full text-white">
                <FaEnvelope className="" />
              </span>
              <div>
                <Link to="mailto:mahatab1014@gmail.com">
                  <span className="hover:underline">support@sw.com</span>
                </Link>
              </div>
            </div>
            {user && (
              <div className="flex items-center space-x-2 text-sm">
                <span className="inline-block bg-orange-color p-1.5 rounded-full text-white">
                  {/* <FaEnvelope className="" /> */}
                </span>
                <div>
                  <Link to="/become-a-pro-user">
                    <span className="hover:underline ">Become A Pro User</span>
                  </Link>
                </div>
              </div>
            )}

            {!user && (
              <div className="flex items-center space-x-2 text-sm">
                <span className="inline-block bg-orange-color p-1.5 rounded-full text-white">
                  {/* <FaEnvelope className="" /> */}
                </span>
                <div>
                  <Link to="/auth">
                    <span className="hover:underline ">Login</span>
                  </Link>
                </div>
              </div>
            )}

            {user && (
              <div className="">
                <Link
                  to="/dashboard"
                  className="flex items-center space-x-2 text-sm"
                >
                  <span className="inline-block bg-orange-color p-1.5 rounded-full text-white">
                    <LuLayoutDashboard />
                  </span>
                  <div>
                    <span className="hover:underline ">Dashboard</span>
                  </div>{" "}
                </Link>
              </div>
            )}
          </div>
        </div>
      </Container>
    </>
  );
};

export default HeaderTop;
