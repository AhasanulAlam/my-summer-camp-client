import { Helmet } from "react-helmet-async";

const MyEnrolledClass = () => {
    return (
        <div>
            <Helmet>
                <title>Melody Tune | Dashboard | My Enrolled Classes</title>
                <link rel="canonical" href="https://www.tacobell.com/" />
            </Helmet>
            <h2>My Enrolled Classes!</h2>
        </div>
    );
};

export default MyEnrolledClass;