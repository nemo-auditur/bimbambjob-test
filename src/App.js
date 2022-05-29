//General imports
import "./App.css";
import { useEffect, useState } from "react";
//Components imports
import ActionArea from "./Components/ActionArea";
import Grid from "./Components/Grid";
import Header from "./Components/Header";
//import data
import textData from "./assets/data.txt";
//import lib
import dataRefactor from "./lib/dataRefactor";

function App() {
  //State management
  const [data, setData] = useState(null);

  // fetch data on load of the App
  useEffect(() => {
    try {
      fetch(textData)
        .then((res) => res.text())
        .then((text) => {
          setData(dataRefactor(text));
        });
    } catch (e) {
      console.log(e.error);
    }
  }, []);

  // Handle data fetching to avoid undefined
  if (data === null) {
    return <div>Data is loading</div>;
  }

  //Filter wich mower data's are send to the components
  const mower = ()=> {
    for (const mower of data.mowers){
      if(mower.moving){
        return mower
      }
    }
  }
  return (
    <>
      <div className="appContainer">
        <Header/>
        <Grid dimensions={data.dimensions} mower={mower()} />
        <ActionArea data={data} callBack={e=>{
          setData(e)
        }}/>
      </div>
    </>
  );
}

export default App;
