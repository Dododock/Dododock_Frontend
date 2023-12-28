import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header/index.jsx";
import Login from "./pages/login/Login";
import Home from "./pages/home/index.jsx";
import Card from "./pages/card/index.jsx";
import CreatingGroup from "./pages/creatingGroup/index.jsx";
import Detail from "./pages/detail/detail.jsx";

const App = () => {
  return (
    <>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/Card" element={<Card />} />
          <Route path="/CreatingGroup" element={<CreatingGroup />} />
          <Route path="/Detail/:id" element={<Detail />} />
        </Routes>
      </Router>
      <Login />
    </>
  );
};
export default App;
