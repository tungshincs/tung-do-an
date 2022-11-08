const Media = ({
  media,
  onPrev,
  onNext,
  isPlaying,
  setisPlaying,
  progress,
  isFirstConnect,
  medias,
  songActive,
  selectSong,
}) => {
  React.useEffect(() => {
    if (!isFirstConnect) setisPlaying(true);
  }, [songActive]);
  const PlayPause = () => {
    setisPlaying(!isPlaying);
  };
  return (
    <>
      <div className="player">
        <div className="dashboard">
          <header>
            <h4>Now playing:</h4>
            <h2>{media.name}</h2>
          </header>

          <div className="cd">
            <div
              className={`cd-thumb ${isPlaying ? "animation" : ""}`}
              style={{ backgroundImage: `url(${media.avatar})` }}
            ></div>
          </div>

          <div className="control">
            <div className="btn btn-prev" onClick={() => onPrev()}>
              <i className="fas fa-step-backward"></i>
            </div>
            <div className="btn btn-toggle-play">
              {isPlaying ? (
                <i
                  className="fas fa-pause icon-pause"
                  onClick={() => PlayPause()}
                ></i>
              ) : (
                <i
                  className="fas fa-play icon-play"
                  onClick={() => PlayPause()}
                ></i>
              )}
            </div>
            <div className="btn btn-next" onClick={() => onNext()}>
              <i className="fas fa-step-forward"></i>
            </div>
          </div>

          <input
            id="progress"
            className="progress"
            type="range"
            value={progress}
            step="1"
            min="0"
            max="100"
          />

          <audio id="audio" src=""></audio>
        </div>

        <div className="playlist">
          {medias.map((item, index) => (
            <div
              className={`song ${songActive === index ? "active" : ""}`}
              key={item.id}
              onClick={() => selectSong(index)}
            >
              <div
                className="thumb"
                style={{ backgroundImage: `url(${item.avatar})` }}
              ></div>
              <div className="body">
                <h3 className="title">{item.name}</h3>
                <p className="author">Raftaar x Fortnite</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

const App = () => {
  const [songActive, setSongActive] = React.useState(0);
  const [songs, setSongs] = React.useState(medias);
  const [isPlaying, setisPlaying] = React.useState(false);
  const [isFirstConnect, setIsFirstConnect] = React.useState(true);
  const [progress, setProgress] = React.useState(0);

  const audioEle = React.useRef();

  React.useEffect(() => {
    setIsFirstConnect(false);
    if (isPlaying) {
      audioEle.current.play();
    } else {
      audioEle.current.pause();
    }
  }, [isPlaying]);
  const medias = [
    {
      id: 1,
      name: "Mặt mộc",
      path: "audios/matmoc.mp3",
      singer: "Phạm Nguyên Ngọc x VAnh x Ân Nhi",
      avatar:
        "https://avatar-ex-swe.nixcdn.com/song/2022/08/15/e/8/c/1/1660550672437_640.jpg",
    },
    {
      id: 2,
      name: "Dưới những cơn mưa",
      path: "audios/saocungduoc.mp3",
      avatar:
        "https://avatar-ex-swe.nixcdn.com/playlist/2018/10/08/c/1/1/2/1538965076589_500.jpg",
    },
    {
      id: 3,
      name: "Tòng phu",
      path: "audios/tongphu.mp3",
      avatar: "https://i.ytimg.com/vi/hjvRIpU6acQ/maxresdefault.jpg",
    },
    {
      id: 4,
      name: "Waiting for you",
      path: "audios/waiting.mp3",
      avatar: "https://i.ytimg.com/vi/u6Y96g_yjnQ/maxresdefault.jpg",
    },
  ];

  const handleNext = () => {
    setIsFirstConnect(false);
    setisPlaying(false);
    setProgress(0);
    if (songActive == medias.length - 1) setSongActive(0);
    else setSongActive(songActive + 1);
  };

  const handlePrev = () => {
    setIsFirstConnect(false);
    setisPlaying(false);
    setProgress(0);
    if (songActive == 0) setSongActive(medias.length - 1);
    else setSongActive(songActive - 1);
  };

  const selectSong = (index) => {
    setisPlaying(false);
    setSongActive(index);
    setProgress(0);
  };

  const media = medias[songActive];

  const timeUpdate = (e) => {
    const progressPercent = Math.floor(
      (e.target.currentTime / e.target.duration) * 100
    );
    setProgress(progressPercent);
  };

  return (
    <div>
      <audio
        src={media.path}
        media={media}
        ref={audioEle}
        onTimeUpdate={(e) => timeUpdate(e)}
        onEnded={() => handleNext()}
      ></audio>

      <Media
        media={media}
        medias={medias}
        onPrev={handlePrev}
        onNext={handleNext}
        songs={songs}
        setSongs={setSongs}
        isPlaying={isPlaying}
        setisPlaying={setisPlaying}
        audioEle={audioEle}
        songActive={songActive}
        isFirstConnect={isFirstConnect}
        progress={progress}
        selectSong={selectSong}
      />
    </div>
  );
};

const root = ReactDOM.createRoot(document.querySelector("#app"));
root.render(<App />);
