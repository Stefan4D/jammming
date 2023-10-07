import React from "react";

interface SearchResult {
  id: number;
  name: string;
  artist: string;
  album: string;
}
interface Props {
  searchResults: Array<SearchResult>;
}

export default function SearchResults({ searchResults }: Props) {
  return (
    <div>
      <h2>SearchResults</h2>
      {searchResults.map((searchResult) => (
        <div key={searchResult.id}>
          <div>{searchResult.name}</div>
          <div>{searchResult.artist}</div>
          <div>{searchResult.album}</div>
        </div>
      ))}
    </div>
  );
}
