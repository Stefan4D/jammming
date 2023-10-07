import { useState } from "react";
import "./App.css";

// Components
import Playlist from "./components/Playlist";
import SearchBar from "./components/SearchBar";
import SearchResults from "./components/SearchResults";
import Tracklist from "./components/Tracklist";
import Track from "./components/Track";

function App() {
  // Temporary data

  // Each hard-coded array of track objects should contain a name, artist, album, and id property.
  const tracks = [
    {
      name: "Tiny Dancer",
      artist: "Elton John",
      album: "Madman Across The Water",
      id: 1,
    },
    {
      name: "Thriller",
      artist: "Michael Jackson",
      album: "Thriller",
      id: 2,
    },
    {
      name: "Kiss from a Rose",
      artist: "Seal",
      album: "Seal II",
      id: 3,
    },
    {
      name: "Barbie Girl",
      artist: "Aqua",
      album: "Aquarium",
      id: 4,
    },
  ];
  // Consider using state to store information such as your search results array, allowing you to update the array in response to user inputs and other events.
  const [searchResults, setSearchResults] = useState(tracks);

  // Use JavaScript’s map() method to iterate over arrays and render multiple components dynamically.
  // When returning the list of tracks, make sure to set a unique key attribute for each track. This will help React efficiently update the DOM when changes occur.

  return (
    <>
      <Playlist />
      <SearchBar />
      <SearchResults searchResults={searchResults} />
      <Tracklist />
      <Track />
    </>
  );
}

export default App;
