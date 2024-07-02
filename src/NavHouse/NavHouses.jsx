import ApartmentHouse from "./ApartmentHouse";
import MultyHouse from "./MultyHouse";
import SingleHouse from "./SingleHouse";

const NavHouses = () => {
    return (
        <div>
            <h3 className="p-6 text-center my-3 rounded-2xl bg-[#3D52A0] text-white ml-2 mr-3 text-2xl font-bold">Best of the city</h3>
            <div className="text-center w-full">
                <h5 className="text-left ml-[108px] text-black font-bold text-lg">Types of houses</h5>
                <div role="tablist" className="tabs tabs-bordered">
                    <input type="radio" name="my_tabs_1" defaultChecked role="tab" className="tab font-bold" aria-label="Single family" />
                    <div role="tabpanel" className="tab-content mt-6">
                        <h3 className="text-2xl text-center font-bold">Single family houses</h3>
                        <SingleHouse></SingleHouse>
                    </div>

                    <input
                        type="radio"
                        name="my_tabs_1"
                        role="tab"
                        className="tab font-bold"
                        aria-label="Multy family" />
                    <div role="tabpanel" className="tab-content mt-6">
                        <h3 className="text-2xl text-center font-bold">Multy family houses</h3>
                        <MultyHouse></MultyHouse>
                    </div>

                    <input type="radio" name="my_tabs_1" role="tab" className="tab font-bold" aria-label="Apartment" />
                    <div role="tabpanel" className="tab-content mt-6">
                        <h3 className="text-2xl text-center font-bold">Apartment houses</h3>
                        <ApartmentHouse></ApartmentHouse>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default NavHouses;