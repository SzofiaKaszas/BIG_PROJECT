import "./videoCard.css";

export default function Video_card(props){
    return (
        <a className="basicLink" target="_blank" onClick={props.onClick}>
        <div className="card video-card">
            <img src={props.video_cover_img} orientation="top" className="card-img-top" alt={props.video_cover_alt}></img>
            <div className="card-body">
                <p className="card-title">{props.video_title}</p>
            </div>
        </div>
        </a>    
    )
}