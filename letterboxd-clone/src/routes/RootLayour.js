import Header from "../components/Header";
import {Outlet} from "react-router-dom";
import Footer from "../components/Footer";
import classes from "../routes/RootLayout.modules.css";

const RootLayout = () => {
  return (
    <body className={classes.Root}>
      <Header/>
      <div className={classes.outlet}>
        <Outlet/>
      </div>
      <Footer/>
    </body>
  )
}

export default RootLayout;
