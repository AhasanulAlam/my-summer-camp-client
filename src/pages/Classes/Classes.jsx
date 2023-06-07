import { Helmet } from "react-helmet-async";
import useClasses from "../../hooks/useClasses";
import SingleClass from "../../components/SingleClass/SingleClass";


const Classes = () => {
    const[classes] = useClasses();
    return (
        <div className="mb-12">
            <Helmet>
                <title>Melody Tune | Classes</title>
                <link rel="canonical" href="https://www.tacobell.com/" />
            </Helmet>
            <h2 className="text-6xl text-center my-10 text-green-600">Available Classes</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                {
                    classes.map(singleClass => <SingleClass
                    key={singleClass._id}
                    singleClass={singleClass}
                    ></SingleClass>)
                }
            </div>
            
        </div>
    );
};

export default Classes;