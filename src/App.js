// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Detail from "./pages/detail/detail";
import Group from "./pages/creatingGroup/index.jsx";
import Card from "./pages/card/index.jsx";
import Login from "./pages/login/Login";
import Home from "./pages/home/index.jsx";

const App = () => {
  return (
    <>
      <Home />
      <Detail />
      <Group />
      <Card />
      <Login />
    </>
  );
};

export default App;
