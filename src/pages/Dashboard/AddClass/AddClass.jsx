import { Helmet } from "react-helmet-async";
import { useForm } from "react-hook-form";
import useAuth from "../../../hooks/useAuth";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import Swal from "sweetalert2";


const image_hosting_token = import.meta.env.VITE_Image_Upload_Token;

const AddClass = () => {
    const { user } = useAuth();
    const [axiosSecure] = useAxiosSecure();
    const { register, handleSubmit, reset, formState: { errors } } = useForm();
    const image_hosting_url = `https://api.imgbb.com/1/upload?key=${image_hosting_token}`;

    const onSubmit = data => {
        console.log(data);

        const formData = new FormData();
        formData.append('image', data.classImage[0]);
        fetch(image_hosting_url, {
            method: 'POST',
            body: formData
        })
            .then(res => res.json())
            .then(imageResponse => {
                console.log(imageResponse);
                if (imageResponse.success) {
                    const imageURL = imageResponse.data.display_url;
                    const { className, availableSeats, price, duration } = data;
                    const newClass = {
                        className,
                        classImage: imageURL,
                        instructorName: user.displayName,
                        instructorEmail: user.email,
                        availableSeats: parseInt(availableSeats),
                        price: parseFloat(price),
                        duration: parseInt(duration),
                        classStatus: 'pending'
                    }
                    console.log(newClass);

                    axiosSecure.post('/classes', newClass)
                        .then(data => {
                            if (data.data.insertedId) {
                                reset();
                                Swal.fire({
                                    position: 'center',
                                    icon: 'success',
                                    title: `${className} class added successfully!`,
                                    showConfirmButton: false,
                                    timer: 1500
                                })
                            }
                        })
                }
            })
    };

    console.log(errors);

    return (
        <div className="w-full px-10">
            <Helmet>
                <title>Melody Tune | Dashboard | Add Class</title>
                <link rel="canonical" href="https://www.tacobell.com/" />
            </Helmet>
            <h2 className='text-4xl text-center my-10'>Add a New Class</h2>
            <div>
                <form onSubmit={handleSubmit(onSubmit)} >
                    <div className="divider"></div>
                    <div className="md:flex md:gap-8 md:justify-around  ">
                        <div className="form-control w-full max-w-xs">
                            <label className="label">
                                <span className="label-text">Instructor Name</span>
                            </label>
                            <input type="text"
                                // {...register("instructorName")}
                                disabled defaultValue={user.displayName} name="instructorName" placeholder="Instructor Name" className="input input-bordered w-full max-w-xs" />
                        </div>
                        <div className="form-control w-full max-w-xs">
                            <label className="label">
                                <span className="label-text">Instructor Email</span>
                            </label>
                            <input type="text"
                                // {...register("instructorEmail")}
                                disabled defaultValue={user.email} name="instructorEmail" placeholder="Instructor Email" className="input input-bordered w-full max-w-xs" />
                        </div>
                    </div>
                    <div className="divider"></div>
                    <div className="md:flex md:gap-8 md:justify-around  ">
                        <div className="form-control w-full max-w-xs">
                            <label className="label">
                                <span className="label-text">Class Name*</span>
                            </label>
                            <input type="text" {...register("className", { required: true, maxLength: 120 })}
                                name="className" placeholder="Class Name" className="input input-bordered w-full max-w-xs" />
                            {errors.className && <span className="text-red-500 text-xs">Class Name is required!</span>}
                        </div>
                        <div className="form-control w-full max-w-xs">
                            <label className="label">
                                <span className="label-text">Class Image*</span>
                            </label>
                            <input type="file" {...register("classImage", { required: true })}
                                className="file-input file-input-bordered file-input-info w-full max-w-xs" />
                            {errors.classImage && <span className="text-red-500 text-xs">Class Image is required!</span>}
                        </div>
                    </div>
                    <div className="md:flex md:gap-8 md:justify-around  ">
                        <div className="form-control w-full max-w-xs">
                            <label className="label">
                                <span className="label-text">Available Seats*</span>
                            </label>
                            <input type="number" {...register("availableSeats", { required: true, maxLength: 2 })}
                                name="availableSeats" placeholder="Available Seats" className="input input-bordered w-full max-w-xs" />
                            {errors.availableSeats && <span className="text-red-500 text-xs">Seats are required and should be less then 100!</span>}
                        </div>
                        <div className="form-control w-full max-w-xs">
                            <label className="label">
                                <span className="label-text">Price*</span>
                            </label>
                            <input type="number" {...register("price", { required: true, maxLength: 6 })}
                                name="price" placeholder="Price" className="input input-bordered w-full max-w-xs" />
                            {errors.price && <span className="text-red-500 text-xs">Price is required!</span>}
                        </div>

                    </div>
                    <div className="md:flex md:gap-8 md:justify-around  ">

                        <div className="form-control w-full max-w-xs">
                            <label className="label">
                                <span className="label-text">Duration (Days)*</span>
                            </label>
                            <input type="number" {...register("duration", { required: true, maxLength: 3 })}
                                name="duration" placeholder="duration" className="input input-bordered w-full max-w-xs" />
                            {errors.duration && <span className="text-red-500 text-xs">Duration is required!</span>}
                        </div>
                        <div className="form-control w-full max-w-xs">
                            <label className="label">
                                <span className="label-text">Approval Status</span>
                            </label>
                            <input type="text"
                                // {...register("classStatus")}
                                disabled defaultValue={'pending'} name="classStatus" placeholder="Class Status" className="input input-bordered w-full max-w-xs" />
                        </div>
                    </div>
                    <div className="my-8 text-center">
                        <input className="btn btn-info w-full" type="submit" value="Add Class" />
                    </div>
                </form>
                <div className="divider"></div>
            </div>

        </div>
    );
};

export default AddClass;