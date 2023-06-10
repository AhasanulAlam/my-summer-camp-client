import { Helmet } from "react-helmet-async";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import { useQuery } from "@tanstack/react-query";
import SingleInstructor from "../../components/SingleInstructor/SingleInstructor";


const Instructors = () => {
    const [axiosSecure] = useAxiosSecure();
    const { data: instructors = []} = useQuery(['instructors'], async () => {
        const res = await axiosSecure.get(`/instructors`)
        return res.data;
    })

    return (
        <div>
            <Helmet>
                <title>Melody Tune | Instructors</title>
                <link rel="canonical" href="https://www.tacobell.com/" />
            </Helmet>
            <h2></h2>
            <h2 className="text-6xl text-center my-10 text-green-600">Our Instructors</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 my-8">
                {
                   instructors.map(instructor => <SingleInstructor
                   key={instructor._id}
                   instructor={instructor}
                   ></SingleInstructor>) 
                }
            </div>

        </div>
    );
};

export default Instructors;