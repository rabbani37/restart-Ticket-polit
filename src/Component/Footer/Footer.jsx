import { FaFacebookF, FaLinkedinIn, FaRegMessage, FaXTwitter } from "react-icons/fa6";




const Footer = () => {
    return (

        <footer className="  bg-gray-900 text-gray-400 pt-10 px-10 ">
            <div className="footer sm:footer-horizontal container mx-auto">
                <div className="w-80">
                    <h2>
                        <a className=" text-2xl md:font-bold font-medium font-serif bg-linear-to-tl
                      from-[rgb(159,98,242)] to-[#632EE3] bg-clip-text text-transparent 
                    ">TicketPolit</a>
                    </h2>

                    <p>Our platform makes ticket booking simple, fast, and reliable. Users can easily browse events, select their preferred seats, and book tickets in just a few steps. We are committed to providing a smooth and secure ticketing experience for everyone.
                    </p>
                </div>
                <nav>
                    <h6 className="text-white font-black text-[16px]">Company</h6>
                    <a className="link link-hover">About us</a>
                    <a className="link link-hover">Contact</a>
                    <a className="link link-hover">Jobs</a>
                    <a className="link link-hover">Press kit</a>
                </nav>
                <nav>
                    <h6 className="text-white font-black text-[16px]">Services</h6>
                    <a className="link link-hover">Branding</a>
                    <a className="link link-hover">Design</a>
                    <a className="link link-hover">Marketing</a>
                    <a className="link link-hover">Advertisement</a>
                </nav>

                <nav>
                    <h6 className="text-white font-black text-[16px]">Information</h6>
                    <a className="link link-hover">Terms of use</a>
                    <a className="link link-hover">Privacy policy</a>
                    <a className="link link-hover">Join Us</a>
                </nav>
                <nav>
                    <h6 className="text-white font-black text-[16px]">Social Link</h6>
                    <a className="link link-hover flex items-center gap-2">
                        <p className="bg-gray-300 p-1 text-black rounded-2xl"><FaXTwitter /> </p>
                        <span>@CS — Ticket System</span>
                    </a>
                    <a className="link link-hover flex items-center gap-2">
                        <p className="bg-gray-300 p-1 text-black rounded-2xl"><FaLinkedinIn /> </p>
                        <span>@CS — Ticket System</span>
                    </a>
                    <a className="link link-hover flex items-center gap-2">
                        <p className="bg-gray-300 p-1 text-black rounded-2xl"><FaFacebookF /> </p>
                        <span>@CS — Ticket System</span>
                    </a>
                    <a className="link link-hover flex items-center gap-2">
                        <p className="bg-gray-300 p-1 text-black rounded-2xl"><FaRegMessage /> </p>
                        <span>support@cst.com</span>
                    </a>


                </nav>
            </div>
            <div className="text-center pt-20 pb-7">
                <p>© 2025 CS — Ticket System. All rights reserved.</p>
            </div>
        </footer>

    );
};

export default Footer;