import React, { lazy, Suspense } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import Main from "./pages/Main";

import "./styles/index.scss";

const { PUBLIC_URL } = process.env;

const Home = lazy(() => import("./pages/Home"));
const About = lazy(() => import("./pages/About"));
const Blogs = lazy(() => import("./pages/Blogs"));
const Devs = lazy(() => import("./pages/Devs"));
const Photos = lazy(() => import("./pages/Contact"));

const App = () => (
  <BrowserRouter basename={PUBLIC_URL}>
    <Suspense fallback={<Main />}>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/blogs" element={<Blogs />} />
        <Route path="/devs" element={<Devs />} />
        <Route path="/photos" element={<Photos />} />
      </Routes>
    </Suspense>
  </BrowserRouter>
);

export default App;
