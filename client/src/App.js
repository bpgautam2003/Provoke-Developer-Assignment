import { Routes, Route, Navigate } from "react-router-dom";
// import HomePage from "./pages/HomePage";
import Login from "./components/Login";
import Register from "./components/Register";
import Monthly from "./components/Monthly";
import Yearly from "./components/Yearly";
import Payment from "./components/Payment";
import Currentplan from "./components/Currentplan";
import Canceled from "./components/Canceled"

function App() {
  return (
    <>
      <Routes>
        <Route path="/register" element={<Register />} />
        <Route path="/" element={<Login />} />
        <Route path="/monthlysubscription" element={<Monthly/>} />
        <Route path="/yearlysubscription" element={<Yearly/>} />
        <Route path="/payment" element={<Payment/>} />
        <Route path="/currentplan" element={<Currentplan/>} />
        <Route path="/canceled" element={<Canceled/>} />

      </Routes>
    </>
  );
}

export function ProtectedRoutes(props) {
  if (localStorage.getItem("user")) {
    return props.children;
  } else {
    return <Navigate to="/login" />;
  }
}

export default App;
