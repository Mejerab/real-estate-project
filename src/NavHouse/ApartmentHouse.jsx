import { useEffect, useState } from "react";
import AgainApartmentHouse from "./AgainApartmentHouse";

const ApartmentHouse = () => {
    const [houseData, setHouseData] = useState([]);
    useEffect(() => {
        fetch('/ApartmentHouses.json')
            .then(res => res.json())
            .then(data => setHouseData(data))
    }, [])

    return (
        <div className="grid grid-cols-1 lg:grid-cols-2 xl:ml-0 ml-10 xl:grid-cols-3 gap-y-7 my-8">
            {
                houseData.map(house => <AgainApartmentHouse key={house.id} house={house}></AgainApartmentHouse>)
            }
        </div>
    );
};

export default ApartmentHouse;