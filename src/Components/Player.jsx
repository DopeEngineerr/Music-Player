import { useEffect, useRef, useState } from "react";
import PlayerControls from "./PlayerControls";
import PlayerDetails from "./PlayerDetails";
import "./Style.css";

const Player = (props) => {

  const audioEl = useRef(null);
  const [IsPlaying, setIsPlaying] = useState(false);

  useEffect(() => {
    if (IsPlaying) {
      audioEl.current.play();
    } else {
      audioEl.current.pause();
    }
  });

  const SkipSong = (forwards = true) => {
    if (forwards) {
      props.setCurrentSongIndex(() => {
        let temp = props.CurrentSongIndex;
        temp++;

        if (temp > props.songs.length - 1) {
          temp = 0;
        }

        return temp;
      });
    }
    else {
      props.setCurrentSongIndex(() => {
        let temp = props.CurrentSongIndex;
        temp--;

        if (temp < 0) {
          temp = props.songs.length - 1;
        }

        return temp;
      });
    };
  };


  return (
    <div className="player">
      <div className="row">
        <div className="col s12 l4 offset-l4 white center-align z-depth-3" id="box">
          <audio src={props.songs[props.CurrentSongIndex].song} ref={audioEl}></audio>
          <h6 className="now">Playing Now</h6>
          <PlayerDetails
            song={props.songs[props.CurrentSongIndex]}
          />
          <PlayerControls
            IsPlaying={IsPlaying}
            setIsPlaying={setIsPlaying}
            SkipSong={SkipSong}
          />
          <p className=""><strong>Next up:</strong> {props.songs[props.NextSongIndex].title} by {props.songs[props.NextSongIndex].artist}</p>
        </div>
      </div>
    </div>
  );
}


export default Player;


