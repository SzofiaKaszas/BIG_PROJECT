import { useState } from 'react'

import './index.css'
import NavBar from './NavBar.jsx'
import Video_card from './video_card.jsx'
import videoData from './videos.json'

function App() {
  const [selectedIndex, setSelectedIndex] = useState(null);

  return (
    <>
      <NavBar />
      <div className='container-fluid'>
        <div className='row'>
          {videoData.map((video, index) => (
            <div key={index} className="col-md-3 mb-4">
              <Video_card
                onClick={() => setSelectedIndex(index)}
                link={video.link}
                video_cover_img={video.thumbnail}
                video_cover_alt={video.alt}
                video_title={video.title}
              />
            </div>
          ))}

        </div>
      </div>
    </>
  )
}

export default App
