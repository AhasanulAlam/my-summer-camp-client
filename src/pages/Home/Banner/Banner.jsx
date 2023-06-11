
import "react-responsive-carousel/lib/styles/carousel.min.css";
import bannerImage1 from '../../../assets/banner/banner-1.jpg'
import bannerImage2 from '../../../assets/banner/banner-2.jpg'
import bannerImage3 from '../../../assets/banner/banner-3.jpg'
import bannerImage4 from '../../../assets/banner/banner-4.jpg'
import bannerImage5 from '../../../assets/banner/banner-5.jpg'


// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

import './Banner.css';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

// import required modules
import { Autoplay, Pagination, Navigation } from 'swiper';
import { useRef } from 'react';


const Banner = () => {
    const progressCircle = useRef(null);
    const progressContent = useRef(null);
    const onAutoplayTimeLeft = (s, time, progress) => {
        progressCircle.current.style.setProperty('--progress', 1 - progress);
        progressContent.current.textContent = `${Math.ceil(time / 1000)}s`;
    };

    return (
        <div>
            <div className=''>
                <Swiper
                    spaceBetween={30}
                    centeredSlides={true}
                    autoplay={{
                        delay: 2500,
                        disableOnInteraction: false,
                    }}
                    pagination={{
                        clickable: true,
                    }}
                    navigation={true}
                    modules={[Autoplay, Pagination, Navigation]}
                    onAutoplayTimeLeft={onAutoplayTimeLeft}
                    className="mySwiper"
                >
                    <SwiperSlide>
                        <img src={bannerImage1} alt="" />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src={bannerImage2} alt="" />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src={bannerImage3} alt="" />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src={bannerImage4} alt="" />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src={bannerImage5} alt="" />
                    </SwiperSlide>
                    <div className="autoplay-progress" slot="container-end">
                        <svg viewBox="0 0 48 48" ref={progressCircle}>
                            <circle cx="24" cy="24" r="20"></circle>
                        </svg>
                        <span ref={progressContent}></span>
                    </div>
                </Swiper>
            </div>


        </div>
    );
};

export default Banner;