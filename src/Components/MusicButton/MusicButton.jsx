import { useState, useRef, useEffect } from "react";
import "./musicButton.css";

const MusicButton = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isNeon, setIsNeon] = useState(false);
  const audioRef = useRef(null);

  useEffect(() => {
    audioRef.current.load();
  }, []);

  const togglePlay = () => {
    if (isPlaying) {
      audioRef.current.pause();
      setIsNeon(false);
    } else {
      audioRef.current.volume = 0.4;
      audioRef.current.play();
      setIsNeon(true);
    }
    setIsPlaying(!isPlaying);
  };

  return (
    <div className="music-control">
      <button
        className={`music-button ${isNeon ? "neon-button" : ""}`}
        onClick={togglePlay}
      >
        {isPlaying ? "🔇 Выключить музыку" : "🔊 Включить музыку"}
      </button>
      <audio ref={audioRef} loop>
        <source
          src="https://maxkoltugin.github.io/gift-for-galina/overlay-music.mp3"
          type="audio/mp3"
        />
      </audio>
    </div>
  );
};

export default MusicButton;
