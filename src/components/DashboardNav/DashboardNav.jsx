import { AiOutlineHome, AiOutlineLogout } from "react-icons/ai";
import { MdLogout, MdOutlineReportProblem } from "react-icons/md";
import {
  FaHouse,
  FaSquarePollHorizontal,
  FaSquarePollVertical,
  FaUser,
  FaUsers,
} from "react-icons/fa6";
import { FaHistory } from "react-icons/fa";

import { Link, NavLink } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
import LogoLight from "../../assets/images/logo/logo_light.png";
// import useUserRole from "../../hooks/useUserRole";
import useAdmin from "../../hooks/useAdmin";

const DashboardNav = () => {
  const { user, logOutUser } = useAuth();
  // const [userRole, refetchUserRole] = useUserRole(user?.email);
  const [isAdmin, isAdminLoading] = useAdmin();

  const dashboardMenu = [
    {
      name: "Home",
      path: "/dashboard",
      icon: <FaHouse />,
    },
    {
      name: "Profile",
      path: "/dashboard/profile",
      icon: <FaUser />,
    },
    {
      name: "Payments Transaction",
      path: "/dashboard/payment-transactions",
      icon: <FaHistory />,
    },
  ];
  const surveyorMenu = [
    {
      name: "Survey List",
      path: "/dashboard/survey-list",
      icon: <FaSquarePollHorizontal />,
    },
    {
      name: "Survey Create",
      path: "/dashboard/survey-create",
      icon: <FaSquarePollVertical />,
    },
  ];
  const adminMenu = [
    {
      name: "Users List",
      path: "/dashboard/users",
      icon: <FaUsers />,
    },
    {
      name: "Reports List",
      path: "/dashboard/reports",
      icon: <MdOutlineReportProblem />,
    },
  ];

  return (
    <div className="flex flex-col h-screen px-5 py-8 overflow-y-auto bg-white border-r rtl:border-r-0 rtl:border-l dark:bg-gray-900 dark:border-gray-700">
      <div className="flex justify-center">
        <img className="w-auto h-10" src={LogoLight} alt="" />
      </div>

      <div className="flex flex-col justify-between flex-1 mt-6">
        <nav className="flex-1 -mx-3 space-y-3">
          <div className="relative mx-3">
            <span className="absolute inset-y-0 left-0 flex items-center pl-3">
              <svg
                className="w-5 h-5 text-gray-400"
                viewBox="0 0 24 24"
                fill="none"
              >
                <path
                  d="M21 21L15 15M17 10C17 13.866 13.866 17 10 17C6.13401 17 3 13.866 3 10C3 6.13401 6.13401 3 10 3C13.866 3 17 6.13401 17 10Z"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                ></path>
              </svg>
            </span>

            <input
              type="text"
              className="w-full py-1.5 pl-10 pr-4 text-gray-700 bg-white border rounded-md dark:bg-gray-900 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 dark:focus:border-blue-300 focus:ring-blue-300 focus:ring-opacity-40 focus:outline-none focus:ring"
              placeholder="Search"
            />
          </div>

          {isAdminLoading ? (
            <>
              <div className="flex flex-col gap-4 w-full">
                <div className="skeleton h-6 w-full"></div>
                <div className="skeleton h-6 w-full"></div>
                <div className="skeleton h-6 w-full"></div>
                <div className="skeleton h-6 w-full"></div>
              </div>
            </>
          ) : (
            <>
              {dashboardMenu.map((menu, index) => (
                <NavLink
                  key={index}
                  className="flex items-center px-3 py-2 text-gray-600 transition-colors duration-300 transform rounded-lg dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 dark:hover:text-gray-200 hover:text-gray-700"
                  to={menu?.path}
                >
                  {menu.icon}
                  <span className="mx-2 text-sm font-medium">{menu?.name}</span>
                </NavLink>
              ))}
              {isAdmin === "admin" && (
                <>
                  {adminMenu.map((menu, index) => (
                    <NavLink
                      key={index}
                      className="flex items-center px-3 py-2 text-gray-600 transition-colors duration-300 transform rounded-lg dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 dark:hover:text-gray-200 hover:text-gray-700"
                      to={menu?.path}
                    >
                      {menu.icon}
                      <span className="mx-2 text-sm font-medium">
                        {menu?.name}
                      </span>
                    </NavLink>
                  ))}
                  {(isAdmin === "surveyor" || isAdmin === "admin") && (
                    <>
                      {surveyorMenu.map((menu, index) => (
                        <NavLink
                          key={index}
                          className="flex items-center px-3 py-2 text-gray-600 transition-colors duration-300 transform rounded-lg dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 dark:hover:text-gray-200 hover:text-gray-700"
                          to={menu?.path}
                        >
                          {menu.icon}
                          <span className="mx-2 text-sm font-medium">
                            {menu?.name}
                          </span>
                        </NavLink>
                      ))}
                    </>
                  )}
                </>
              )}
            </>
          )}

          {/* {(userRole?.role === "pro_user" || userRole?.role === "admin") && (
            <>
              {pro_userMenu.map((menu, index) => (
                <NavLink
                  key={index}
                  className="flex items-center px-3 py-2 text-gray-600 transition-colors duration-300 transform rounded-lg dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 dark:hover:text-gray-200 hover:text-gray-700"
                  to={menu?.path}
                >
                  {menu.icon}
                  <span className="mx-2 text-sm font-medium">{menu?.name}</span>
                </NavLink>
              ))}
            </>
          )} */}
        </nav>

        <div className="mt-6">
          <div className="flex items-center justify-between mt-6 hover:bg-orange-200 rounded-box">
            <Link to="/dashboard/profile">
              <div className="flex items-center gap-x-2">
                <img
                  className="object-cover rounded-full h-7 w-7"
                  src={user?.photoURL}
                  alt="avatar"
                />
                <span className="text-sm font-medium text-gray-700 dark:text-gray-200">
                  {user?.displayName}
                </span>
              </div>
            </Link>

            <span
              onClick={logOutUser}
              data-tip="Log out"
              className="btn btn-ghost btn-circle btn-sm text-lg flex tooltip tooltip-top"
            >
              <MdLogout />
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardNav;
