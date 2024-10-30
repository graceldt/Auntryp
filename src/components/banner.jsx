import image from '../assets/agustin-diaz-gargiulo-7F65HDP0-E0-unsplash.jpg'
import '../styles/banner.css'


function Card (){
    return(
        <article className="banner">
            <img src={image} alt="banner" />
        </article>
    )
}

export default Card;