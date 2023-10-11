import Footer from "./Footer";
import Header from "./Header";
import {ReactNode} from "react";

interface Props {
    children: ReactNode;
    activeNav: string;
    title?: string;
}

const Layout = ({ children, activeNav, title }: Props) => (
    <div className="min-h-screen relative pb-32">
        <Header activeNav={activeNav} title={title} />
        {children}
        <Footer/>
    </div>
);

export default Layout;
