import Lottie from "lottie-react";
import PageNotFoundLottie from "./page-not-found_3.json";
import { Link, useNavigate } from "react-router-dom";
const PageNotFound = () => {
  const navigate = useNavigate();
  return (
    <section className="container mx-auto px-5">
      <div className="-mt-20 relative">
        <Lottie
          className="h-96"
          animationData={PageNotFoundLottie}
          loop={true}
        />

        <div className="absolute bottom-12 w-full">
          <h2 className="text-3xl md:text-4xl text-center">Page Not Found</h2>
        </div>
      </div>
      <div className="text-center space-x-4  z-50">
        <button className="btn btn-error" onClick={() => navigate(-1)}>
          Back
        </button>
        <Link to="/" className="btn btn-accent">
          Back to Home
        </Link>
      </div>
    </section>
  );
};

export default PageNotFound;
