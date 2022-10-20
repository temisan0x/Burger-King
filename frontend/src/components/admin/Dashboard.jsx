import React from "react";
import { Link } from "react-router-dom";
import { Pie } from "react-chartjs-2";
import { Chart as ChartJS, Tooltip, ArcElement, Legend } from "chart.js";
import Loader from "../layout/Loader";


ChartJS.register(Tooltip, ArcElement, Legend);

const loading = true;

const Box = ({ title, value }) => (
  <div>
    <h3>
      {title === "Income" && "₦"}
      {value}
    </h3>
    <p>{title}</p>
  </div>
);

const Dashboard = () => {
  const data = {
    labels: ["Preparing", "Transportation", "Delivered"],
    datasets: [
      {
        label: "# of orders",
        data: [2, 3, 4],
        backgroundColor: ["#FB923C", "#e5e7eb", "#94a3b8"],
        borderColor: [
          "rgb(159, 63, 176)",
          "rgb(159, 63, 176)",
          "rgb(159, 0,50)",
        ],
        borderWidth: 1,
      },
    ],
  };

  return (
    <section className="dashboard">
      {loading === false ? (
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
            <aside>
              <Pie data={data} />
            </aside>
          </section>
        </main>
      ):(
        <Loader />
      )}
    </section>
  );
};

export default Dashboard;
