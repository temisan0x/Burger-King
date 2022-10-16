import React from 'react';
import {Link} from "react-router-dom";

const PaymentSuccess = () => {
  return (
    <section>
        <main>
            <h1>Order Confirmed</h1>
            <p>Order Placed Successfully, You can check your order below</p>
            <Link to="/my-orders">Check Status</Link>
        </main>
    </section>
  )
}

export default PaymentSuccess