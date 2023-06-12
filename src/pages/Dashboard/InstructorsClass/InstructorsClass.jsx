import { Helmet } from "react-helmet-async";
import useClassesForInstructor from "../../../hooks/useClassesForInstructor";
import useAuth from "../../../hooks/useAuth";

const InstructorsClass = () => {
    const { user } = useAuth();
    const [classes] = useClassesForInstructor();

    const instructorClasses = classes.filter(instructorClass =>  instructorClass.instructorEmail === user.email);

    return (

        <div>
            <Helmet>
                <title>Melody Tune | Dashboard | Instructor Classes</title>
                <link rel="canonical" href="https://www.tacobell.com/" />
            </Helmet>
            <h2>Instructors Available Classes: {instructorClasses.length} </h2>
            <div>
                <div className="overflow-x-auto">
                    <table className="table">
                        {/* head */}
                        <thead>
                            <tr>
                                <th>#</th>
                                <th>Class Image</th>
                                <th>Class name</th>
                                <th>Available Seats</th>
                                <th>Enrolled Seats</th>
                                <th>Price</th>
                                <th>Status</th>
                                <th>Feedback</th>
                            </tr>
                        </thead>
                        <tbody>
                            {/* row data */}
                            {
                                instructorClasses.map((instructorClass, index) => <tr key={instructorClass._id}>
                                    <td>{index + 1}</td>
                                    <td>
                                        <div className="flex items-center space-x-3">
                                            <div className="avatar">
                                                <div className="mask mask-squircle w-12 h-12">
                                                    <img src={instructorClass?.classImage} alt="Avatar Tailwind CSS Component" />
                                                </div>
                                            </div>
                                        </div>
                                    </td>
                                    <td>{instructorClass?.className}</td>
                                    <td>{instructorClass?.availableSeats}</td>
                                    <td>{instructorClass?.enrolledSeats}</td>
                                    <td>${instructorClass?.price}</td>
                                    <td>{instructorClass?.classStatus}</td>
                                    <th></th>
                                </tr>)

                            }
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default InstructorsClass;