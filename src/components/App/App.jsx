import React, { useState, useEffect } from "react";
import { elems } from "../../utils/data";
import AppHeader from "../App-header/AppHeader.jsx";
import Main from "../App-main/main.jsx";

function App() {
  const [state, setState] = useState({
    isLoading: false,
    ingridientsData: []
  })

  useEffect(() => {
    setState({...state, isLoading: true});
    fetch('https://norma.nomoreparties.space/api/ingredients')
    .then(res => {
      if (res.ok) {
        return res.json();
      }
      return Promise.reject(`Err ${res.status}`)
    })
    .then(data => {
      setState({...state,isLoading: false, ingridientsData: data.data})
    })
    .catch(err => console.log(err))
  }, [])
  
  const {ingridientsData, isLoading} = state;

  return (
    <>
      <AppHeader />
      {isLoading && "loading..."}
      {!isLoading &&
        <Main data={ingridientsData} elements={elems} /> 
      }
    </>
  );
}

export default App;
