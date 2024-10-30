import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./components/layout"
import Home from "./routes/home";
import Destinations from "./routes/destinations";
import Tips from "./routes/tips";
import AboutUs from "./routes/about_us";
import PageNotFound from "./routes/error-page"


const App = () => {
  return (
    <BrowserRouter>

      <Layout>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/home" element={<Home/>} />
        <Route path="/destinations" element={<Destinations />} />
        <Route path="/astuces" element={<Tips />} />
        <Route path="/a-propos-de-nous" element={<AboutUs />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
      </Layout>
      
    </BrowserRouter>
  );
}

export default App;
