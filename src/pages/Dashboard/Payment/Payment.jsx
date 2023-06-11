import { Elements } from "@stripe/react-stripe-js";
import { Helmet } from "react-helmet-async";
import { loadStripe } from "@stripe/stripe-js";
import CheckoutForm from "./CheckoutForm";
import useCart from "../../../hooks/useCart";


const stripePromise = loadStripe(import.meta.env.VITE_Payment_Gateway_PK);
const Payment = () => {
    const [cart] = useCart();
    console.log(cart);
    const total = cart.reduce( ( accumulator , classItem ) => accumulator + classItem.price, 0);
    const price = parseFloat(total.toFixed(2));

    return (
        <div className="w-full">
            <Helmet>
                <title>Melody Tune | Dashboard | Payment</title>
                <link rel="canonical" href="https://www.tacobell.com/" />
            </Helmet>
            
            <h2 className="text-center text-3xl uppercase my-10">Proceed with Payment</h2>
            <div>
                <Elements stripe={stripePromise}>
                    <CheckoutForm cart={cart} price={price}></CheckoutForm>
                </Elements>

            </div>
        </div>
    );
};

export default Payment;