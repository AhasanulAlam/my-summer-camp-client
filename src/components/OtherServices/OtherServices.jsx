
const OtherServices = () => {
    return (
        <div className="mb-10">
            <h2 className="text-6xl text-center my-10 text-green-600">Our Services</h2>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                <div className="card w-full bg-base-100 shadow-xl image-full">
                    <figure><img src="https://erniewilliamson.com/skins/skin_1/images/topic/repair.jpg" alt="service" /></figure>
                    <div className="card-body">
                        <h2 className="card-title">Instrument Clinic</h2>
                        <p>Any musical instrument services available.</p>
                        <div className="card-actions justify-end">
                            <button className="btn btn-primary">More Info</button>
                        </div>
                    </div>
                </div>
                <div className="card w-full bg-base-100 shadow-xl image-full">
                    <figure><img src="https://7esl.com/wp-content/uploads/2018/03/Musical-Instruments-vocab-1.jpg" alt="instrument" /></figure>
                    <div className="card-body">
                        <h2 className="card-title">Buy Instrument</h2>
                        <p>We sell all the branded Instrument</p>
                        <div className="card-actions justify-end">
                            <button className="btn btn-primary">More Info</button>
                        </div>
                    </div>
                </div>
                <div className="card w-full bg-base-100 shadow-xl image-full">
                    <figure><img src="https://www.ncl-coll.ac.uk/media/cgvi2pox/newcastle_college_music_3.jpg" alt="Shoes" /></figure>
                    <div className="card-body">
                        <h2 className="card-title">Event Performance</h2>
                        <p>Event performance are available</p>
                        <div className="card-actions justify-end">
                            <button className="btn btn-primary">More Info</button>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default OtherServices;