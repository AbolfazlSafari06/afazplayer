import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Song as SongModel, SongInfo } from "../models/Song";
import {
  faAngleRight,
  faAngleLeft,
  faPlay,
  faPause,
  faSpider,
  faSpinner,
} from "@fortawesome/free-solid-svg-icons";
import {
  ChangeEventHandler,
  SyntheticEvent,
  useEffect,
  useRef,
  useState,
} from "react";
import { timeFormater } from "../help/Help";
import { off } from "process";
import { BallTriangle } from "react-loader-spinner";

export interface PlayerProps {
  currentSong: SongModel;
  Songs: SongModel[];
  isPlaying: boolean;
  setIsPlaying: React.Dispatch<React.SetStateAction<boolean>>;
  setCurrentSong: React.Dispatch<React.SetStateAction<SongModel>>;
}

function Player(props: PlayerProps) {
  const { currentSong, isPlaying, setIsPlaying, Songs, setCurrentSong } = props;
  const [loadSong, setLoadSong] = useState<boolean>(true);
  const [songInfo, setsongInfo] = useState<SongInfo>({
    duration: 0,
    currentTime: 0,
    animationPrecentage: 0,
  });
  useEffect(() => {
    setIsPlaying(false);
  }, [currentSong]);

  const audioRef = useRef<HTMLAudioElement>(null);

  function timeUpdateHandler(e: SyntheticEvent<HTMLAudioElement>) {
    const currentTime = e.currentTarget.currentTime || 0;
    const duration = e.currentTarget.duration;
    const roundCurrentTime = Math.round(currentTime);
    const roundDuration = Math.round(duration);
    const animationPrecentage = Math.round((currentTime / duration) * 100);
    if (currentTime === duration) {
      skipSong("next");
    }
    setsongInfo({ ...songInfo, currentTime, duration, animationPrecentage });
    setLoadSong(false);
  }
  function findNextIndex(
    direction: "next" | "back",
    currentIndex: number,
    arrayLength: number
  ) {
    let number;
    console.log(arrayLength);
    console.log(currentIndex);
    console.log(direction);
    if (direction === "next") {
      if (currentIndex + 1 === arrayLength) {
        number = 0;
      } else {
        number = currentIndex + 1;
      }
    } else {
      if (currentIndex - 1 < 0) {
        number = arrayLength - 1;
      } else {
        number = currentIndex - 1;
      }
    }
    console.log(number);
    return number;
  }
  function skipSong(direction: "next" | "back") {
    const currentSongPlay = Songs.findIndex(
      (song) => song.id === currentSong.id
    );
    const newSongIndex = findNextIndex(
      direction,
      currentSongPlay,
      Songs.length
    );
    if (Songs[newSongIndex]) {
      setCurrentSong(Songs[newSongIndex]);
    }
  }

  function dragHandler(e: React.ChangeEvent<HTMLInputElement>) {
    if (audioRef.current) {
      audioRef.current.currentTime = parseInt(e.target.value);
    }
    setsongInfo({
      ...songInfo,
      currentTime: +e.target.value,
    });
  }

  function playSong() {
    if (
      isPlaying &&
      audioRef.current?.currentTime! > 0 &&
      !audioRef.current?.ended
    ) {
      audioRef.current?.pause();
      setIsPlaying(!isPlaying);
    } else {
      audioRef.current?.play();
      setIsPlaying(!isPlaying);
    }
  }

  const Loading = () => {
    return (
      <div className="loaded-icon">
        <BallTriangle color="#887e7e" height={80} width={80} />
      </div>
    );
  };
  const trackAnimation = {
    transform: `translateX(${songInfo.animationPrecentage}%)`,
  };
  console.log(
    `linear-gradient(to right,#${currentSong.colors[0]},#${currentSong.colors[1]})`
  );
  return (
    <>
      {loadSong ? (
        <Loading />
      ) : (
        <div className="player">
          <div className="time-control">
            <p>{timeFormater(songInfo.currentTime)}</p>
            <div
              style={{
                background: `linear-gradient(to right,${currentSong.colors[0]},${currentSong.colors[1]})`,
              }}
              className="track"
            >
              <input
                onChange={dragHandler}
                min={0}
                max={songInfo.duration!}
                value={songInfo.currentTime!}
                type="range"
              />
              <div style={trackAnimation} className="animate-track"></div>
            </div>
            <p>{timeFormater(songInfo.duration)}</p>
          </div>
          <div className="play-control">
            <FontAwesomeIcon
              onClick={() => skipSong("back")}
              className="skip-back"
              size="3x"
              icon={faAngleLeft}
            />
            <FontAwesomeIcon
              onClick={playSong}
              className="play"
              size="3x"
              icon={isPlaying ? faPause : faPlay}
            />
            <FontAwesomeIcon
              onClick={() => skipSong("next")}
              className="skip-forward"
              size="3x"
              icon={faAngleRight}
            />
          </div>
        </div>
      )}
      <audio
        onLoadedMetadata={(e) => {
          timeUpdateHandler(e);
          setLoadSong(false);
        }}
        onLoadStart={(e) => {
          setLoadSong(true);
        }}
        preload={"sdfiu"}
        onTimeUpdate={timeUpdateHandler}
        ref={audioRef}
        src={currentSong.audio}
      ></audio>
    </>
  );
}

export default Player;
