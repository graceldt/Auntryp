
import Slideshow from "../components/slideshow";
import { SliderData } from "../data/sliderData";

function Home (){
    return(
        <Slideshow slides={SliderData} />
    )
}

export default Home;