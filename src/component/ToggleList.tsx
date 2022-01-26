import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMusic } from "@fortawesome/free-solid-svg-icons";
export interface ToggleListProps {
  setDisplayListSong: React.Dispatch<React.SetStateAction<boolean>>;
  displayListSong: boolean;
}
function ToggleList(props: ToggleListProps) {
  const { setDisplayListSong, displayListSong } = props;
  return (
    <nav>
      <h1 id="app-title">Afaz Music Player</h1>
      <button onClick={() => setDisplayListSong(!displayListSong)}>
        <span id="button-toggle"> songs list</span>
        <FontAwesomeIcon icon={faMusic} />
      </button>
    </nav>
  );
}

export default ToggleList;
