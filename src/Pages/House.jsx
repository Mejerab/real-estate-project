import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles
// ..
AOS.init({
    offset: 80
});
import PropTypes from 'prop-types';
import { useNavigate } from 'react-router-dom';
const House = ({ house }) => {
    const navigate = useNavigate();
    const { id, image, estate_title, segment_name, description, price, Status, Area, location } = house;
    const handleProperty = () =>{
        navigate(`/house/${id}`)
    }
    return (
        <div data-aos="fade-up">
            <div className="card bg-base-100 mx-auto lg:mx-0 lg:w-96 w-[500px] shadow-xl h-fit mb-12">
                <figure className="h-1/2 lg:w-fit ml-1">
                    <img className="h-[300px] lg:h-[250px] lg:w-fit w-full"
                        src={image}
                        alt="house image" />
                </figure>
                <div className="card-body">
                    <h2 className="card-title">{estate_title}</h2>
                    <p>{description}</p>
                    <p className="flex -ml-4">
                        <span className="mx-4 font-semibold">Type: {segment_name}</span>
                        <span className="mx-4 font-semibold">Status: {Status}</span>
                    </p>
                        <p className="font-semibold">Area: {Area}</p>
                        <p className="font-semibold">Location: {location}</p>
                    <div className="card-actions flex-col justify-end ml-auto mt-3">
                    <p className="font-semibold text-sm text-center w-40">{Status === 'sale' ? <span>Price:</span> : <span>Rent:</span>} {price}</p>
                    <button onClick={handleProperty} className="btn bg-[#3D52A0] text-white px-7 w-fit">View property</button>
                    </div>
                </div>
            </div>
        </div>
    );
};
House.propTypes = {
    house: PropTypes.object
}

export default House;