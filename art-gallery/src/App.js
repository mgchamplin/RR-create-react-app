import React, {useState, useEffect} from "react"
import Gallery from "./Gallery"
import Buttons from "./Buttons"
import './App.css';

function App() {
  let [artId, setArtId] = useState(12720)
  let [data, setData] = useState({})

  useEffect(() => {
    document.title='Welcome to Artworld'
    console.log(`https://collectionapi.metmuseum.org/public/collection/v1/objects/${artId}`)
    fetch(`https://collectionapi.metmuseum.org/public/collection/v1/objects/${artId}`)
    .then(response => response.json())
    .then(resData => setData(resData))
  }, [artId])

  // in App.js
// send this function down to <ButtonBar />
const handleIterate = (e) => {
  setArtId(artId + Number(e.target.value))
}


  return (
    <div className="App">
      <Gallery objectImg={data.primaryImage} artist={data.artistDisplayName} title={data.title} />
      <Buttons handleIterate={handleIterate}></Buttons>
    </div> 
  );
}

export default App;
