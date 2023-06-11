import { useContext } from "react";
import { FaGoogle } from "react-icons/fa";
import { useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../../providers/AuthProvider";

const SocialLogin = () => {
    const location = useLocation();
    const navigate = useNavigate();
    const togglePageLogin = location.pathname.includes('login');

    const from = location.state?.from?.pathname || "/";
    
    const { googleSignIn } = useContext(AuthContext);

    const handleGoogleSignIn = () => {
        googleSignIn()
            .then(result => {
                const loggedInUser = result.user;
                console.log('Google logged User',loggedInUser);
                // Call API for insert user data in the database
                const saveUpdatedUser = { name: loggedInUser.displayName, email: loggedInUser.email, image: loggedInUser.photoURL }
                fetch(`http://localhost:5000/users`, {
                    method: 'POST',
                    headers: {
                        'content-type': 'application/json'
                    },
                    body: JSON.stringify(saveUpdatedUser)
                })
                    .then(res => res.json())
                    .then(() => {
                        navigate(from, { replace: true });
                    })
            })
            .catch(error => console.error(error))
    }

    return (
        <div>
            <div className='divider'></div>
            <div className="form-control mb-2 ">

                <button onClick={handleGoogleSignIn} className='btn btn-active btn-link'> <FaGoogle className='text-green-600 text-2xl' /> <span className='mx-2'> {togglePageLogin ? 'Login' : 'SignUp'} with Google</span></button>
            </div>

        </div>
    );
};

export default SocialLogin;