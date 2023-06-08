import { Link, useRouteError } from 'react-router-dom'
import Lottie from "lottie-react";
import pnfError404 from '../../../assets/pnf404.json';

const ErrorPage = () => {
    const { error, status } = useRouteError()
    return (
        <section className='flex items-center h-screen p-16 bg-gray-100 text-gray-900'>

            <div className='flex flex-col items-center justify-center px-5 mx-auto my-8'>
                <div className='max-w-xl text-center'>
                    <Lottie animationData={pnfError404} loop={true} />
                </div>

                <div className='max-w-md text-center'>
                    <h2 className='mb-8 font-extrabold text-3xl text-yellow-400'>
                        <span className='sr-only'>Error</span>
                        {status || 404}
                    </h2>
                    <p className='text-2xl font-semibold md:text-3xl text-indigo-600 mb-8'>
                        {error?.message}
                    </p>
                    <Link to='/' className='btn btn-info text-white'>
                        Back to homepage
                    </Link>
                </div>
            </div>
        </section>
    );
};

export default ErrorPage;