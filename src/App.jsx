import React from "react";
import "./App.css"
import Navbar from "./components/navbar/navbar";
import Movielist from "./components/movielist/movielist";
import Fire from "./assets/popular.png"
import top from "./assets/toprated.jpeg"
import emoji from "./assets/upcoming.jpeg"
const App = () => {
  return (
      <div className="app">
        <Navbar/>
        <Movielist type="popular" title="Popular" emoji={Fire}/>
        <Movielist type="top_rated" title="Top Rated" emoji={top}/>
        <Movielist type="upcoming" title="Upcoming" emoji={emoji}/>
      </div>
  );
}

export default App;