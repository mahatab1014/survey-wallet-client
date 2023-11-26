import { Outlet } from "react-router-dom";
import DashboardNav from "../components/DashboardNav/DashboardNav";

const DashboardLayout = () => {
  return (
    <>
      <main className="flex">
        <aside className="w-2/12">
          <DashboardNav />
        </aside>
        <div className="w-10/12">
          <Outlet />
        </div>
      </main>
    </>
  );
};

export default DashboardLayout;
