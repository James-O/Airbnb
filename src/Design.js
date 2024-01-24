import Designer from "./Designer";
import star from "./image/star.png"
import art from "./image/art-design.jpeg"
import logo from "./image/logo-design.jpeg"
import bulb from "./image/bulb-design.jpeg"
import ps from "./image/ps-design.jpeg"


export default function Design(){
    
    return(
        <div className="card">
            <Designer
                img = {art}
                star = {star}
                lesson = "Life lessons with Katie Zaferes"
                rating = "6.0"
                country = "Israel"
                price = "From $136"
            />
            <Designer 
                img = {ps}
                star = {star}
                lesson = "Learn wedding photography"
                rating = "5.0"
                country = "USA"
                price = "From $180"
            />
            <Designer 
                img = {logo}
                star = {star}
                lesson = "Group Mountain Biking"
                rating = "4.0"
                country = "Canada"
                price = "From $190"
            />
            <Designer 
                img = {bulb}
                star = {star}
                lesson = "Work from home"
                rating = "5.0"
                country = "Ghana"
                price = "From $150"
            />
        </div>
    )
}