import React from "react";
import { BrowserRouter } from "react-router-dom";
import Layout from "./views/pages/Layout";

function App() {
  return (
    <BrowserRouter>
      <Layout />
    </BrowserRouter>
  );
}

export default App;
