import "./Style.css";

const PlayerControls = (props) => {


  // const Play = () => {
  //   if (props.IsPlaying) {
  //     var myIcon = "pause";
  //   }
  //   else {
  //     var myIcon = "play_arrow";
  //   };
  // }

  return (
    <div className="player-controls">
      <button className="btn btn-floating grey darken-4 waves-effect waves-light " onClick={() => props.SkipSong(false)}>
        <i className="material-icons">skip_previous</i>
      </button>
      <button className="btn btn-floating btn-large grey darken-4 waves-effect waves-light " onClick={() => props.setIsPlaying(!props.IsPlaying)}>
        <i className="material-icons" id="pause_btn">{props.IsPlaying ? "pause" : "play_arrow"}</i>
      </button>
      <button className="btn btn-floating grey darken-4 waves-effect waves-light" onClick={() => props.SkipSong()}>
        <i className="material-icons">skip_next</i>
      </button>
    </div>
  );
};

export default PlayerControls;


// play_arrow
// pause

{/* if (props.IsPlaying) {
  var myIcon = pause;
}
else {
  var myIcon = play_arrow;
} */}