import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import { useEffect, useState } from "react";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import useAuth from "../../../hooks/useAuth";

const CheckoutForm = ({ cart, price }) => {
    const stripe = useStripe();
    const elements = useElements();
    const { user } = useAuth();
    const [axiosSecure] = useAxiosSecure();
    const [cardError, setCardError] = useState('');
    const [clientSecret, setClientSecret] = useState('');
    const [processing, setProcessing] = useState(false);
    const [transactionId, setTransactionId] = useState('');

    useEffect(() => {
        if (price > 0) {
            axiosSecure.post('/create-payment-intent', { price })
                .then(response => {
                    setClientSecret(response.data.clientSecret)
                })
        }
    }, [price, axiosSecure])



    const handleSubmit = async (event) => {
        event.preventDefault();
        if (!stripe || !elements) {
            return;
        }
        const card = elements.getElement(CardElement);
        if (card == null) {
            return;
        }
        const { error, paymentMethod } = await stripe.createPaymentMethod({
            type: 'card',
            card
        })
        if (error) {
            console.log('[error]', error);
            setCardError(error.message);
        } else {
            setCardError('');
            console.log('[PaymentMethod]', paymentMethod);
        }

        setProcessing(true);

        const { paymentIntent, error: confirmError } = await stripe.confirmCardPayment(
            clientSecret,
            {
                payment_method: {
                    card: card,
                    billing_details: {
                        email: user?.email || 'unknown email',
                        name: user?.displayName || 'anonymous',
                    },
                },
            },
        );

        if (confirmError) {
            console.log(confirmError);
            // setCardError(confirmError)
        }

        console.log('Payment Intent: ', paymentIntent);
        setProcessing(false);

        if (paymentIntent.status === 'succeeded') {
            setTransactionId(paymentIntent.id);
            // save payment information to the server
            const payment = {
                email: user?.email,
                transactionId: paymentIntent.id,
                price,
                date: new Date(),
                quantity: cart.length,
                cartItemId: cart.map(item => item._id),
                classItemId: cart.map(item => item.classItemId),
                className: cart.map(item => item.className),
                instructorName: cart.map(item => item.instructorName),
                instructorEmail: cart.map(item => item.instructorEmail)
            }
            console.log(payment);

            axiosSecure.post('/payments', payment)
                .then(res => {
                    console.log(res.data);
                    if (res.data.insertedId) {
                        // display confirmation TODO:                        
                    }
                })
        }
    }


    return (
        <>
            <form className="w-2/3 m-6 p-10 shadow-xl" onSubmit={handleSubmit}>
                <CardElement className="shadow-2xl p-4"
                    options={{
                        style: {
                            base: {
                                fontSize: '16px',
                                color: '#424770',
                                '::placeholder': {
                                    color: '#aab7c4',
                                },
                            },
                            invalid: {
                                color: '#9e2146',
                            },
                        },
                    }}
                />
                <button className="btn btn-success my-10 ml-4 text-green-900" type="submit" disabled={!stripe || !clientSecret || processing}> Submit Payment </button>
            </form>
            {cardError && <p className="text-red-500 text-center font-bold">Error: {cardError}</p>}
            {transactionId && <p className="text-green-500">Transaction complete with transactionId: {transactionId}</p>}
        </>
    );
};

export default CheckoutForm;