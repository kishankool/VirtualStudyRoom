import React from 'react'
import styled from "styled-components"
import YouTube from 'react-youtube'
export default function StudyAlone() {
    const onReady = (event) => {
        event.target.playVideo();

      }
      const onEnd = (event) => {
        event.target.pauseVideo();

      }
    const videoOptions = {
        playerVars: { // https://developers.google.com/youtube/player_parameters
          autoplay: 1,
          controls: 0,
          rel: 0,
          showinfo: 0,
          origin: window.location.href,
          
        }
      };
      
       
  return (
    <>
    <Container>
        <main className='relative mt-12 calculative '>
            <div>
                <div className="video-background">
                <div className="video-foreground">
                <YouTube
                        videoId="4IZq3GsNfLg"
                        opts={videoOptions}
                        className="video-iframe"
                        onReady={onReady}
                        onEnd={onEnd}
                    />
                    </div>
                </div>
            </div>
        </main>
    </Container>
    </>
  )
}

const Container = styled.div`
main{
    // padding: 20px;
}
.video-background {
    background: #000;
    position: fixed;
    top: 0;
    bottom: 0;
    right: 0;
    left: 100px;
    z-index: 100;
    &::after {
        display: block;
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        z-index: 1;
    }
}
.video-foreground,
.video-background iframe {
    position: absolute;
    top: 0;
    left: 20px;
    width: 100%;
    height: 100%;
    pointer-events: none;
}

@media (min-aspect-ratio: 16/9) {
    .video-foreground { height: 300%; top: -100%; }
}
@media (max-aspect-ratio: 16/9) {
    .video-foreground { width: 300%; left: -100%; }
}
`;
