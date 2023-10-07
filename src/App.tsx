import { useState } from "react";
import "./App.css";

// Components
import Playlist from "./components/Playlist";
import SearchBar from "./components/SearchBar";
import SearchResults from "./components/SearchResults";
import Tracklist from "./components/Tracklist";
import Track from "./components/Track";

function App() {
  return (
    <>
      <Playlist />
      <SearchBar />
      <SearchResults />
      <Tracklist />
      <Track />
    </>
  );
}

export default App;
