import React, { useState } from "react";
import Home from "./Components/Home";
import Profile from "./Components/Profile";
import Product from "./Components/Product";
import Car from "./Components/Car";

function App() {
  const product = { name: "Skincare", price: "Rp. 20.000" };

  const [statusLogin, setisStatusLogin] = useState(false);

  const handleLogin = () => {
    setisStatusLogin(true);
  };

  const handleLogout = () => {
    setisStatusLogin(false);
  };

  return (
    <div>
      {statusLogin ? (
        <div>
          <h1>Welcome Back!</h1>
          <button onClick={handleLogout}>Logout</button>
        </div>
      ) : (
        <div>
          <h1>Silahkan Login Terlebih dahulu</h1>
          <button onClick={handleLogin}>Login</button>
          <Home />
          <Profile />
          <Product product={product} />
          <Car />
        </div>
      )}
    </div>
  );
}

export default App;
