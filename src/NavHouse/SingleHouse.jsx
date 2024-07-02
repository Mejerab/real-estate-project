

import { useEffect, useState } from "react";
import AgainSIngleHouse from "./AgainSIngleHouse";

const SingleHouse = () => {
    const [houseData, setHouseData] = useState([]);
    useEffect(() =>{
        fetch('/SingleHouses.json')
        .then(res=>res.json())
        .then(data=>setHouseData(data))
    }, [])
    
    return (
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-y-8 my-8">
            {
                houseData.map(house=><AgainSIngleHouse key={house.id} house={house}></AgainSIngleHouse>)
            }
        </div>
    );
};

export default SingleHouse;