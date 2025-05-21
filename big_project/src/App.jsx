import { useState } from 'react'
import { useEffect, useRef } from 'react';

import './index.css'
import NavBar from './NavBar.jsx'
import Video_card from './video_card.jsx'
import videoData from './videos.json'

function App() {
  const [selectedIndex, setSelectedIndex] = useState(null);
  console.log(selectedIndex);

  return (
    <>
      <NavBar />
      <div className='container-fluid'>
        <div className='row'>
          <NewIndex selectedIndex={selectedIndex} setSelectedIndex={setSelectedIndex} />
        </div>
      </div>
    </>
  )
}

function NewIndex({ selectedIndex, setSelectedIndex }) {
  if (selectedIndex !== null) {
    const selectedVideo = videoData[selectedIndex];
    return (
      <>
        <div id="player"></div>
        <YouTubePlayer videoId={selectedVideo.link} />
      </>
    )
  }
  else {
    return (
      <>
        {videoData.map((video, index) => (
          <div key={index} className="col-md-3 mb-4">
            <Video_card
              onClick={() => setSelectedIndex(index)}
              video_cover_img={video.thumbnail}
              video_cover_alt={video.alt}
              video_title={video.title}
            />
          </div>
        ))}
      </>
    )
  }
}

function YouTubePlayer({ videoId }) {
  const playerRef = useRef(null);

  useEffect(() => {
    if (!window.YT) {
      const tag = document.createElement('script');
      tag.src = 'https://www.youtube.com/iframe_api';
      const firstScriptTag = document.getElementsByTagName('script')[0];
      firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

      window.onYouTubeIframeAPIReady = loadPlayer;
    } else {
      loadPlayer();
    }

    function loadPlayer() {
      new window.YT.Player(playerRef.current, {
        height: '730',
        width: '980',
        videoId: videoId,
        playerVars: { playsinline: 1 },
        events: {
          onReady: (event) => event.target.playVideo(),
        }
      });
    }

    function onPlayerStateChange(event) {
      if (event.data === window.YT.PlayerState.PLAYING) {
        setTimeout(() => {
          event.target.stopVideo();
        }, 6000);
      }
    }
  }, [videoId]);

  return <div id="player" ref={playerRef}></div>;
}

export default App