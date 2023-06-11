import { Helmet } from "react-helmet-async";
import useClassesToManage from "../../../hooks/useClassesToManage";

const ManageClasses = () => {
    const [classes] = useClassesToManage();

    const handleApproveClass = (id) =>{
        console.log(id);
        // TODO: Update the class Status
    
    }
    const handleDenyClass = (id) =>{
        console.log(id);
        // TODO: Update the class Status
    }




    return (
        <div className="w-full">
            <Helmet>
                <title>Melody Tune | Dashboard | Manage Classes</title>
                <link rel="canonical" href="https://www.tacobell.com/" />
            </Helmet>
            <h2 className="text-3xl text-center font-semibold my-8">Manage Classes</h2>
            <div>
                <div className="overflow-x-auto">
                    <table className="table">
                        {/* head */}
                        <thead>
                            <tr>
                                <th>#</th>
                                <th>Class Image</th>
                                <th>Class Name</th>
                                <th>Instructor Name</th>
                                <th>Instructor Email</th>
                                <th>Available Seats</th>
                                <th>Price</th>
                                <th>Status</th>
                                <th>Action</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {/* row data */}
                            {
                                classes.map((singleClass, index) => <tr key={singleClass._id}>
                                    <td>{index + 1}</td>
                                    <td>
                                        <div className="flex items-center space-x-3">
                                            <div className="avatar">
                                                <div className="mask mask-squircle w-12 h-12">
                                                    <img src={singleClass.classImage} alt="Class Image" />
                                                </div>
                                            </div>
                                        </div>
                                    </td>
                                    <td> {singleClass.className} </td>
                                    <td> {singleClass.instructorName} </td>
                                    <td> {singleClass.instructorEmail} </td>
                                    <td> {singleClass.availableSeats} </td>
                                    <td> ${singleClass.price} </td>
                                    <td> {singleClass.classStatus} </td>
                                    <th>
                                        {
                                            <button onClick={(()=>handleApproveClass(singleClass._id))} disabled={singleClass.classStatus === 'approved' && true} className="btn btn-success btn-xs">Approve</button>
                                        }
                                    </th>
                                    <th>
                                        <button onClick={(()=>handleDenyClass(singleClass._id))} disabled={singleClass.classStatus === 'approved' && true} className="btn btn-error btn-xs">Deny</button>
                                    </th>
                                </tr>
                                )
                            }

                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default ManageClasses;