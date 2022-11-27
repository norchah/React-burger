import React from "react";
import { ingrid, elems } from "../../utils/data";
import AppHeader from "../App-header/AppHeader.jsx";
import Main from "../App-main/main.jsx";

function App() {
  return (
    <>
      <AppHeader />
      <Main data={ingrid} elements={elems} />
    </>
  );
}

export default App;
