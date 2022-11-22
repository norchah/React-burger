import React from "react";
import styles from "./app.module.css";
import { data } from "./utils/data";
import Header from "./header/header.jsx";
import Main from "./main/main.jsx";

function App() {
  return (
    <>
      <Header />
      <Main data={data}/>
    </>
  );
}

export default App;
