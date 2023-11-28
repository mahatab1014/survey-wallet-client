import { useNavigate } from "react-router-dom";
import useAuth from "../hooks/useAuth";
import Swal from "sweetalert2";
import useAdmin from "../hooks/useAdmin";
import ReactPreloader from "../components/PreLoader/ReactPreloader";

const HideAdminRoutes = ({ children }) => {
  const { logOutUser } = useAuth();
  const [isAdmin, isAdminLoading] = useAdmin();
  const navigate = useNavigate();

  console.log(isAdmin);

  const handleOthersUser = () => {
    Swal.fire({
      title: "Are you sure?",
      text: "You're not allowed to access admin dashboard",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Go Dashboard",
      cancelButtonText: "Log out!",
    }).then((result) => {
      if (result.isConfirmed) {
        navigate("/dashboard"); // Use navigate to redirect :::::::::::::
      } else if (result.dismiss === Swal.DismissReason.cancel) {
        logOutUser(); // log out when user click on "Log out!" button :::::::::::
      }
    });
  };

  if (isAdminLoading) {
    return <ReactPreloader />;
  }

  if (isAdmin === "admin") {
    return children;
  }

  return handleOthersUser();
};

export default HideAdminRoutes;
