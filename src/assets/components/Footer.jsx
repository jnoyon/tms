import { NavLink } from "react-router-dom";

const Footer = () => {
    return(
        <footer className="pt-10">
            <div className="bg-white fixed w-full bottom-0">
            <div className="container w-11/12 mx-auto font-bold bottom-nav">
            <div className="flex justify-between">
            <NavLink to="/task"> টাস্ক </NavLink>
               <NavLink to="/"> হোম </NavLink>
               <NavLink to="/timebox"> সময় বণ্টন </NavLink>
            </div>
               
            </div>
        </div>
        </footer>
    );
}
export default Footer;