
import { useNavigate } from 'react-router-dom';
import usePopularClass from '../../hooks/usePopularClass';

const PopularClassess = () => {
    const [classes] = usePopularClass();
    const navigate = useNavigate();
    const handleAddToCartFromHome =() =>{
        navigate('/classes');
    }

    return (
        <div>
            <h2 className="text-6xl text-center my-10 text-green-600">Popular Classes</h2>
            <div  className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                {
                    classes.map(singleClass => <div key={singleClass._id} className="card w-auto bg-base-100 shadow-xl">
                    <figure><img src={singleClass.classImage} alt="Class Image" /></figure>
                    <div className={`card-body ${singleClass.availableSeats < 1 && "bg-red-400"}`}>
                        <h2 className="card-title text-indigo-600">{singleClass.className}</h2>
                        <p>Instructor: {singleClass.instructorName}</p>
                        <p className="text-sm">Email: {singleClass.instructorEmail}</p>
                        <p className={`font-semibold text-green-600 ${singleClass.availableSeats < 1 && "text-red-600"}`}>Available Seats: {singleClass.availableSeats}</p>
                        <p>Price: ${singleClass.price}</p>
                        <p>Duration: {singleClass.duration} Days</p>
                        <div className="card-actions justify-center">
                            <button disabled={singleClass.availableSeats < 1 && true} onClick={handleAddToCartFromHome} className="btn btn-outline btn-success border border-l-4 border-r-4">Proceed to Enrollment</button>
                        </div>
                    </div>
                </div>)
                }


                
            </div>
        </div>
    );
};

export default PopularClassess;