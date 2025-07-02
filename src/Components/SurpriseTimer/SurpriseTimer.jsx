import { useState } from "react";
import "./surpriseTimer.css";
import FlipCard from "../FlipCard/FlipCard";

const SurpriseTimer = () => {
  return (
    <div className="surprise-timer-wrapper">
      <div className="surprise-available-wrapper">
        <FlipCard surpriseDate={1} surpriseImage={1} />
        <FlipCard surpriseDate={2} surpriseImage={2} />
        <FlipCard surpriseDate={3} surpriseImage={3} />
        <FlipCard surpriseDate={4} surpriseImage={4} />
        <FlipCard surpriseDate={5} surpriseImage={5} />
        <FlipCard surpriseDate={6} surpriseImage={6} />
      </div>
    </div>
  );
};

export default SurpriseTimer;
