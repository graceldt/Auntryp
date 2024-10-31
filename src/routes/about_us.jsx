import Postcard from "../components/postcard"
import Carte from "../assets/postcard.png"

function AboutUs (){
    return(
        <div className="aboutus">
            <Postcard/>
            <img src={Carte} alt="presentation" className="carte" />
        </div>
    )
}

export default AboutUs;