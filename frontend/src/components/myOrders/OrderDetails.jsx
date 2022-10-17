import React from "react";

const OrderDetails = () => {
  return (
    <section className="orderDetails">
      <main>
        <h1>Order Details</h1>
        <div>
          <h1>Transportation</h1>
          <p>
            <b>Address:</b>
            {"Jos Ng"}
          </p>
        </div>
        <div>
          <h1>Contact</h1>
          <p>
            <b>Name:</b>
            {"Temisan Momodu"}
          </p>
          <p>
            <b>Phone:</b>
            {"09046041350"}
          </p>
        </div>
        <div>
          <h1>Status</h1>
          <p>
            <b>Order Status:</b>
            {"processing"}
          </p>
          <p>
            <b>Placed At:</b>
            {"13-12-2022"}
          </p>
          <p>
            <b>Delivered At</b>
            {"14-12-2022"}
          </p>
        </div>
        <div>
          <h1>Payment</h1>
          <p>
            <b>Payment Method:</b>
            {"Online"}
          </p>
          <p>
            <b>Payment Reference:</b>#{"19202939939"}
          </p>
          <p>
            <b>Paid At</b>
            {"13-12-2022"}
          </p>
        </div>
        <div>
          <h1>Amount</h1>
          <p>
            <b>Items Total</b>₦{2236}
          </p>
          <p>
            <b>Transport Charges Total</b>₦{200}
          </p>
          <p>
            <b>Tax</b>₦{232}
          </p>
          <p>
            <b>Total Amount</b>₦{232 + 200 + 2236}
          </p>
        </div>
        <article>
          <h1>Ordered Items</h1>
          <div>
            <h4>Cheese Burger</h4>
            <div>
              <span>{12}</span> x <span>{232}</span>
            </div>
          </div>
          <div>
            <h4>Burger Fries</h4>
            <div>
              <span>{10}</span> x <span>{1000}</span>
            </div>
          </div>
          <div>
            <h4
              style={{
                fontWeight: 800,
              }}
            >
              Sub Total
            </h4>
            <div
              style={{
                fontWeight:500,
              }}
            >
              ₦{2236}
            </div>
          </div>
        </article>
      </main>
    </section>
  );
};

export default OrderDetails;
