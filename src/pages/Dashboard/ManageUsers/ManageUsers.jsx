import { useQuery } from "@tanstack/react-query";
import { Helmet } from "react-helmet-async";
import { FaRegTrashAlt } from "react-icons/fa";
import Swal from "sweetalert2";
import useAxiosSecure from "../../../hooks/useAxiosSecure";


const ManageUsers = () => {
    const [axiosSecure] = useAxiosSecure();
    const { data: users = [], refetch } = useQuery(['users'], async () => {
        const res = await axiosSecure.get(`/users`)
        return res.data;
    })


    const handleMakeAdmin = (user) => {
        fetch(`http://localhost:5000/users/admin/${user._id}`, {
            method: 'PATCH'
        })
            .then(res => res.json())
            .then(data => {
                if (data.modifiedCount) {
                    refetch();
                    Swal.fire({
                        position: 'center',
                        icon: 'success',
                        title: `${user.name} is became an Admin Now!`,
                        showConfirmButton: false,
                        timer: 1500
                    })
                }
            })

    }

    const handleMakeInstructor = (user) =>{
        fetch(`http://localhost:5000/users/instructor/${user._id}`, {
            method: 'PATCH'
        })
            .then(res => res.json())
            .then(data => {
                if (data.modifiedCount) {
                    refetch();
                    Swal.fire({
                        position: 'center',
                        icon: 'success',
                        title: `${user.name} is became an Instructor Now!`,
                        showConfirmButton: false,
                        timer: 1500
                    })
                }
            })

    }

    const handleDeleteUser = (user) => {
        Swal.fire({
            title: 'Are you sure?',
            text: `You won't be able to revert this User: ${user.name}`,
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        }).then((result) => {
            if (result.isConfirmed) {
                axiosSecure.delete(`/users/${user._id}`)
                    .then(res => {
                        console.log('Deleted response', res.data);
                        if (res.data.deletedCount > 0) {
                            refetch();
                            Swal.fire(
                                'Deleted!',
                                `User: ${user.name} has been deleted!`,
                                'success'
                            )
                        }
                    })
            }
        })

    }

    return (
        <div className="w-full">
            <Helmet>
                <title>Melody Tune | My Selected Classes</title>
                <link rel="canonical" href="https://www.tacobell.com/" />
            </Helmet>
            <div>
                <h3 className="text-3xl font-semibold my-8">Available Users: {users.length}</h3>
                <div className="overflow-x-auto">
                    <table className="table table-zebra">
                        {/* head */}
                        <thead>
                            <tr>
                                <th>#</th>
                                <th>Name</th>
                                <th>Email</th>
                                <th>Role Admin</th>
                                <th>Role Instructor</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {/* row data */}
                            {
                                users.map((user, index) => <tr key={user._id}>
                                    <th>{index + 1}</th>
                                    <td>{user.name}</td>
                                    <td>{user.email}</td>
                                    <td>
                                        {
                                            user.role === 'admin' ? 'admin' :
                                                <button disabled={user.role === 'instructor' && true}  onClick={() => handleMakeAdmin(user)} className="btn btn-outline btn-primary btn-xs">Admin</button>
                                        }
                                    </td>
                                    <td>
                                        {
                                            user.role === 'instructor' ? 'instructor' :
                                                <button disabled={user.role === 'admin' && true} onClick={() => handleMakeInstructor(user)} className="btn btn-outline btn-primary btn-xs">Instructor</button>
                                        }
                                    </td>
                                    <td><button onClick={() => handleDeleteUser(user)} className="btn btn-error btn-sm"><FaRegTrashAlt className="text-white"></FaRegTrashAlt> </button></td>
                                </tr>)
                            }
                        </tbody>
                    </table>
                </div>
            </div>

        </div>
    );
};

export default ManageUsers;