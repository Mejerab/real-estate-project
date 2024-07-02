import { Swiper , SwiperSlide } from 'swiper/react';
import { Pagination, Navigation } from 'swiper/modules';
const Swipers = () => {
    return (
        <div className="ml-2 mr-3 rounded-2xl">
                <Swiper
                    slidesPerView={1}
                    spaceBetween={30}
                    loop={true}
                    pagination={{
                        clickable: true,
                    }}
                    navigation={true}
                    modules={[Pagination, Navigation]}
                    className="mySwiper h-[500px] rounded-2xl"
                >
                    <SwiperSlide>
                        <img src="https://images.unsplash.com/photo-1676500684456-99f21e42a6fe?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" className="w-full mt-2 h-[400px] lg:h-[540px] rounded-t-2xl" />
                        <div className="bg-[#131313CC] text-white rounded-2xl absolute p-6 right-10 bottom-[46px] animate__slideInLeft animate__animated">
                            <h5 className="font-bold">Best estates</h5>
                            <p className="font-semibold">We provide the best estates in town</p>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src="https://images.unsplash.com/photo-1570129477492-45c003edd2be?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" className="w-full mt-2 h-[400px] lg:h-[540px] rounded-t-2xl" />
                        <div className="bg-[#131313CC] text-white rounded-2xl absolute p-6 right-10 bottom-12 animate__slideInRight animate__animated">
                            <h5 className="font-bold">Best estates</h5>
                            <p className="font-semibold">We provide the best estates in town</p>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src="https://images.unsplash.com/photo-1623784929309-703b81d39eec?q=80&w=1550&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" className="w-full mt-2 h-[400px] lg:h-[540px] rounded-t-2xl" />
                        <div className="bg-[#131313CC] text-white rounded-2xl absolute p-6 right-10 bottom-12 animate__slideInLeft animate__animated">
                            <h5 className="font-bold">Best estates</h5>
                            <p className="font-semibold">We provide the best estates in town</p>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src="https://plus.unsplash.com/premium_photo-1694475139518-165ab3efc679?q=80&w=1472&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" className="w-full mt-2 h-[400px] lg:h-[540px] rounded-t-2xl" />
                        <div className="bg-[#131313CC] text-white rounded-2xl absolute p-6 right-10 bottom-12 animate__slideInRight animate__animated">
                            <h5 className="font-bold">Best estates</h5>
                            <p className="font-semibold">We provide the best estates in town</p>
                        </div>
                    </SwiperSlide>
                </Swiper>
            </div>
    );
};

export default Swipers;