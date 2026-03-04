import { FaPlus } from "react-icons/fa6";

const NavBar = () => {




    return (
        <div>
            <div className="navbar bg-base-100 shadow-sm">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
                        </div>
                        <ul
                            tabIndex="-1"
                            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
                            <li><a>Home</a></li>
                            <li><a>FAQ</a></li>
                            <li><a>Changelog</a></li>
                            <li><a>Blog</a></li>
                            <li><a>Download</a></li>
                            <li><a>Contact</a></li>
                        </ul>
                    </div>
                    <a className=" text-2xl md:font-bold font-medium font-serif
                     bg-linear-to-tl from-[#9F62F2] to-[#632EE3] bg-clip-text text-transparent 
                    ">TicketPolit</a>
                </div>
                <div className="navbar-end ">
                    <div className="navbar-center hidden lg:flex mr-5">
                        <ul className="menu menu-horizontal px-1">
                            <li><a>Home</a></li>
                            <li><a>FAQ</a></li>
                            <li><a>Changelog</a></li>
                            <li><a>Blog</a></li>
                            <li><a>Download</a></li>
                            <li><a>Contact</a></li>
                        </ul>
                    </div>
                    <div>
                        <a className="btn text-white bg-linear-to-tl from-[#9F62F2]  to-[#632EE3] 
hover:opacity-90 transition "><FaPlus /> New Ticket</a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default NavBar;