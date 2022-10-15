import {BrowserRouter as Router, Routes, Route} from "react-router-dom"
import Home from "./components/Home/Home";
import Contact from "./components/contact/Contact";
import Cart from "./components/cart/Cart";
import Header from "./components/Layout/Header";
import Footer from "./components/Layout/Footer";
import Transport from "./components/cart/Transport";

import "./styles/app.scss";
import "./styles/home.scss";
import "./styles/founder.scss";
import "./styles/menu.scss";
import "./styles/footer.scss";
import "./styles/contact.scss";
import "./styles/cart.scss";

function App() {
  return (
    <Router>
      <Header/>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/contact" element={<Contact/>} />
        <Route path="/cart" element={<Cart/>} />
        <Route path="/transport" element={<Transport/>} />
      </Routes>
      <Footer/>
    </Router>
  );
}

export default App;
