import { FaGoogle } from "react-icons/fa";
import { useLocation } from "react-router-dom";

const SocialLogin = () => {
    const location = useLocation();
    const togglePageLogin = location.pathname.includes('login');
    return (
        <div>
            <div className='divider'></div>
            <div className="form-control mb-2 ">
                
                <button className='btn btn-active btn-link'> <FaGoogle className='text-green-600 text-2xl' /> <span className='mx-2'> {togglePageLogin ? 'Login' : 'SignUp' } with Google</span></button>
            </div>

        </div>
    );
};

export default SocialLogin;