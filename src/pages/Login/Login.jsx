import { useState } from "react";
import { Helmet } from "react-helmet-async";
import { FaGoogle } from "react-icons/fa";
import { Link } from "react-router-dom";
import Lottie from "lottie-react";
import MelodyTuneLogin from '../../assets/MelodyTuneLogin.json';

const Login = () => {
    const [showHidePass, setShowHidePass] = useState(false);

    const handleLogin = (event) =>{
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        const confirm = form.confirm.value;

        console.log(email, password, confirm);

    }
    return (
        <>
            <Helmet>
                <title>Melody Tune | Login</title>
                <link rel="canonical" href="https://www.tacobell.com/" />
            </Helmet>
            <div className="">
                <div className="hero min-h-screen bg-base-200 flex flex-col md:flex-row gap-12 md:justify-center">
                <div className='max-w-xl text-center'>
                        <Lottie animationData={MelodyTuneLogin} loop={true} />
                    </div>
                    <div className="hero-content flex-col ">
                        <div className="text-center lg:text-left">
                            <h1 className="text-5xl font-bold">Login now!</h1>
                        </div>
                        <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                            <form onSubmit={handleLogin} >
                                <div className="card-body">
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
                                        <input type={showHidePass ? "text" : "password"} name="password" placeholder="password" className="input input-bordered" />
                                        <div className="flex justify-between">
                                            <label className="label">
                                                <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                                            </label>
                                            <label className="label">
                                                <Link onClick={() => setShowHidePass(!showHidePass)} className="label-text-alt link link-hover">
                                                    {
                                                        showHidePass ? <span>Hide Password</span> : <span>Show Password</span>
                                                    }
                                                </Link>
                                            </label>
                                        </div>
                                    </div>
                                    <div className="form-control mt-6">
                                        <input type="submit" value="Login" className="btn btn-primary" />
                                    </div>
                                </div>
                            </form>
                            <div className="form-control label">
                                <p><small>New Here? <Link className='text-purple-400 font-bold' to="/signup">Create an Account</Link></small></p>
                            </div>
                            <div className='divider'></div>

                            <div className="form-control mb-2 ">
                                <button  className='btn btn-active btn-link'> <FaGoogle className='text-green-600 text-2xl' /> <span className='mx-2'> Login with Google</span></button>
                            </div>
                        </div>
                    </div>
                                        
                </div>
            </div>
        </>
    );
};

export default Login;