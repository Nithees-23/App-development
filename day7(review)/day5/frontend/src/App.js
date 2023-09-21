import logo from "./logo.svg";
import "./App.css";
import Login from "./login";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Signup from "./signup";
import Layout from "./Layout";
import { selectUser } from "./components/userSlice";
import { useSelector } from "react-redux";
import Inventory from "./pages/Inventory";
import Customer from "./pages/Customer";
function App() {
  const user = useSelector(selectUser);
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={user ? <Layout /> : <Login />} />
          <Route path="/s" element={<Signup />} />
          <Route path="/admin" element={<Layout />} />
          <Route path="/inv" element={<Inventory/>} />
          <Route path="/cust" element={<Customer />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
