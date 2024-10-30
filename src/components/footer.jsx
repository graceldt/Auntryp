import logo from '../assets/logo_blog.png';
import Instagram from '../assets/instagram.png'


function FooterApp() {
    return <footer className="footer" >
        <div className='test'>
            <a href="https://www.instagram.com/auntryp_?igsh=Nzdzam1yZGR5dm82" target="_blank" rel="noreferrer"  ><img src={Instagram} alt="instagram" /></a>
            <img src={logo} className="logo-footer" alt="logo" />
        </div>
        <p>
            © 2024 Tous droits réservés, Grace LENDET
        </p>
    </footer>

        ;
}
export default FooterApp;