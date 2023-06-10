
const SingleInstructor = ({ instructor }) => {
    const { instructorName, instructorImage, instructorEmail } = instructor;
    return (
        <>
            <div className="card w-auto bg-base-100 shadow-xl">
                <figure><img src={instructorImage} alt="Class Image" /></figure>
                <div className="card-body">
                    <h2 className="card-title text-indigo-600">{instructorName}</h2>
                    <p className="text-sm">Email: {instructorEmail}</p>
                    <div className="card-actions justify-center">
                        <button className="btn btn-outline btn-success border border-l-4 border-r-4">My Classes</button>
                    </div>
                </div>
            </div>

        </>
    );
};

export default SingleInstructor;