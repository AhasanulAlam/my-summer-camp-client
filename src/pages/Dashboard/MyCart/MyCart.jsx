import { Helmet } from "react-helmet-async";
import useCart from "../../../hooks/useCart";
import { FaRegTrashAlt } from "react-icons/fa";


const MyCart = () => {
    const [cart] = useCart();
    const totalClassesPrice = cart.reduce((accumulator, element) => element.price + accumulator, 0)
    return (
        <div>
            <Helmet>
                <title>Melody Tune | My Selected Classes</title>
                <link rel="canonical" href="https://www.tacobell.com/" />
            </Helmet>
            <h2 className="text-center text-3xl uppercase my-10">My Selected Classes</h2>
            <div className="h-20 text-xl flex justify-evenly">
                <h3>Selected Classes: {cart.length}</h3>
                <h3>Total Price: ${totalClassesPrice}</h3>
                <button className="btn btn-error btn-sm text-indigo-600">Make Payment</button>
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
                                <th>Action</th>
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
                                    <td className="text-right">${rowData.price}</td>
                                    <td>
                                        <button className="btn btn-error"><FaRegTrashAlt className="text-white"></FaRegTrashAlt> </button>
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