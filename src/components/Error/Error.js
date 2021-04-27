import React from "react";
import Lottie from "react-lottie";
import ContentHeader from "../ContentHeader/ContentHeader";
import ContentInfo from "../ContentInfo/ContentInfo";
import * as animationError from "../../assets/lutties_json/error-animation.json";

const Error = ({ errorTitle, errorDescription, defaultOptions }) => {
  return (
    <>
      <ContentHeader contentHeaderText={errorTitle} />
      <Lottie
        options={{ animationData: animationError.default, ...defaultOptions }}
        height={350}
        width={320}
        isStopped={false}
        isPaused={false}
      />
      <ContentInfo contentText={errorDescription} />
    </>
  );
};

export default Error;
