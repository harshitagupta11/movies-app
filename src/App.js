
import { useEffect, useState } from 'react';
import './App.css';
import MovieList from './components/MovieList';

import {FEATURE_API,SEARCH_API} from './key'


 function App() {

  const [movies,setMovies]=useState([])
  const [search,setSearch]=useState("")
  const fetchMovies= async (url)=>{
    let response= await fetch(url)
    response=await response.json()
    return response;
   }

  useEffect(()=>{
 fetchMovies(FEATURE_API).then(data=>{
   setMovies(data.results)
  })
  },[])

const handleSearch=(e)=>{
e.preventDefault();
if(search){
  fetchMovies(SEARCH_API+search).then(data=>{
    setMovies(data.results)
    
   })
  setSearch("")
}

}
const handleOnChange=(e)=>{
  console.log(e.target.value)
  setSearch(e.target.value)
}

// console.log(movies.length)
 
  return (
    <div className="App">
      <header >
        <form onSubmit={handleSearch}>
        <input  className="search"
        type="text"
        placeholder="Search..." 
        value={search}
        onChange={handleOnChange}
        ></input>
      </form>
      </header>
     <MovieList movies={movies} />
    </div>
  );
}

export default App;
