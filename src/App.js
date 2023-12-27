import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header/index.jsx";
import Login from "./pages/login/Login";
import Home from "./pages/home/index.jsx";

const App = () => {
  return (
    <>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </Router>
      <Login />
    </>
  );
};

export default App;
