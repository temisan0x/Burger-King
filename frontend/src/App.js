import {BrowserRouter as Router, Routes, Route} from "react-router-dom"
import Home from "./components/Home/Home";
import Header from "./components/Layout/Header";
import Footer from "./components/Layout/Footer";
import "./styles/app.scss";
import "./styles/home.scss";
import "./styles/founder.scss";
import "./styles/menu.scss";
import "./styles/footer.scss";

function App() {
  return (
    <Router>
      <Header/>
      <Routes>
        <Route path="/" element={<Home/>} />
      </Routes>
      <Footer/>
    </Router>
  );
}

export default App;
