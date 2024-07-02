import { useEffect, useState } from "react";
import AgainMultyHouse from "./AgainMultyHouse";

const MultyHouse = () => {
    const [houseData, setHouseData] = useState([]);
    useEffect(() => {
        fetch('/MultiHouses.json')
            .then(res => res.json())
            .then(data => setHouseData(data))
    }, [])

    return (
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-y-7 my-8">
            {
                houseData.map(house => <AgainMultyHouse key={house.id} house={house}></AgainMultyHouse>)
            }
        </div>
    );
};

export default MultyHouse;