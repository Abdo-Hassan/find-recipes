import React from 'react';
import Lottie from 'react-lottie';
import * as animationData from './loading.json';

const Loading = () => {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData.default,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice'
    }
  };

  return (
    <div className='lottie'>
      <Lottie options={defaultOptions} />
    </div>
  );
};

export default Loading;
