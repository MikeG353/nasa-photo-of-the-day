import React, {useState, useEffect} from "react";
import "./App.css";
import axios from "axios";

import Header from "./Header.js"
import Image from "./Image.js"
import Explanation from "./Explanation.js"


const baseUrl = 'https://api.nasa.gov/planetary/apod';
const api_key = '5RsfZqlASLiqz9AIpQyGz0T2tfbWSvoPyYvcP1dW';


function App() {
  const [data, setData] = useState([])

  useEffect( () => {

  }, [])
  axios.get(`${baseUrl}?api_key=${api_key}`)
.then(res => {
  
  setData(res.data)
  console.log(data)

})
.catch(err=>{
  console.log(err.message)
})
  return (
    <div className="App">
      
      <Header>
        <h1>Title for pic of the day goes here</h1>
         {/* some kind of date object with calendar and date selection */}
      </Header>
      <Image>
        <img className={'imageOfTheDay'} alt={''}></img>
        <span></span>
      </Image>
      <Explanation>

      </Explanation>
    </div>
  );
}

export default App;
