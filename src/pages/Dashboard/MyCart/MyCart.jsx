import { Helmet } from "react-helmet-async";
import useCart from "../../../hooks/useCart";
import { FaRegCreditCard, FaRegTrashAlt } from "react-icons/fa";
import Swal from "sweetalert2";
import { Link } from "react-router-dom";


const MyCart = () => {
    const [cart, refetch] = useCart();
    const totalClassesPrice = cart.reduce((accumulator, element) => element.price + accumulator, 0);


    const handleDeleteCartClass = (cartItem) => {
        Swal.fire({
            title: 'Are you sure?',
            text: `You won't be able to revert this ${cartItem.className} Class!`,
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        }).then((result) => {
            if (result.isConfirmed) {
                fetch(`https://my-summer-camp-server.vercel.app/carts/${cartItem._id}`, {
                    method: 'DELETE'
                })
                    .then(res => res.json())
                    .then(data => {
                        if (data.deletedCount > 0) {
                            refetch();
                            Swal.fire(
                                'Deleted!',
                                `Your selected ${cartItem.className} class has been deleted!`,
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
            <h2 className="text-center text-3xl uppercase my-10">My Selected Classes</h2>
            <div className="h-20 mb-8 text-xl flex justify-evenly items-center bg-indigo-400">
                <h3>Selected Classes: {cart.length}</h3>
                <h3>Total Price: ${totalClassesPrice}</h3>
                <Link to="/dashboard/payment">
                    <button disabled={cart.length === 0 && true} className="btn btn-success btn-sm text-green-900"> Make Payment <FaRegCreditCard></FaRegCreditCard> </button>
                </Link>
            </div>
            <div>
                <div className="overflow-x-auto">
                    <table className="table">
                        {/* head */}
                        <thead>
                            <tr>
                                <th>#</th>
                                <th>Image</th>
                                <th>Name</th>
                                <th>Price</th>
                                <th>Delete</th>
                            </tr>
                        </thead>
                        <tbody>
                            {/* row 1 */}
                            {
                                cart.map((rowData, index) => <tr key={rowData._id}>
                                    <td> {index + 1} </td>
                                    <td>
                                        <div className="avatar">
                                            <div className="mask mask-squircle w-12 h-12">
                                                <img src={rowData.classImage} alt="Class Image" />
                                            </div>
                                        </div>
                                    </td>
                                    <td>{rowData.className}</td>
                                    <td>${rowData.price}</td>
                                    <td>
                                        <button onClick={() => handleDeleteCartClass(rowData)} className="btn btn-error"><FaRegTrashAlt className="text-white"></FaRegTrashAlt> </button>
                                    </td>
                                </tr>)
                            }

                        </tbody>

                    </table>
                </div>
            </div>
        </div>
    );
};

export default MyCart;