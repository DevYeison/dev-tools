import React from 'react';
import Lottie from 'react-lottie';
import * as animationNotFound from '../../assets/lutties_json/404-animation.json';
import ContentInfo from '../../components/ContentInfo/ContentInfo';

const ErrorPage = ({ errorInfo, options, handleClick, isPaused}) =>{

   
    return <>
    <div className="m-5">
    <Lottie options={{animationData: animationNotFound.default, ...options}} height={385} width={380} isStopped={false} isPaused={isPaused} onClick={handleClick}/>
    </div>
    <ContentInfo contentText={errorInfo}/>
    </>
}

export default ErrorPage;