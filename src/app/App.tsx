import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { createGlobalStyle } from "styled-components";

import Home from "../pages/Home";
import About from "../pages/About";
import Navbar from "../components/Navbar";

const GlobalStyles = createGlobalStyle`
  body, html {
    margin: 0;
    height: 100%;
    width: 100%;
    background-color: #f6f6f6;
    font-family: "Roboto Condensed", sans-serif;
  }

  li {
    list-style: none;
  }

  a {
    text-decoration: none;
  }

  :root {
    --color-red: #FF0000;
    --color-white: #ffffff;
    --color-dark-white: #efefef;
    --color-black: #000000;
    --color-light-gray: #808080;
    --color-bright-blue: #0096FF;
    --size-medium: 20px;
    --size-large: 25px;
  }
`;

export default function App() {
  return (
    <>
      <GlobalStyles />
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </Router>
    </>
  );
}
