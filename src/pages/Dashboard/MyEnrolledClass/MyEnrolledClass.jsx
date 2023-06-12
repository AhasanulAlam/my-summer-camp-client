import { Helmet } from "react-helmet-async";
import useClassesForStudent from "../../../hooks/useClassesForStudent";

const MyEnrolledClass = () => {
    const [classes] = useClassesForStudent();

    return (
        <div>
            <Helmet>
                <title>Melody Tune | Dashboard | My Enrolled Classes</title>
                <link rel="canonical" href="https://www.tacobell.com/" />
            </Helmet>
            <h2 className="text-center text-3xl uppercase my-10">My Enrolled Classes</h2>
            <div>
                <div className="overflow-x-auto">
                    <table className="table">
                        {/* head */}
                        <thead>
                            <tr>
                                <th>#</th>
                                <th>Class Image</th>
                                <th>Class Name</th>
                                <th>Price</th>
                                <th>Instructor Name</th>
                                <th>Instructor Email</th>
                                <th></th>
                            </tr>
                        </thead>
                        <tbody>
                            {/* row data */}
                            {
                                classes.map((singleClass, index) => <tr key={singleClass._id}>
                                    <th>{index + 1}</th>
                                    <td>
                                        <div className="flex items-center space-x-3">
                                            <div className="avatar">
                                                <div className="mask mask-squircle w-12 h-12">
                                                    <img src={singleClass.classImage} alt="Avatar Tailwind CSS Component" />
                                                </div>
                                            </div>
                                        </div>
                                    </td>
                                    <td>{singleClass.className}</td>
                                    <td>${singleClass.price}</td>
                                    <td>{singleClass.instructorName}</td>
                                    <td>{singleClass.instructorEmail}</td>
                                </tr>)
                            }
                            
                        </tbody>
                        
                    </table>
                </div>
            </div>
        </div>
    );
};

export default MyEnrolledClass;