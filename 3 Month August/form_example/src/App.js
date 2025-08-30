import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import ExampleCustomHook from "./AllHooks/ExampleCustomHook";
import { useState } from "react";
import ExampleUseMemo from "./AllHooks/ExampleUseMemo";
import ExampleuseReducer from "./AllHooks/ExampleuseReducer";

function App() {
const [showCustomHook , setshowCustomHook] = useState(false);
const [showUseMemo , setshowUseMemo] = useState(false);
const [showuseReducer , setshowuseReducer ] = useState(false);
const handelCustomHook = () =>{
  try {
     setshowuseReducer(false)
      setshowUseMemo(false)
    setshowCustomHook(true)
  } catch (error) {
    console.log(error)
  }
}

const handelUseMemo = () =>{
  try {
    setshowuseReducer(false)
     setshowCustomHook(false)
    setshowUseMemo(true)
  } catch (error) {
    console.log(error)
  }
}

const handeluseReducer = () =>{
  try {
     setshowUseMemo(false)
    setshowCustomHook(false)
    setshowuseReducer(true)
  } catch (error) {
    console.log(error)
  }
}
  return (
    <div className="">

     <div className="container">
       <div className="row">
         <div className="col-md-1 mx-2">
          <button className="btn btn-primary"onClick={handelCustomHook}>customHook</button>
         </div>
          <div className="col-md-1 mx-2">
          <button className="btn btn-primary"onClick={handelUseMemo}>useMemo</button>
         </div>

         <div className="col-md-1 mx-2">
          <button className="btn btn-primary"onClick={handeluseReducer}>useReducer</button>
         </div>
       </div>
     </div>
  {
    showCustomHook && <ExampleCustomHook/> }
    {showUseMemo && <ExampleUseMemo/> }
    {showuseReducer && <ExampleuseReducer/>}
    </div>
  );
}

export default App;