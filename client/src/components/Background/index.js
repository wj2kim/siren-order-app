import React from 'react'
import coffeeVideo from 'styles/video/coffee-video.mp4';
import styled from 'styled-components';

const BackgroundVideo = () => {
    return(
         <VideoWrapper className="background-video" autoPlay="autoPlay" muted="muted" loop="loop">
             <source src={coffeeVideo} type="video/mp4" />
         </VideoWrapper>
    )
}

const VideoWrapper = styled.video`
    width: auto;
    height: fit-content;
    min-width: 100%;
    min-height: 100%;
    z-index: -5;
    position: absolute;
    top: 50%;
    left: 50%;
    -webkit-transform: translate(-50%, -50%);
    transform: translate(-50%, -50%)
`;

export default BackgroundVideo;