import SurpriseTimer from "../../SurpriseTimer/SurpriseTimer";
import "./celebretions.css";
import MusicButton from "../../MusicButton/MusicButton";

const Celebretions = () => {
  return (
    <div className="celebretions-wrapper">
      <div className="music-wrapper">
        <MusicButton />
      </div>
      <div className="main-celebretion">
        <div className="image-wrapper">
          <img
            alt="celebretion-img"
            src="https://maxkoltugin.github.io/gift-for-galina/birthday-image.png"
            className="celebration-img"
          />
        </div>
        <div className="text-celebration-wrapper">
          <p className="title-celebration">
            <strong>Поздравление 🎂</strong>
          </p>
          <p className="text-celebration">
            Дорогая баба Галя, поздравляю с днём рождения! <br /> Пусть каждый
            твой день будет наполнен радостью, а здоровье будет крепким. Спасибо
            тебе за твою заботу и за то, что ездишь с нами на дачу. Желаю, чтобы
            все твои желания исполнялись, а в доме всегда царили тепло и
            счастье. 💖
            <br />
            <br /> <strong>Максим</strong>
          </p>
        </div>
      </div>
      <div className="surprise-timer">
        <SurpriseTimer />
      </div>
    </div>
  );
};

export default Celebretions;
