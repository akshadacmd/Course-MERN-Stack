//If Else = jar tar jar he asel tr tae kr
//React Hooks = useState,useEffect
import 'bootstrap/dist/css/bootstrap.min.css';
import { useState } from "react"
import Card from './assets/Card';

//component
function App() {
  const [name, setName] = useState() // 1 Hook

  const [showName, setShowName] = useState(false);

  const handleOnChange = (e) => {
    console.log(e.target.value);
    setName(e.target.value);
  };

  const handleSubmit = () => {
    setShowName(true);
  };


  const [cardData, setCardData] = useState(
    [
      { title: "Title1" }, 
      { title: "Title2" }, 
      { title: "Title3" },
    ]
  )


  return (
    <>
      < Card title={"Title 1"} />

      < Card title={"Title 2"} />

      < Card title={"Title 3"} />


      <input
        name="name"
        placeholder="Enter Your Name"
        onChange={handleOnChange}
      />

      <button onClick={handleSubmit}>Submit</button>
      {showName && <h1>{name}</h1>}

    
    {
      cardData.map(
        (each) =>
        {
           < Card title={each.title} />

        })
    }


    </>
  );
}

export default App
