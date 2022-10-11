import {BrowserRouter as Router, Routes, Route} from "react-router-dom"
import Home from "./components/Home/Home";
import Header from "./components/Layout/Header";
import "./styles/app.scss";

function App() {
  return (
    <Router>
      <Header/>
      <Routes>
        <Route path="/about" element={<Home/>} />
      </Routes>
    </Router>
  );
}

export default App;
