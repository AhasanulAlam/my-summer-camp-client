
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import bannerImage1 from '../../../assets/banner/banner-1.jpg'
import bannerImage2 from '../../../assets/banner/banner-2.jpg'
import bannerImage3 from '../../../assets/banner/banner-3.jpg'


const Banner = () => {
    return (
        <div>
            <Carousel 
            autoPlay={true}
            stopOnHover={true} >
                <div>
                    <img src={bannerImage2} />
                </div>
                <div>
                    <img src={bannerImage1} />
                </div>
                <div>
                    <img src={bannerImage3} />
                </div>
            </Carousel>
            
        </div>
    );
};

export default Banner;