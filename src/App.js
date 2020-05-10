import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "./Components/Layout/Navbar";
import Master from "./Components/Layout/Master";
import productsApi from "./Components/Data/Products";
export default function App() {
  return (
    <React.Fragment>
      <Master productsApi={productsApi}>
        <Navbar />
      </Master>
    </React.Fragment>
  );
}
