import logo from "./image/airbnb.png";

export default function Header(){
    return(
        <nav className="airbnb">
            <img src={logo} alt="airbnb-logo"></img>
        </nav>
    )
}
