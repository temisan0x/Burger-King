import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import Burger1 from "../../assets/burger1.jpg";
import Burger2 from "../../assets/burger2.jpg";
import Burger3 from "../../assets/burger3.jpg";

const CartItem = ({ value, title, img, increment, decrement }) => {
  return (
    <motion.div className="cartItem">
      <div className="cartDetails">
        <h4>{title}</h4>
        <img src={img} alt="item" />
      </div>
      <div>
        <button onClick={decrement}>-</button>
        <input value={value} readOnly type="number" />
        <button onClick={increment}>+</button>
      </div>
    </motion.div>
  );
};

const increment = (item) => {};
const decrement = (item) => {};

const Cart = () => {
  return (
    <section className="cart">
      <main>
        <CartItem
          title={"Cheese Burger"}
          img={Burger1}
          value={0}
          increment={() => increment(1)}
          decrement={() => decrement(1)}
        />
        <CartItem
          title={"Veg Cheese Burger"}
          img={Burger2}
          value={0}
          increment={() => increment(2)}
          decrement={() => decrement(2)}
        />
        <CartItem
          title={"Cheese Burger"}
          img={Burger3}
          value={0}
          increment={() => increment(3)}
          decrement={() => decrement(3)}
        />
        <article>
          <div>
            <h4>Sub Total</h4>
            <p>₦{2000}</p>
          </div>
          <div>
            <h4>Tax</h4>
            <p>₦{2000 * 0.18}</p>
          </div>
          <div>
            <h4>Transport Charges</h4>
            <p>₦{200}</p>
          </div>
          <div>
            <h4>Total</h4>
            <p>₦{2000 + 200 * 0.18 + 200}</p>
          </div>
          <nav className="checkout">
            <Link to="/shipping">Checkout</Link>
          </nav>
        </article>
      </main>
    </section>
  );
};

export default Cart;
