import React from "react";
import { Link } from "react-router-dom";

const Box = ({ title, value }) => (
  <div>
    <h3>
        {title === "Income" && "$"}
        </h3>
    <p>{value}</p>
  </div>
);

const Dashboard = () => {
  return (
    <section>
      <main>
        <article>
          <Box title="Users" value={213} />
          <Box title="Orders" value={23} />
          <Box title="Income" value={2113} />
        </article>
        <section>
          <div>
            <Link to="/admin/orders">View Orders</Link>
            <Link to="/admin/users">View Users</Link>
          </div>
          <aside></aside>
        </section>
      </main>
    </section>
  );
};

export default Dashboard;
