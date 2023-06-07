
const SingleClass = ({ singleClass }) => {
    const { className, classImage, instructorName, instructorEmail, availableSeats, price, duration } = singleClass;
    return (
        <>
            <div className="card w-auto bg-base-100 shadow-xl">
                <figure><img src={classImage} alt="Class Image" /></figure>
                <div className="card-body">
                    <h2 className="card-title">{className}</h2>
                    <p>Instructor: {instructorName}</p>
                    <p className="text-sm">Email: {instructorEmail}</p>
                    <p>Available Seats: {availableSeats}</p>
                    <p>Price: ${price}</p>
                    <p>Duration: {duration} Days</p>
                    <div className="card-actions justify-end">
                        <button className="btn btn-primary">Enroll Now</button>
                    </div>
                </div>
            </div>
        </>
    );
};

export default SingleClass;