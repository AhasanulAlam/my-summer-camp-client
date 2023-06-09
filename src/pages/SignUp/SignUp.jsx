import { useForm } from "react-hook-form";
import { Helmet } from "react-helmet-async";
import Lottie from "lottie-react";
import MelodyTuneLogin from '../../assets/MelodyTuneRegistration.json';
import { Link, useNavigate } from "react-router-dom";
import { FaGoogle } from "react-icons/fa";
import { useContext } from "react";
import { AuthContext } from "../../providers/AuthProvider";
import Swal from "sweetalert2";
import SocialLogin from "../Shared/SocialLogin/SocialLogin";


const SignUp = () => {
    const { register, handleSubmit, reset, formState: { errors } } = useForm();
    const { createUser, updateUserProfile } = useContext(AuthContext);
    const navigate = useNavigate();

    const onSubmit = data => {
        createUser(data.email, data.password)
            .then(result => {
                const loggedUser = result.user;
                console.log(loggedUser);
                // Update User Profile to firebase
                updateUserProfile(data.name, data.photoURL)
                    .then(() => {
                        // Call API for insert user data in the database
                        const saveUpdatedUser = { name: data.name, email: data.email }
                        fetch(`http://localhost:5000/users`, {
                            method: 'POST',
                            headers: {
                                'content-type': 'application/json'
                            },
                            body: JSON.stringify(saveUpdatedUser)

                        })
                            .then(res => res.json())
                            .then(data => {
                                if (data.insertedId) {
                                    reset();
                                    Swal.fire({
                                        position: 'center',
                                        icon: 'success',
                                        title: 'User created Successfully!',
                                        showConfirmButton: false,
                                        timer: 1500
                                    });
                                    navigate('/');

                                }
                            })
                    })
                    .catch(error => console.error(error))
            })
    };

    return (
        <>
            <Helmet>
                <title>Melody Tune | SignUp</title>
                <link rel="canonical" href="https://www.tacobell.com/" />
            </Helmet>
            <div>
                <div className="hero min-h-screen bg-indigo-100 flex flex-col md:flex-row gap-12 md:justify-center mb-4">
                    <div className='max-w-xl text-center'>
                        <Lottie animationData={MelodyTuneLogin} loop={true} />
                    </div>
                    <div className="hero-content flex-col">
                        <div className="text-center lg:text-left">
                            <h1 className="text-5xl font-bold">Sign up now!</h1>
                        </div>
                        <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                            <form onSubmit={handleSubmit(onSubmit)}>
                                <div className="card-body">
                                    <div className="form-control">
                                        <label className="label">
                                            <span className="label-text">Name</span>
                                        </label>
                                        <input type="text" {...register("name", { required: true })} name="name" placeholder="name" className="input input-bordered" />
                                        {errors.name && <span className="text-red-600 text-xs">Name is required</span>}
                                    </div>
                                    <div className="form-control">
                                        <label className="label">
                                            <span className="label-text">Photo URL</span>
                                        </label>
                                        <input type="text" {...register("photoURL", { required: true })} name="photoURL" placeholder="photo URL" className="input input-bordered" />
                                        {errors.photoURL && <span className="text-red-600 text-xs">Photo URL is required</span>}
                                    </div>
                                    <div className="form-control">
                                        <label className="label">
                                            <span className="label-text">Email</span>
                                        </label>
                                        <input type="email" {...register("email", { required: true })} name="email" placeholder="email" className="input input-bordered" />
                                        {errors.email && <span className="text-red-600 text-xs">Email is required!</span>}
                                    </div>
                                    <div className="form-control">
                                        <label className="label">
                                            <span className="label-text">Password</span>
                                        </label>
                                        <input type="password" {...register("password", {
                                            required: true,
                                            minLength: 6,
                                            maxLength: 20,
                                            pattern: /(?=.*[A-Z])(?=.*[!@#$&*])(?=.*[0-9])(?=.*[a-z])/,

                                        })} name="password" placeholder="password" className="input input-bordered" />
                                        {errors.password?.type === 'required' && <span className="text-red-600 text-xs">Password is required!</span>}
                                        {errors.password?.type === 'minLength' && <span className="text-red-600 text-xs">Password must be 6 characters!</span>}
                                        {errors.password?.type === 'maxLength' && <span className="text-red-600 text-xs">Password must be less then 20 characters!</span>}
                                        {errors.password?.type === 'pattern' && <span className="text-red-600 text-xs">Password must have one uppercase one lowercase & one special characters!</span>}

                                    </div>
                                    <div className="form-control mt-6">
                                        <button className="btn btn-primary">SignUp</button>
                                    </div>
                                </div>
                            </form>
                            <div className="form-control label">
                                <p><small>Already have an Account? <Link className='text-purple-400 font-bold' to="/login">Login</Link></small></p>
                            </div>
                            <div className="form-control mb-2 ">
                                <SocialLogin></SocialLogin>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default SignUp;