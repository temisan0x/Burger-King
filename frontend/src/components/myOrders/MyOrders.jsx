import React from "react";
import { Link } from "react-router-dom";
import {AiOutlineEye} from "react-icons/ai"

const MyOrders = () => {
    const orderArr = [1,2,3,4,5]
  return (
    <section className="tableClass">
      <main>
        <table>
          <thead>
            <tr>
              <th>Order Id</th>
              <th>Status</th>
              <th>Item Qty</th>
              <th>Amount</th>
              <th>Payment Method</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
           {
            orderArr.map((i)=> (
                <tr key={i}>
                <td>#{i}</td>
                <td>processing</td>
                <td>23</td>
                <td>₦{2236}</td>
                <td>COD</td>
                <td>
                  <Link to={`/my-orders/${"sjdhsd"}`}>
                      <AiOutlineEye/>
                  </Link>
                </td>
              </tr>
            ))
           }
          </tbody>
        </table>
      </main>
    </section>
  );
};

export default MyOrders;
