//import components needed
import MovieGallery from "./components/MovieGallery";
import { useState, useEffect } from "react";
//global variables
let API_KEY= process.env.REACT_APP_API_KEY


function App() {
  const [movieInfo, setMovieInfo] = useState([])

  const fetchMovieInfo = () => {
    let URl = `https://www.omdbapi.com/?apikey=${API_KEY}&t=star%20trek`
    fetch(URl)
      .then(res => res.json())
      .then(jsonData => setMovieInfo(jsonData))
  }
  useEffect(() => {
    fetchMovieInfo()
  }, [])
 

  return (
    <div className="App">
      <MovieGallery movieInfo={movieInfo}/>
    </div>      
  );
}

export default App;
