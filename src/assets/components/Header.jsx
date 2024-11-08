import { HiBars3CenterLeft } from "react-icons/hi2";
const Header = () => {
    return(
        <header className=" py-3 mb-5 bg-white shadow-md">
            <div className="container w-11/12 mx-auto">
                <div className="flex justify-between items-center">
                    <h2 className="font-bold"> টাইম ম্যানেজমেন্ট সিস্টেম </h2>
                    <span className="text-2xl"> <HiBars3CenterLeft /> </span>
                </div>
            </div>
        </header>
    );
}
export default Header;