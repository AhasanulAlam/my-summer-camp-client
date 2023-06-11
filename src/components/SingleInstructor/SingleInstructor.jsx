import Swal from "sweetalert2";

const SingleInstructor = ({ instructor }) => {
    const { name, image, email } = instructor;

    const handleMyClasses = () => {
        Swal.fire({
            position: 'center',
            icon: 'info',
            title: 'Coming Soon...',
            showConfirmButton: false,
            timer: 1500
        })
    }

    return (
        <>
            <div className="card w-auto bg-base-100 shadow-xl">
                <figure><img src={image} alt="Class Image" /></figure>
                <div className="card-body">
                    <h2 className="card-title text-indigo-600">{name}</h2>
                    <p className="text-sm">Email: {email}</p>
                    <div className="card-actions justify-center">
                        <button onClick={() => handleMyClasses(email)} className="btn btn-outline btn-success border border-l-4 border-r-4">My Classes</button>
                    </div>
                </div>
            </div>

        </>
    );
};

export default SingleInstructor;