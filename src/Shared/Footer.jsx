import { FaFacebook, FaTwitter, FaYoutube } from "react-icons/fa";
import { MdOutlineRealEstateAgent } from "react-icons/md";

const Footer = () => {
    return (
        <>
            <footer className="footer flex justify-between pl-10 pr-14 p-10 bg-[#3D52A0] text-white">
                    <nav className="flex flex-col">
                        <h6 className="footer-title">Services</h6>
                        <a className="link link-hover">Branding</a>
                        <a className="link link-hover">Design</a>
                        <a className="link link-hover">Marketing</a>
                        <a className="link link-hover">Advertisement</a>
                    </nav>
                    <nav className="flex flex-col">
                        <h6 className="footer-title">Company</h6>
                        <a className="link link-hover">About us</a>
                        <a className="link link-hover">Contact</a>
                        <a className="link link-hover">Jobs</a>
                        <a className="link link-hover">Press kit</a>
                    </nav>
                    <nav className="flex flex-col">
                        <h6 className="footer-title">Legal</h6>
                        <a className="link link-hover">Terms of use</a>
                        <a className="link link-hover">Privacy policy</a>
                        <a className="link link-hover">Cookie policy</a>
                    </nav>
            </footer>
            <footer className="footer flex justify-between items-center px-10 py-4 border-t bg-[#3D52A0] text-white border-base-300">
                <aside className="items-center grid-flow-col">
                <MdOutlineRealEstateAgent className="text-4xl -ml-3 text-white" />
                    <p>ACME Industries Ltd. <br />Providing reliable tech since 1992</p>
                </aside>
                <nav className="md:place-self-center md:justify-self-end">
                    <div className="grid grid-flow-col gap-4 text-white text-2xl">
                        <a href="https://twitter.com"><FaTwitter /></a>
                        <a href="https://youtube.com"><FaYoutube /></a>
                        <a href="https://facebook.com"><FaFacebook /></a>
                    </div>
                </nav>
            </footer>
        </>
    );
};

export default Footer;