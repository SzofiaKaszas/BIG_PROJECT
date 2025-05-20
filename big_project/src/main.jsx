import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import NavBar from './NavBar.jsx'
import Video_card from './video_card.jsx'
import IFrame from './iFrame.jsx'
import videoData from './videos.json'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <NavBar/>
    <div className='container-fluid'>
      <div className='row'>
        <Video_card link = {videoData[0].link} video_cover_img =  {videoData[0].thumbnail} video_cover_alt = {videoData[0].alt} video_title = {videoData[0].title}/>
        <Video_card link = {videoData[1].link} video_cover_img =  {videoData[1].thumbnail} video_cover_alt = {videoData[1].alt} video_title = {videoData[1].title}/>
        <Video_card link = {videoData[2].link} video_cover_img =  {videoData[2].thumbnail} video_cover_alt = {videoData[2].alt} video_title = {videoData[2].title}/>
        <Video_card link = {videoData[3].link} video_cover_img =  {videoData[3].thumbnail} video_cover_alt = {videoData[3].alt} video_title = {videoData[3].title}/>
      </div>
    </div>
  </StrictMode>,
)

