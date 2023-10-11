import Footer from "./Footer";
import Header from "./Header";

const Layout = ({ children, button, title }) => (
  <div className="min-h-screen relative pb-32">
    <Header button={button} title={title} />
    {children}
    <Footer/>
  </div>
);

export default Layout;
