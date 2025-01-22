import React from "react";
import ReactDOM from "react-dom/client";

import "./index.scss";
import Header from "./header";
const App = () => (
  <>
 <Header/>
  </>
);
const rootElement = document.getElementById("app")
if (!rootElement) throw new Error("Failed to find the root element")

const root = ReactDOM.createRoot(rootElement)

root.render(<App />)