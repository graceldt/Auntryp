import Banner from "../components/banner";
import Presentation from "../components/presentation";
import Article from "../components/article";


function Home() {
    return (
        <>
            <Banner />
            <section>
                <Presentation/>
            </section>
            <section className="news">
                <hr className="line" />
                <h2>À la une</h2>
                <p> LES DERNIERS ARTICLES DU BLOG</p>
                <div className="articleContainer">
                { 
                    NewsData.map((news) => (
                        <Article title={news.title} cover={news.cover} />
                    ))
                }
                </div>
            </section>
            <section className="news">
                <hr className="line" />
                <h2>Carnet de voyage</h2>
                <p>NOS DERNIÈRES DESTINATIONS DE VOYAGES</p>
                <div className="articleContainer">
                { 
                    NewsData.map((news) => (
                        <Article title={news.title} cover={news.cover} />
                    ))
                }
                </div>
            </section>
        </>

    )
}

const NewsData = [
    {
        cover: 'https://images.unsplash.com/photo-1521240104483-b3e91583366c?q=80&w=2960&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        title: 'Visiter Copenhague en 1 week-end',
    },
    {
        cover: 'https://images.unsplash.com/photo-1580910727537-e4c80c6a6a29?q=80&w=2874&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        title: 'À la découverte de la Réunion',
    },
    {
        cover: 'https://images.unsplash.com/photo-1585052447303-3dab09488550?q=80&w=2962&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        title: 'À la découverte de Cluj Napoca',
    },
];

export default Home;