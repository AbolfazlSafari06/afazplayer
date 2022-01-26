import React from "react";
import { Song as SongModel } from "../models/Song";
import SongListItem from "./SongListItem";

export interface SongProps {
  SongsList: SongModel[];
  currentSong: SongModel;
  displayListSong: boolean;
  setCurrentSong: React.Dispatch<React.SetStateAction<SongModel>>;
}

function SongsList(props: SongProps) {
  const { SongsList, currentSong, setCurrentSong, displayListSong } = props;
  return (
    <div className={`songs-list ${displayListSong ? "" : "display-list"}`}>
      <h2>List of Songs</h2>
      <div className="song-list-item">
        {SongsList.map((song) => (
          <SongListItem
            key={song.id}
            active={currentSong.id === song.id ? true : false}
            setCurrentSong={setCurrentSong}
            currentSong={song}
          />
        ))}
      </div>
    </div>
  );
}

export default SongsList;
