import { NavLink } from "react-router-dom";
import { FaHome } from "react-icons/fa";
import { FaCalendarWeek } from "react-icons/fa";
import { MdTaskAlt } from "react-icons/md";
const Footer = () => {
    return(
        <footer className="pt-10">
            <div className="bg-white fixed w-full bottom-0 border-t border-solid border-gray-300">
            <div className="container w-11/12 mx-auto font-bold bottom-nav">
            <div className="flex justify-between items-center text-center">
                <p className="text-center"> <NavLink to="/task"> <span> <MdTaskAlt /> </span> <span className="text-sm">টাস্ক</span> </NavLink> </p>
               <NavLink to="/"> <span> <FaHome /> </span> <span className="text-sm"> হোম </span> </NavLink>
               <NavLink to="/timebox"> <span><FaCalendarWeek /></span> <span className="text-sm"> সময় বণ্টন  </span> </NavLink>
            </div>
               
            </div>
        </div>
        </footer>
    );
}
export default Footer;