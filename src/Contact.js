

export default function Contact(props){
    return(
        <div className="card-content">
            <img src={props.img} alt="Katie" className="card-img"></img>
            <div>
                <img src={props.star} alt="star" className="star"></img>
                <span>{props.rating}</span>
                <span>(6).</span>
                <span>{props.country}</span>
            </div>
            <p>{props.lesson}</p>
            <p><b>{props.price}</b>/ person</p>
        </div> 
    )
}