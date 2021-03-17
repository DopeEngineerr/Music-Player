import "./Style.css";

const PlayerDetails = (props) => {
  return (
    <div className="player-details">
      <div className="details-img">
        <img className="myImg z-depth-2" src={props.song.img_src} />
      </div>
      <h4 className="details-title ">{props.song.title}</h4>
      <h7 className="details-artist " id="art">{props.song.artist}</h7>
    </div>
  );
}

export default PlayerDetails;