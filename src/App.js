//import components needed
import MovieGallery from "./components/MovieGallery";
import { useState, useEffect } from "react";
import Header from "./components/Header"
//global variables
let API_KEY= process.env.REACT_APP_API_KEY


function App() {
  const [movieInfo, setMovieInfo] = useState([])

  const fetchMovieInfo = (searchValue, searchedTypeValue = null) => {
    let URl = `https://www.omdbapi.com/?apikey=${API_KEY}&t=${searchValue}&type=${searchedTypeValue}`
    fetch(URl)
      .then(res => res.json())
      .then(jsonData => setMovieInfo(jsonData))
  }
  useEffect(() => {
    fetchMovieInfo()
  }, [])
 

  return (
    <div className="App">
      <Header
      fetchMovieInfo={fetchMovieInfo}
      />
      <MovieGallery 
      movieInfo={movieInfo} 
      />
    </div>      
  );
}

export default App;
