import { NavLink } from "react-router-dom";
import "../styles/article.css"

function Article({ cover, title }) {
    
    return < >
        <NavLink to={"/astuces"} className="card-link">
            <article className="card">
                <img src={cover} alt={title}/>
                <p className="card-text">{title}</p>
            </article>
        </NavLink>
    </>
}



export default Article; 