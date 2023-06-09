import { useContext } from "react";
import { AuthContext } from "../../providers/AuthProvider";
import Swal from "sweetalert2";
import { useLocation, useNavigate } from "react-router-dom";
import useCart from "../../hooks/useCart";

const SingleClass = ({ singleClass }) => {
    const { _id, className, classImage, instructorName, instructorEmail, availableSeats, price, duration } = singleClass;
    const { user } = useContext(AuthContext);
    const [,refetch] = useCart();
    const navigate = useNavigate();
    const location = useLocation();

    const handleAddToCart = (singleClass) => {
        console.log(singleClass);
        if (user && user.email) {
            const cartItem = {classItemId: _id, className, classImage, instructorName, instructorEmail, availableSeats, price, duration, email: user.email} 
            fetch(`http://localhost:5000/carts`, {
                method: 'POST',
                headers: {
                    'content-type': 'application/json'
                },
                body: JSON.stringify(cartItem)
            })
                .then(res => res.json())
                .then(data => {
                    if (data.insertedId) {
                        refetch();
                        Swal.fire({
                            position: 'center',
                            icon: 'success',
                            title: `${className} Class added in the Cart successfully!`,
                            text: "Please click on your cart number to proceed payment!",
                            showConfirmButton: false,
                            timer: 1500
                        })
                    }
                })
        } else {
            Swal.fire({
                title: 'Please login to Enroll the Class!',
                icon: 'warning',
                showCancelButton: true,
                confirmButtonColor: '#3085d6',
                cancelButtonColor: '#d33',
                confirmButtonText: 'Please Login Now!'
            }).then((result) => {
                if (result.isConfirmed) {
                    navigate('/login', { state: { from: location } })
                }
            })

        }
    }

    return (
        <>
            <div className="card w-auto bg-base-100 shadow-xl">
                <figure><img src={classImage} alt="Class Image" /></figure>
                <div className="card-body">
                    <h2 className="card-title text-indigo-600">{className}</h2>
                    <p>Instructor: {instructorName}</p>
                    <p className="text-sm">Email: {instructorEmail}</p>
                    <p className="font-semibold">Available Seats: {availableSeats}</p>
                    <p>Price: ${price}</p>
                    <p>Duration: {duration} Days</p>
                    <div className="card-actions justify-center">
                        <button onClick={() => handleAddToCart(singleClass)} className="btn btn-outline btn-secondary border border-l-4 border-r-4">Enroll Now</button>
                    </div>
                </div>
            </div>
        </>
    );
};

export default SingleClass;