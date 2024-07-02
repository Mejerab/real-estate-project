import Marquee from "react-fast-marquee";
import ShowingHouses from "./ShowingHouses";
import { FaApple, FaMicrosoft } from "react-icons/fa";
import { FcBbc } from "react-icons/fc";
// Import Swiper React components

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';


// import required modules
import { ToastContainer, toast } from "react-toastify";
import Swipers from "./Swipers";
import { Helmet } from "react-helmet";


const Home = () => {
    const handleSubmit = e => {
        e.preventDefault();
        const name = document.getElementById('name');
        const email = document.getElementById('email');
        const message = document.getElementById('message');
        if (!name.value || !email.value || !message.value) {
            toast.error('Write a message');
        }
        else {
            toast.success('Message sent')
            name.value = '';
            email.value = '';
            message.value = '';
        }
    }
    return (
        <>
        <Helmet>
            <title>Best Estates</title>
        </Helmet>
            <Swipers></Swipers>
            <ShowingHouses></ShowingHouses>

            <h3 className="mt-6 mb-5 text-center text-4xl font-bold text-black">Sponsors</h3>
            <Marquee speed={130} className="bg-base-200 rounded-full mt-2 mb-6">
                <img className="w-40 mt-1" src="https://cdn.freebiesupply.com/images/large/2x/google-logo-black-transparent.png" alt="" />
                <FaApple className="text-6xl -mt-1 text-black ml-12" />
                <span className="text-4xl font-bold text-black">Apple</span>
                <FaMicrosoft className="text-6xl textblack ml-12 text-black" />
                <span className="text-4xl text-black font-bold">Microsoft</span>
                <FcBbc className="text-9xl textblack ml-12 text-black" />
            </Marquee>
            <h3 className="text-center mt-12 my-3 text-black font-bold text-4xl">Our Location</h3>
            <div className="border flex xl:flex-row flex-col p-6 rounded-2xl my-7 ml-2 mr-3">
                <div className="xl:w-1/2 w-full">
                    <iframe className="xl:w-fit w-full" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1267074.1879280726!2d-78.49603012225096!3d42.47038673795673!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x54eab584e432360b%3A0x1c3bb99243deb742!2sUnited%20States!5e0!3m2!1sen!2sbd!4v1719795624571!5m2!1sen!2sbd" width="600" height="450" ></iframe>
                </div>
                <div className="xl:w-1/2 w-3/4 mx-auto xl:mx-0 xl:mt-0 mt-7 flex flex-col justify-center">
                    <h4 className="text-xl text-black text-center mb-2 font-bold">Send a message</h4>
                    <form onSubmit={handleSubmit}>
                        <div className="form-control border rounded-2xl mx-8">
                            <input type="text" name="name" placeholder="Name" className="input input-bordered mx-6 mt-4" id="name" />
                            <input type="email" placeholder="Email" name="email" className="input input-bordered mx-6 mt-4" id="email" />
                            <textarea name="message" placeholder="Message" id="message" className="textarea textarea-bordered rounded-lg mx-6 my-4 text-base" rows={6}></textarea>
                            <button className="btn mb-4 bg-[#3D52A0] text-white mx-6">Send message</button>
                        </div>
                    </form>
                </div>
            </div>
            <ToastContainer></ToastContainer>
        </>
    );
};

export default Home;