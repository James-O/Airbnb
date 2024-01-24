import gallery from "./image/Group.png";

import "./App.css";

export default function Gallery(){
    return(
        <div className="gallery">
            <img src={gallery} alt="img-gallery"></img>
            <div className="gallery-text">
                <h1>Online Experiences</h1>
                <p>Join unique interactive activities led by one-of-a kind hosts-all without leaving home</p>
            </div>
        </div>
    )
}