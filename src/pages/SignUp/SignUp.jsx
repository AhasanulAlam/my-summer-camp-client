import { Helmet } from "react-helmet-async";
import Lottie from "lottie-react";
import MelodyTuneLogin from '../../assets/MelodyTuneRegistration.json';

const SignUp = () => {
    return (
        <>
            <Helmet>
                <title>Melody Tune | SignUp</title>
                <link rel="canonical" href="https://www.tacobell.com/" />
            </Helmet>
            <div>
                <div className="hero min-h-screen bg-base-200 flex flex-col md:flex-row gap-12 md:justify-center">
                    <div className='max-w-xl text-center'>
                        <Lottie animationData={MelodyTuneLogin} loop={true} />
                    </div>
                    <div className="hero-content flex-col">
                        <div className="text-center lg:text-left">
                            <h1 className="text-5xl font-bold">Sign up now!</h1>
                        </div>
                        <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                            <form >
                                <div className="card-body">
                                    <div className="form-control">
                                        <label className="label">
                                            <span className="label-text">Name</span>
                                        </label>
                                        <input type="text" name="name" placeholder="name" className="input input-bordered" />
                                    </div>
                                    <div className="form-control">
                                        <label className="label">
                                            <span className="label-text">Email</span>
                                        </label>
                                        <input type="email" name="email" placeholder="email" className="input input-bordered" />
                                    </div>
                                    <div className="form-control">
                                        <label className="label">
                                            <span className="label-text">Password</span>
                                        </label>
                                        <input type="text" placeholder="password" className="input input-bordered" />
                                        <label className="label">
                                            <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                                        </label>
                                    </div>
                                    <div className="form-control mt-6">
                                        <button className="btn btn-primary">Login</button>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default SignUp;