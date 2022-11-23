import React from "react";
import { ingrid, elems } from "./utils/data";
import Header from "./header/header.jsx";
import Main from "./main/main.jsx";

function App() {
  return (
    <>
      <Header />
      <Main data={ingrid} elements={elems} />
    </>
  );
}

export default App;
