import React from 'react';
import {  PacmanLoader } from 'react-spinners';

const LoadingAnimation = () => {
    return (
        <div>
            <PacmanLoader color="#36d7b7" loading={true} size={50} />
        </div>
    );
};

export default LoadingAnimation;