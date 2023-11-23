import Container from "../../Container/Container";
import LogoLight from "../../../assets/images/logo/logo_light.png";
import { FaEnvelope, FaPhone } from "react-icons/fa6";
import { Link } from "react-router-dom";

const HeaderTop = () => {
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
            <div className="flex items-center space-x-2">
              <span className="inline-block bg-orange-color p-2 rounded-full text-white">
                <FaPhone className="" />
              </span>
              <div>
                <Link to="tel:8801775025349">
                  <span className="hover:underline">(+00) 01775-025349</span>
                </Link>
              </div>
            </div>

            <div className="flex items-center space-x-2">
              <span className="inline-block bg-orange-color p-2 rounded-full text-white">
                <FaEnvelope className="" />
              </span>
              <div>
                <Link to="mailto:mahatab1014@gmail.com">
                  <span className="hover:underline">support@sw.com</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </>
  );
};

export default HeaderTop;