import { useState } from "react";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
const Header = () => {
    const [open, setOpen] = useState(false);
    return (
        <div className="bg-[#e4dcdc]">
            <nav className="max-w-7xl mx-auto flex items-center justify-between py-6 px-4">
                <div onClick={()=> setOpen(!open)} className=" md:hidden text-3xl font-extrabold text-gray-800">
                    {
                        open ? <AiOutlineClose /> :  <AiOutlineMenu />
                    }
                </div>
                <h1 className="text-4xl font-bold text-gray-700">TechMart</h1>
                <ul className={`absolute md:static bg-black text-white md:text-gray-700 md:bg-[#e4dcdc] md:duration-0 md:flex items-center font-semibold text-lg md:gap-2 w-52 md:w-auto md:h-0 duration-1000 top-[92px] h-screen ${open ? "left-0" : "-left-96"}`}>
                    <li className="py-6 px-6 mt-10 md:mt-0"><a href="#">Home</a></li>
                    <li className="py-6 px-6"><a href="#">Products</a></li>
                    <li className="py-6 px-6"><a href="#">Sign up</a></li>
                    <li className="py-6 px-6"><a href="#">Login</a></li>
                </ul>
                <div className="flex items-center bg-[#E02C6D] py-2 px-4 rounded-md gap-1">
                    <i className="fa-solid fa-cart-plus text-white text-xl"></i>
                    <div className="bg-white w-6 h-6 rounded-full flex items-center justify-center p-1">
                        <span className="text-xl font-bold text-gray-700">0</span>
                    </div>
                </div>
            </nav>
        </div>
    );
};

export default Header;