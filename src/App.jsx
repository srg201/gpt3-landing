import React from "react";
import "./App.scss";

import {
  Footer,
  Blog,
  Possibility,
  Features,
  What,
  Header,
} from "./containers";
import { Cta, Brand, Navbar } from "./components";

const App = () => {
  return (
    <div className="App">
      <Navbar />
      <Header />
      <Brand />
      <What />
      <Features />
      <Possibility />
      <Cta />
      <Blog />
      <Footer />
    </div>
  );
};

export default App;
