import { Elements } from "@stripe/react-stripe-js";
import { Helmet } from "react-helmet-async";
import { loadStripe } from "@stripe/stripe-js";
import CheckoutForm from "./CheckoutForm";


const stripePromise = loadStripe('');
const Payment = () => {

    return (
        <div className="w-full">
            <Helmet>
                <title>Melody Tune | Dashboard | Payment</title>
                <link rel="canonical" href="https://www.tacobell.com/" />
            </Helmet>
            
            <h2 className="text-center text-3xl uppercase my-10">Proceed with Payment</h2>
            <div>
                <Elements stripe={stripePromise}>
                    <CheckoutForm></CheckoutForm>
                </Elements>

            </div>
        </div>
    );
};

export default Payment;