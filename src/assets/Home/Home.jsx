import { Outlet } from "react-router-dom";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Timebox from "../components/Timebox";
import Newstask from "../components/Newtask";


const Home = () => {
    return(
        <div>
            <section>
                <Timebox></Timebox>
                <Newstask></Newstask>
            </section>
            
        </div>
    )
}
export default Home;