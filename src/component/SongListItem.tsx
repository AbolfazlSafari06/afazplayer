import React from "react";
import { Song as SongModel } from "../models/Song";

export interface SongProps {
  currentSong: SongModel;
  setCurrentSong: React.Dispatch<React.SetStateAction<SongModel>>;
  active: boolean;
}
function SongListItem(props: SongProps) {
  const { setCurrentSong, currentSong, active } = props;
  return (
    <div
      className={`song-item ${active ? "selected" : ""}`}
      onClick={() => setCurrentSong(currentSong)}
    >
      <img src={currentSong.cover} />
      <div className="song-decription">
        <h3>{currentSong.name}</h3>
        <h4>{currentSong.artist}</h4>
      </div>
    </div>
  );
}

export default SongListItem;
