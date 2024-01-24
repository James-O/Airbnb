import Contact from "./Contact";
import star from "./image/star.png"
import mountain from "./image/mountain-bike.png"
import wedding from "./image/wedding-photography.png"
import katie from "./image/katie.png"
import workfromhome from "./image/workfromhome.jpeg"


export default function Card(){
    
    return(
        <div className="card">
            <Contact
                img = {katie}
                star = {star}
                lesson = "Life lessons with Katie Zaferes"
                rating = "6.0"
                country = "Israel"
                price = "From $136"
            />
            <Contact 
                img = {wedding}
                star = {star}
                lesson = "Learn wedding photography"
                rating = "5.0"
                country = "USA"
                price = "From $180"
            />
            <Contact 
                img = {mountain}
                star = {star}
                lesson = "Group Mountain Biking"
                rating = "4.0"
                country = "Canada"
                price = "From $190"
            />
            <Contact 
                img = {workfromhome}
                star = {star}
                lesson = "Work from home"
                rating = "5.0"
                country = "Ghana"
                price = "From $150"
            />
            <Contact 
                img = {mountain}
                star = {star}
                lesson = "Group Mountain Biking"
                rating = "4.0"
                country = "Canada"
                price = "From $190"
            />
        </div>
    )
}