import "../SurpriseTimer/surpriseTimer.css";
import { useEffect, useState, useRef } from "react";

const FlipCard = ({ surpriseDate, surpriseImage }) => {
  const surpriseSounds = useRef({
    sound1: new Audio(
      "https://maxkoltugin.github.io/gift-for-galina/sound1.mp3"
    ),
    sound2: new Audio(
      "https://maxkoltugin.github.io/gift-for-galina/sound2.mp3"
    ),
    sound3: new Audio(
      "https://maxkoltugin.github.io/gift-for-galina/sound3.mp3"
    ),
    sound4: new Audio(
      "https://maxkoltugin.github.io/gift-for-galina/sound4.mp3"
    ),
    sound5: new Audio(
      "https://maxkoltugin.github.io/gift-for-galina/sound5.mp3"
    ),
    sound6: new Audio(
      "https://maxkoltugin.github.io/gift-for-galina/overlay-music.mp3"
    ),
  });

  // const surprisesTime = {
  //   surprise1: new Date(Date.UTC(2025, 6, 6, 2, 0)),
  //   surprise2: new Date(Date.UTC(2025, 6, 6, 4, 0)),
  //   surprise3: new Date(Date.UTC(2025, 6, 6, 6, 0)),
  //   surprise4: new Date(Date.UTC(2025, 6, 6, 8, 0)),
  //   surprise5: new Date(Date.UTC(2025, 6, 6, 10, 0)),
  //   surprise6: new Date(Date.UTC(2025, 6, 6, 12, 0)),
  // };
  const surprisesTime = {
    surprise1: new Date(Date.UTC(2025, 5, 6, 2, 0)),
    surprise2: new Date(Date.UTC(2025, 5, 6, 4, 0)),
    surprise3: new Date(Date.UTC(2025, 5, 6, 6, 0)),
    surprise4: new Date(Date.UTC(2025, 5, 6, 8, 0)),
    surprise5: new Date(Date.UTC(2025, 5, 6, 10, 0)),
    surprise6: new Date(Date.UTC(2025, 5, 6, 12, 0)),
  };

  const surprisesImg = {
    surprise1: (
      <img
        className="person-img dima-img"
        src="https://maxkoltugin.github.io/gift-for-galina/Dima.jpg"
        alt="Dima"
      />
    ),
    surprise2: (
      <img
        className="person-img katia-img"
        src="https://maxkoltugin.github.io/gift-for-galina/Katia.jpg"
        alt="Katia"
      />
    ),
    surprise3: (
      <img
        className="person-img nikita-img"
        src="https://maxkoltugin.github.io/gift-for-galina/Nikita.jpg"
        alt="Nikita"
      />
    ),
    surprise4: (
      <img
        className="person-img andrey-img"
        src="https://maxkoltugin.github.io/gift-for-galina/Andrey.jpg"
        alt="Andrey"
      />
    ),
    surprise5: (
      <img
        className="person-img max-img"
        src="https://maxkoltugin.github.io/gift-for-galina/Max.jpg"
        alt="Max"
      />
    ),
    surprise6: (
      <p className="sixth-gift">В течении 24ч ожидайте ФИНАЛЬНЫЙ подарок</p>
    ),
  };

  const surpriseImgKey = `surprise${surpriseImage}`;
  const targetImg = surprisesImg[surpriseImgKey];

  const [isPlaying, setIsPlaying] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [isFlipped, setIsFlipped] = useState(false);
  const [currentTime, setCurrentTime] = useState(new Date());
  const [timeLeft, setTimeLeft] = useState(0);
  const [isAvailable, setIsAvailable] = useState(false);

  const handleSoundPlay = () => {
    const soundKey = `sound${surpriseImage}`;
    const audio = surpriseSounds.current[soundKey];

    if (isPlaying) {
      audio.pause();
      setIsPlaying(false);
    } else {
      audio.load();
      audio.currentTime = 0;
      audio
        .play()
        .then(() => setIsPlaying(true))
        .catch((e) => console.error("Audio error:", e));
    }
  };
  const handleSoundStop = () => {
    const soundKey = `sound${surpriseImage}`;
    const audio = surpriseSounds.current[soundKey];

    audio.currentTime = 0;
    audio.pause();
  };

  const handleFlip = () => {
    setIsOpen(true);
    setIsFlipped(!isFlipped);
  };

  useEffect(() => {
    const updateTimer = () => {
      const now = new Date();
      setCurrentTime(now);

      const surpriseDateKey = `surprise${surpriseDate}`;
      const targetTime = surprisesTime[surpriseDateKey];

      const diff = targetTime - now;
      setTimeLeft(diff > 0 ? diff : 0);

      if (diff <= 0 && !isAvailable) {
        setIsAvailable(true);
      }
    };

    updateTimer();
    const timerId = setInterval(updateTimer, 1000);

    return () => clearInterval(timerId);
  }, [isAvailable, surpriseDate]);
  const formatTime = (ms) => {
    const seconds = Math.floor((ms / 1000) % 60);
    const minutes = Math.floor((ms / (1000 * 60)) % 60);
    const hours = Math.floor((ms / (1000 * 60 * 60)) % 24);

    return { hours, minutes, seconds };
  };

  const { hours, minutes, seconds } = formatTime(timeLeft);

  return (
    <div className="flip-card-wrapper">
      {isAvailable ? (
        <div
          className={`flip-card ${isFlipped ? "flipped" : ""}`}
          onClick={handleFlip}
        >
          <div
            onClick={handleSoundPlay}
            className={`flip-card-front ${isOpen ? "active" : ""}`}
          >
            {isOpen ? (
              <img
                className="gift-img"
                src="https://maxkoltugin.github.io/gift-for-galina/gift-open.png"
                alt="Gift Open"
              />
            ) : (
              <img
                className="gift-img"
                src="https://maxkoltugin.github.io/gift-for-galina/gift.png"
                alt="Gift"
              />
            )}
          </div>
          <div onClick={handleSoundStop} className="flip-card-back">
            {targetImg}
          </div>
        </div>
      ) : (
        <div className="countdown-timer">
          <div className="timer-digits">
            <div className="time-block">
              <span>{hours.toString().padStart(2, "0")}</span>
              <small>часов</small>
            </div>
            <div className="time-block">
              <span>{minutes.toString().padStart(2, "0")}</span>
              <small>минут</small>
            </div>
            <div className="time-block">
              <span>{seconds.toString().padStart(2, "0")}</span>
              <small>секунд</small>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default FlipCard;
