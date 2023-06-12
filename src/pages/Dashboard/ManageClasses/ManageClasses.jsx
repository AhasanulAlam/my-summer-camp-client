import { Helmet } from "react-helmet-async";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import { useQuery } from "@tanstack/react-query";
import Swal from "sweetalert2";

const ManageClasses = () => {
    const [axiosSecure] = useAxiosSecure();
    const { data: classes = [], refetch } = useQuery(['classes'], async () => {
        const res = await axiosSecure.get(`/manageclasses`)
        return res.data;
    })

    const handleApproveClass = (singleClass) => {
        fetch(`https://my-summer-camp-server.vercel.app/class/approve/${singleClass._id}`, {
            method: 'PATCH'
        })
            .then(res => res.json())
            .then(data => {
                if (data.modifiedCount) {
                    refetch();
                    Swal.fire({
                        position: 'center',
                        icon: 'success',
                        title: `${singleClass.className} is Approved Class Now!`,
                        showConfirmButton: false,
                        timer: 1500
                    })
                }
            })

    }
    const handleDenyClass = (singleClass) => {
        console.log(singleClass);
        const denyFeedBack = document.getElementById(`feedbackField${singleClass._id}`).value;
        const feedBack = { feedBack: denyFeedBack }        
        fetch(`https://my-summer-camp-server.vercel.app/class/deny/${singleClass._id}`, {
            method: 'PATCH',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(feedBack)
        })
            .then(res => res.json())
            .then(data => {
                if (data.modifiedCount) {
                    refetch();
                    Swal.fire({
                        position: 'center',
                        icon: 'success',
                        title: `${singleClass.className} is Approved Class Now!`,
                        showConfirmButton: false,
                        timer: 1500
                    })
                }
            })
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
                                            <button onClick={(() => handleApproveClass(singleClass))} disabled={(singleClass.classStatus === 'approved' || singleClass.classStatus === 'denied') && true} className="btn btn-success btn-xs">Approve</button>
                                        }
                                    </th>
                                    <th>
                                        <button onClick={(() => handleDenyClass(singleClass))} disabled={(singleClass.classStatus === 'approved' || singleClass.classStatus === 'denied') && true} className="btn btn-error btn-xs">Deny</button>
                                    </th>
                                    <th>
                                        <textarea disabled={(singleClass.classStatus === 'approved' || singleClass.classStatus === 'denied') && true}  className="textarea textarea-error" name="feedbackField" id={`feedbackField${singleClass._id}`} placeholder="Feedback if Deny!" required></textarea>
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