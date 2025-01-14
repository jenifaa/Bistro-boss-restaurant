import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import React, { useEffect, useState } from "react";
import useAxios from "../../../../Hooks/useAxios";
import useCart from "../../../../Hooks/useCart";
import useAuth from "../../../../Hooks/useAuth";
import { useNavigate } from "react-router-dom";

const CheckoutForm = () => {
  const axiosSecure = useAxios();
  const [cart,refetch] = useCart();
  const { user } = useAuth();
  const [transactionId, setTransactionId] = useState("");
  const totalPrice = cart.reduce((total, item) => total + item.price, 0);
  const [clientSecret, setClientSecret] = useState("");
const navigate = useNavigate()
  const [error, setError] = useState("");
  const stripe = useStripe();
  const elements = useElements();
  useEffect(() => {
    if (totalPrice > 0) {
      axiosSecure
        .post("/create-payment-intent", { price: totalPrice })
        .then((res) => {
     
          setClientSecret(res.data.clientSecret);
        });
    }
  }, [axiosSecure, totalPrice]);
  const handleSubmit = async (event) => {
    event.preventDefault();
    if (!stripe || !elements) return;
    const card = elements.getElement(CardElement);
    if (card === null) {
      return;
    }
    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: "card",
      card,
    });
    if (error) {
      console.log(error);
      setError(error);
    } else {
   
      setError("");
    }
    //confirm payment
    const { paymentIntent, error: confirmError } =
      await stripe.confirmCardPayment(clientSecret, {
        payment_method: {
          card: card,
          billing_details: {
            email: user?.email || "anonymous",
            name: user?.displayName || "anonymous",
          },
        },
      });
    if (confirmError) {
      console.log(confirmError);
    } else {
      console.log("PaymentIntent", paymentIntent);
      if (paymentIntent.status === "succeeded") {
        
        setTransactionId(paymentIntent.id);
        const payment = {
          email: user.email,
          price: totalPrice,
          date: new Date(),
          cartIds: cart.map((item) => item._id),
          menuItemIds: cart.map((item) => item.menuId),
          status: "pending",
          transactionId: paymentIntent.id,
        };
        const res = await axiosSecure.post("/payments", payment);
     
        refetch()
        navigate('/dashboard/paymentHistory')
      }
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <CardElement
          options={{
            style: {
              base: {
                fontSize: "16px",
                color: "#424770",
                "::placeholder": {
                  color: "#aab7c4",
                },
              },
              invalid: {
                color: "#9e2146",
              },
            },
          }}
        />
        <button
          className="btn btn-primary my-10"
          type="submit"
          disabled={!stripe || !clientSecret}
        >
          Pay
        </button>
        <p className="text-red-600 my-4">{error}</p>
        {transactionId && (
          <p className="text-green-500">Your Transaction id: {transactionId}</p>
        )}
      </form>
    </div>
  );
};

export default CheckoutForm;
