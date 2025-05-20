import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import NavBar from './NavBar.jsx'
import Video_card from './video_card.jsx'
import IFrame from './iFrame.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <NavBar/>
    <div className='container-fluid'>
      <div className='row'>
        <Video_card video_cover_img = "#" video_cover_alt = "fasza video" video_title = "title"/>
        <Video_card video_cover_img = "#" video_cover_alt = "fasza video" video_title = "title"/>
        <Video_card video_cover_img = "#" video_cover_alt = "fasza video" video_title = "title"/>
        <Video_card video_cover_img = "#" video_cover_alt = "fasza video" video_title = "title"/>
        <Video_card video_cover_img = "#" video_cover_alt = "fasza video" video_title = "title"/>
      </div>
    </div>
  </StrictMode>,
)
