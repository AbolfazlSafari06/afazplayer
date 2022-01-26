import React, { useState } from "react";
import data from "../src/data";
import Player from "./component/Player";
import Song from "./component/Song";
import SongsList from "./component/SongsList";
import ToggleList from "./component/ToggleList";
import { Song as SongModel } from "./models/Song";
import "./styles/app.scss";

function App() {
  const [songs, setSongs] = useState<SongModel[]>(data());
  const [currentSong, setCurrentSong] = useState<SongModel>(songs[0]);
  const [isPlaying, setIsPlaying] = useState<boolean>(false);
  const [displayListSong, setDisplayListSong] = useState<boolean>(true);

  return (
    <div className={`app ${displayListSong ? "active-list" : ""}`}>
      <ToggleList
        displayListSong={displayListSong}
        setDisplayListSong={setDisplayListSong}
      />
      <Song currentSong={currentSong} />
      <Player
        Songs={songs}
        currentSong={currentSong}
        isPlaying={isPlaying}
        setIsPlaying={setIsPlaying}
        setCurrentSong={setCurrentSong}
      />
      <SongsList
        displayListSong={displayListSong}
        currentSong={currentSong}
        SongsList={songs}
        setCurrentSong={setCurrentSong}
      />
    </div>
  );
}

export default App;
