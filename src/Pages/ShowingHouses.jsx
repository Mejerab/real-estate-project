import { useLoaderData } from "react-router-dom";
import House from "./House";
import 'animate.css';
const ShowingHouses = () => {
    const houses = useLoaderData();
    console.log(houses);
    return (
        <div>
            <h3 className="text-4xl font-bold text-center my-7 animate__animated animate__backInUp delay-1000">Best Houses</h3>
            <div className="grid grid-cols-1 lg:grid-cols-3 ml-2 gap-x-10">
                {
                    houses.map(house=> <House key={house.id} house={house}></House>)
                }
            </div>
        </div>
    );
};

export default ShowingHouses;