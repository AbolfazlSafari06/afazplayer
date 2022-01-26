import React from "react";
import { Song as SongModel } from "../models/Song";

export interface SongProps {
  currentSong: SongModel;
}

function Song(props: SongProps) {
  const { currentSong } = props;
  return (
    <div className="song-container">
      <img src={currentSong.cover} />
      <h2>{currentSong.name}</h2>
      <h3>{currentSong.artist}</h3>
    </div>
  );
}

export default Song;
