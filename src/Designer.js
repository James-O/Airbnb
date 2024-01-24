
export default function Designer(props){
    return(
        <div className="design-content">
            <img src={props.img} alt="Katie" className="design-img"></img>
            <div className="design-text">
                <div>
                    <img src={props.star} alt="star" className="star"></img>
                    <span>{props.rating}</span>
                    <span>(6).</span>
                    <span>{props.country}</span>
                </div>
                <p>{props.lesson}</p>
                <p><b>{props.price}</b>/ person</p>
            </div>
        </div> 
    )
}