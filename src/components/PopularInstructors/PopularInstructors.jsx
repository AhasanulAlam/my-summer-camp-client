import usePopularInstructor from '../../hooks/usePopularInstructor';
import { useNavigate } from 'react-router-dom';

const PopularInstructors = () => {
    const [instructors] = usePopularInstructor();
    const navigate = useNavigate();
    const handleMyClassesFromHome = () => {
        navigate('/instructors');
    }

    return (
        <div>
            <h2 className="text-6xl text-center my-10 text-green-600">Popular Instructors</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                {
                    instructors.map(instructor => <div
                        key={instructor._id} className="card w-auto bg-base-100 shadow-xl">
                        <figure><img src={instructor.image} alt="Instructor Image" /></figure>
                        <div className="card-body">
                            <h2 className="card-title text-indigo-600">{instructor.name}</h2>
                            <p className="text-sm">Email: {instructor.email}</p>
                            <div className="card-actions justify-center">
                                <button onClick={handleMyClassesFromHome} className="btn btn-outline btn-success border border-l-4 border-r-4">Proceed to my classes</button>
                            </div>
                        </div>
                    </div>)
                }
            </div>

        </div>
    );
};

export default PopularInstructors;