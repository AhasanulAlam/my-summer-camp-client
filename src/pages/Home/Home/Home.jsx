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
        </div>
    );
};

export default Home;