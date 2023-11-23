import { Outlet } from "react-router-dom";
import Footer from "../components/shared/Footer/Footer";
import HeaderMenu from "../components/shared/Header/HeaderMenu";

const MainLayout = () => {
  return (
    <>
      <header>
        <HeaderMenu />
      </header>
      <main>
        <Outlet />
        <div className="py-96"></div>
        <div className="py-96"></div>
      </main>
      <footer>
        <Footer />
      </footer>
    </>
  );
};

export default MainLayout;
