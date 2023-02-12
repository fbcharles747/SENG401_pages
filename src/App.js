import "./style.scss";
import Login from "./pages/Login";
import SignUp from "./pages/SignUp";
import { Route, Routes } from "react-router-dom";
import PrivateRoutes from "./utils/PrivateRoutes";
import { useState } from "react";
import Home from "./pages/Home";
function App() {
  const [auth, setAuth] = useState({ IsValid: false });
  return (
    <>
      <Routes>
        <Route element={<PrivateRoutes auth={auth} />}>
          <Route path="/" element={<Home auth={auth} />} exact />
        </Route>
        <Route path="/login" element={<Login setAuth={setAuth} />} />
        <Route path="/SignUp" element={<SignUp />} />
      </Routes>
    </>
  );
}

export default App;
