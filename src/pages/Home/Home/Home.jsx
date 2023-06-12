import OtherServices from "../../../components/OtherServices/OtherServices";
import PopularClassess from "../../../components/PopularClassess/PopularClassess";
import PopularInstructors from "../../../components/PopularInstructors/PopularInstructors";
import Banner from "../Banner/Banner";
import { Helmet } from 'react-helmet-async';



const Home = () => {
    
    return (
        <div>
            <Helmet>
                <title>Melody Tune | Home</title>
                <link rel="canonical" href="https://www.tacobell.com/" />
            </Helmet>
            <Banner></Banner>
            <PopularClassess></PopularClassess>
            <PopularInstructors></PopularInstructors>
            <OtherServices></OtherServices>
        </div>
    );
};

export default Home;