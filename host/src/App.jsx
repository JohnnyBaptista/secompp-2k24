import React from "react";
import ReactDOM from "react-dom/client";
import Home from './page/Home'
import "./index.css";
import Button from "./components/Button/Button";
import { CartProvider } from "cart/CartContext";

const App = () => (
  <CartProvider>
    <Home/>
  </CartProvider>
);
const rootElement = document.getElementById("app")
if (!rootElement) throw new Error("Failed to find the root element")

const root = ReactDOM.createRoot(rootElement)

root.render(<App />)