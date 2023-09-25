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
import Landinpage from "./Landing/Landinpage";
import AboutUs from "./Landing/AboutUs";
import Contactus from "./Landing/Contactus";
import Terms from "./Landing/Terms";
import Lanfooter from "./Landing/Lanfooter";
import Faq from "./Landing/Faq";
import { AddProducts } from "./pages/AddProducts";
import { ViewProduct } from "./pages/ViewProduct";
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
          <Route path="/lan" element={<Landinpage />} />
          <Route path="/about" element={<AboutUs/>} />
          <Route path="/contactus" element={<Contactus/>}/>
          <Route path="/terms" element={<Terms />}/>
          <Route path="/lanfoot" element={<Lanfooter />}/>
          <Route path="/faq" element={<Faq/>}/>
          <Route path="/addproduct" element={<AddProducts/>}/>
          <Route path="/viewproduct" element={<ViewProduct/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
