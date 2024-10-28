import logo from '../images /logo_blog.png';


function FooterApp() {
    return <footer className="footer" >
            <img src={logo} className="logo-footer" alt="logo"/>
            <p>
            © 2024 Tous droits réservés, Grace LENDET
            </p>
        </footer>
    
        ;
}
export default FooterApp;