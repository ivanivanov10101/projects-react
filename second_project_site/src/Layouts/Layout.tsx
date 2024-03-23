import { Outlet } from "react-router-dom";
import Header from "../components/Header/Header";
import FooterComponent from "../components/Footer/Footer.tsx";

const Layout = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <div className="flex-1">
        <Outlet />
      </div>
      <FooterComponent />
    </div>
  );
};

export default Layout;
