//import logo from "./logo.svg";
//import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Login, Search } from "./pages/index";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<Login></Login>}></Route>
        <Route path="/" element={<Search></Search>}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
