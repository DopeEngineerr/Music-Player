import { useEffect, useState } from 'react';
import Player from "./Components/Player";

// import play from "/KUSHAGRA/Study Material/REACT/music-player/public/Songs/Agar Tum Saath Ho FULL AUDIO Song Tamasha Ranbir Kapoor Deepika Padukone T Series.mp3";

// import play from "./Songs/Agar Tum Saath Ho FULL AUDIO Song Tamasha Ranbir Kapoor Deepika Padukone T Series.mp3";
// import myimage from "./Images/agar_tum_saath_ho.jpg";

const App = () => {

  const [songs, setSongs] = useState([
    {
      title: "Agar Tum Saath Ho",
      artist: "Alka Yagnik, Arijit Singh",
      img_src: "http://a10.gaanacdn.com/images/albums/48/1506548/crop_480x480_1506548.jpg",
      song: "https://mp3db.xyz/mp3/tube/37b4732796177623d62743/320_song.mp3?file=Agar%20Tum%20Saath%20Ho%20FULL%20AUDIO%20Song%20Tamasha%20Ranbir%20Kapoor%20Deepika%20Padukone%20T%20Series.mp3&hash=5u3hh8oKKKrnhHkOrm9ulw&expire=1616018871"
      // img_src: "./Images/agar_tum_saath_ho.jpg",
      // song: "./Songs/Agar Tum Saath Ho FULL AUDIO Song Tamasha Ranbir Kapoor Deepika Padukone T Series.mp3"
    },

    {
      title: "Choo Lo",
      artist: "The Local Train",
      img_src: "https://a10.gaanacdn.com/gn_img/albums/YoEWlabzXB/oEWl05xyWz/size_xxl.webp",
      song: "https://mp3db.xyz/mp3/tube/3764d425178734568744b6/320_song.mp3?file=The%20Local%20Train%20Aalas%20Ka%20Pedh%20Choo%20Lo%20Official%20Audio.mp3&hash=beg2lf-Ve082_wcrIPdSdA&expire=1616018785"
      // img_src: "./Images/choo_lo.jpg",
      // song: "./Songs/The Local Train Aalas Ka Pedh Choo Lo Official Audio.mp3"
    },

    {
      title: "O Re Piya",
      artist: "Salim-Sulaiman, Rahat Fateh Ali Khan",
      img_src: "https://a10.gaanacdn.com/gn_img/albums/qa4WEkqKP1/a4WEE7dWP1/size_xxl.webp",
      song: "https://m.bestwap.im/load/MP3_Songs/By_Artists/Rahat_Fateh_Ali_Khan/Rahat_Fateh_Ali_Khan_Vol_4/O_Re_Piya.mp3"
      // img_src: "./Images/o_re_piya.jpg",
      // song: "./Songs/O Re Piya Song Aaja Nachle Madhuri Dixit Rahat Fateh Ali Khan Salim Sulaiman Jaideep Sahni.mp3"
    },

    {
      title: "Sajdaa",
      artist: "Rahat Fateh Ali Khan, Shankar Mahadevan",
      img_src: "http://a10.gaanacdn.com/images/albums/75/56775/crop_480x480_56775.jpg",
      song: "https://medium.loadbig.info/eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJhbGJ1bV9pZCI6MjYyMjUsInRpbWVvdXQiOjE2MTYwMTU0NTl9.HCNIgGTBd5uv87CkXfsCVJW21jsohd_b99gP-ZkAtQA/dtdkh/Sajdaa%20-%20%28amlijatt.in%29.mp3"
      // img_src: "./Images/sajda.jpg",
      // song: "./Songs/Sajdaa Full Video My Name is Khan Shahrukh Khan Kajol Rahat Fateh Ali Richa Sharma.mp3"
    },

    {
      title: "Waqt Ki Baatein",
      artist: "Dream Note",
      img_src: "https://a10.gaanacdn.com/gn_img/albums/10q3Z1K52r/0q3Zn7a135/size_xxl.webp",
      song: "http://data2.mobvd.com/320-3/waqt-ki-baatein-dream-note-(mobVD.com).mp3"
      // img_src: "./Images/waqt_ki_baatein.jpg",
      // song: "./Songs/Waqt ki Baatein Dream Note Official Music Video OST.mp3"
    }
  ]);


  const [CurrentSongIndex, setCurrentSongIndex] = useState(0);
  const [NextSongIndex, setNextSongIndex] = useState(0);

  useEffect(() => {
    setNextSongIndex(() => {
      if (CurrentSongIndex + 1 > songs.length - 1) {
        return 0;
      }
      else {
        return CurrentSongIndex + 1;
      }
    });
  }, [CurrentSongIndex]);


  return (
    <div className="app">
      <Player
        CurrentSongIndex={CurrentSongIndex}
        setCurrentSongIndex={setCurrentSongIndex}
        NextSongIndex={NextSongIndex}
        songs={songs}
      />
    </div>
  );
}

export default App;