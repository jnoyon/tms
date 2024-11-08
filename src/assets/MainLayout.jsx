import { Outlet } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";

const MainLayout = () => {

    return(
        <section className="bg-gradient-to-r from-indigo-100 via-purple-200 to-pink-100">
        <Header></Header>
        <Outlet></Outlet>
        <Footer></Footer>
        </section>
    );

}

export default MainLayout;