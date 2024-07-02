import { Link, useLoaderData, useParams } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './SingleHouseProperty.css'
import { Helmet } from "react-helmet";
const SingleHouseProperty = () => {
    const singleHouse = useLoaderData();
    const { houseId } = useParams();
    console.log(houseId);
    const aSingleHouse = singleHouse.find(single => parseInt(houseId) === parseInt(single.id));
    const { id, name, status, area, location, price, house_facilities, description, house_image } = aSingleHouse;
    let count = 0;
    const handlePurchase = () => {
        count++;
        if (count <= 1) {
            if (status === 'For Sale') {
                toast.success('You bought successfully');
            }
            else {
                toast.success('Rent taken successfully');
            }
        }
        else {
            const nothing = document.getElementById('nothing');
            const nothing2 = document.getElementById('nothing2');
            nothing.classList.remove('hidden');
            nothing2.classList.remove('hidden');
        }
    }
    return (
        <div>
            <Helmet>
                <title>Best Estates || Houses: {`${id}`}</title>
            </Helmet>
            <div id="nothing2" className="relative top-72 z-50 hidden">
                <h2 className="text-4xl absolute top-1/2 -rotate-[17deg] font-bold text-white bg-[#dc2626E6] w-full text-center p-6">Sold</h2>
            </div>
            <div className="bg-[#3D52A0] text-white p-6 ml-2 mr-3 mt-6 rounded-2xl">
                <h4 className="text-2xl font-bold text-center">Single House No.{id}</h4>
            </div>
            <div className="border w-fit relative rounded-2xl grid xl:grid-cols-2 gap-x-6 ml-2 mr-3 my-6">
                <div id="nothing" className="bg-[#ffffffCC] z-20 w-full h-full absolute top-0 left-0 hidden"></div>
                <div className="z-10">
                    <img src={house_image} className="rounded-s-2xl h-full" alt="" />

                </div>
                <div className="flex flex-col justify-center py-10 ml-5">
                    <h3 className="text-2xl font-bold mb-3">{name}</h3>
                    {
                        description.length > 60 ? <p className="font-semibold">{description.slice(0, 60)} <br /> {description.slice(60, 500)}</p> : <p className="font-semibold">{description}</p>
                    }
                    <div className="my-3 flex">
                        <p className="font-semibold mr-6">Type: Single-family</p>
                        <p className="font-semibold ml-6">Status: {status}</p>
                    </div>
                    <div className="my-3 flex">
                        <p className="font-semibold mr-6">Area: {area}</p>
                        <p className="font-semibold ml-6">Location: {location}</p>
                    </div>
                    <p className="mb-3 font-semibold"><span>House facilities:</span>
                        {
                            house_facilities.map((facility, idx) => <li className=" text-base mx-2" key={idx}>{facility}</li>)
                        }
                    </p>
                    <p className="font-semibold my-3">
                        {
                            status === 'For Sale' ? <span className="pr-2">Price:</span> : <span className="pr-2">Rent:</span>
                        }
                        {price}
                    </p>
                    <div className="flex justify-end mr-5">
                        <Link to='/contact' className="btn border-2 border-[#3D52A0] font-bold px-7 mr-3">Visit</Link>
                        <button onClick={handlePurchase} className="btn bg-[#3D52A0] px-7 text-white">{status === 'For Sale' ? <span>Make it own</span> : <span>Take in rent</span>}</button>
                    </div>
                </div>
            </div>
            <ToastContainer />
        </div>
    );
};

export default SingleHouseProperty;