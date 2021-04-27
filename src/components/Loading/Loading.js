import React from "react";
import Lottie from 'react-lottie';
import * as defaultOptions from "../../helpers/default-options-lottie";
import * as loadingAnimation from "../../assets/lutties_json/loading-animation.json";
import './Loading.css';

const Loading = () => {
  return (
    <div className="loading-animation">
      <Lottie
        options={{ animationData: loadingAnimation.default, ...defaultOptions }}
        height={530}
        width={500}
        isStopped={false}
        isPaused={false}
      />
      </div>
  );
};

export default Loading;