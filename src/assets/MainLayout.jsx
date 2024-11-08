import { Outlet } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import toast, { Toaster } from 'react-hot-toast';
const MainLayout = () => {

    return(
        <section>
            <Toaster />
        <Header></Header>
        <Outlet></Outlet>
        <Footer></Footer>
        </section>
    );

}

export default MainLayout;