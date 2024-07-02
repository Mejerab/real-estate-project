import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles
// ..
AOS.init({
    offset: 80
});
import { useNavigate } from "react-router-dom";
import PropTypes from 'prop-types';
const AgainSIngleHouse = ({house}) => {
    const navigate = useNavigate();
    const { id, name, status, area, location, price, description, house_image } = house;
    const handleView = () => {
        navigate(`/single-family/${id}`)
    }
    return (
        <div className="card w-[500px] lg:mx-0 mx-auto bg-base-100 lg:w-[410px] shadow-xl" >
            <figure>
                <img className="w-full lg:w-fit h-[300px]"
                    src={house_image}
                    alt="HOUSE" />
            </figure>
            <div className="card-body text-left">
                <h2 className="card-title font-bold">{name}</h2>
                <p className="font-semibold my-2">{description}</p>
                <div className="flex font-medium">
                    <p className="font-semibold">Type: Single-family</p>
                    <p className="font-semibold">Status: {status}</p>
                </div>
                    <p className="font-semibold">Area: {area}</p>
                    <p className="font-semibold">Location: {location}</p>
                <div className="card-actions mt-3 flex-col ml-auto justify-end">
                    <p className="text-sm text-center w-full font-semibold">{status === 'For Sale' ? <span>Price:</span> : <span>Rent:</span>} {price}</p>
                    <button onClick={handleView} className="btn px-7 bg-[#3D52A0] text-white">View Property</button>
                </div>
                <div></div>
            </div>
        </div>
    );
};
AgainSIngleHouse.propTypes = {
    house: PropTypes.object
}
export default AgainSIngleHouse;