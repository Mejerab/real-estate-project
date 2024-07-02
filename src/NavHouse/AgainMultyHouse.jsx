import { useNavigate } from "react-router-dom";
import PropTypes from 'prop-types';
import AOS from 'aos';
import 'aos/dist/aos.css';
AOS.init({
    offset: 80
});
const AgainMultyHouse = ({ house }) => {
    const navigate = useNavigate();
    const { id, name, status, area, location, price, description, type, house_image } = house;
    const handleView = () => {
        navigate(`/multy-family/${id}`)
    }
    return (
        <div data-aos="fade-up" className="card bg-base-100 w-[580px] lg:mx-0 mx-auto lg:w-[410px] shadow-xl" >
            <figure>
                <img className="lg:w-fit w-full h-[300px]"
                    src={house_image}
                    alt="HOUSE" />
            </figure>
            <div className="card-body text-left">
                <h2 className="card-title font-bold">{name}</h2>
                <p className="font-semibold my-2">{description}</p>
                <div className="flex font-medium">
                    <p className="font-semibold">Type: {type}</p>
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
AgainMultyHouse.propTypes = {
    house: PropTypes.object
}

export default AgainMultyHouse;