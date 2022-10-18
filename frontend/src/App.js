import {BrowserRouter as Router, Routes, Route} from "react-router-dom"
import Home from "./components/home/Home";
import Login from "./components/login/Login";
import Profile from "./components/profile/Profile";
import Contact from "./components/contact/Contact";
import Cart from "./components/cart/Cart";
import Header from "./components/layout/Header";
import Footer from "./components/layout/Footer";
import Transport from "./components/cart/Transport";
import ConfirmOrder from "./components/cart/ConfirmOrder";
import PaymentSuccess from "./components/cart/PaymentSuccess";
import MyOrders from "./components/myOrders/MyOrders";
import OrderDetails from "./components/myOrders/OrderDetails";
import Dashboard from "./components/admin/Dashboard";

import "./styles/app.scss";
import "./styles/login.scss";
import "./styles/profile.scss";
import "./styles/home.scss";
import "./styles/founder.scss";
import "./styles/menu.scss";
import "./styles/footer.scss";
import "./styles/contact.scss";
import "./styles/cart.scss";
import "./styles/transport.scss";
import "./styles/confirmOrder.scss";
import "./styles/paymentSuccess.scss";
import "./styles/myOrders.scss";
import "./styles/orderDetails.scss";
import "./styles/dashboard.scss";

function App() {
  return (
    <Router>
      <Header isAuthenticated={true}/>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/contact" element={<Contact/>} />
        <Route path="/cart" element={<Cart/>} />
        <Route path="/my-orders" element={<MyOrders/>} />
        <Route path="/my-orders/:id" element={<OrderDetails/>} />
        <Route path="/transport" element={<Transport/>} />
        <Route path="/confirm-order" element={<ConfirmOrder/>} />
        <Route path="/payment-success" element={<PaymentSuccess/>} />
        <Route path="/login" element={<Login/>} />
        <Route path="/me" element={<Profile/>} />
        <Route path="/admin/dashboard" element={<Dashboard/>} />
      </Routes>
      <Footer/>
    </Router>
  );
}

export default App;
