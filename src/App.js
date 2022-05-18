import React, { useState, useEffect } from "react";
import "./App.css";
import axios from "axios"
import Gallery from "./Gallery";

function App() {
  const [imageData, setImageData] = useState([]);
  

  useEffect(() => {
    axios.get('https://api.nasa.gov/planetary/apod', {params: {api_key: 'DEMO_KEY', start_date: '2022-04-18', end_date: '2022-04-25'}})
      .then(res => {
        console.log(res.data);
        setImageData(res.data);
      }).catch(err => {
        console.error(err);
      })
  },[]);
   

  return (
    <div className="App">
      {
        imageData.map(image => <Gallery image={image} key={image.date}/>)
      }

      <p>
        Read through the instructions in the README.md file to build your NASA
        app! Have fun <span role="img" aria-label='go!'>🚀</span>!
      </p>
    </div>
  );
}

export default App;
