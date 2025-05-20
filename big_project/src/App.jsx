import './index.css'
import NavBar from './NavBar.jsx'
import Video_card from './video_card.jsx'
import IFrame from './iFrame.jsx'
import videoData from './videos.json'

function App() {
  return (
    <>
      <NavBar />
      <div className='container-fluid'>
        <div className='row'>
          {videoData.map((video, index) => (
            <div key={index} className="col-md-3">
              <Video_card
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
