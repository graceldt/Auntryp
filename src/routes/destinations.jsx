import Gallery from "../components/gallery"
import "../styles/gallery.css"

function Destinations() {
    return (
        <section className="gallery">
            <div>
                <h3>Milan</h3>
                <div className="gallery1">
                    <Gallery />
                    <Gallery />
                    <Gallery />
                </div>
            </div>
            <div>
                <h3>Copennaghue</h3>
                <div className="gallery1">
                    <Gallery />
                    <Gallery />
                    <Gallery />
                </div>
            </div>
            <div>
                <h3>Roumanie</h3>
                <div className="gallery1">
                    <Gallery />
                    <Gallery />
                    <Gallery />
                </div>
            </div>
        </section>
    )
}

export default Destinations;