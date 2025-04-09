import { Link, NavLink } from "react-router-dom";
function Footer (){
    return (
        <footer className="footer">
            <NavLink 
                to="/" 
                className="footer_link">            
                <img src={`${import.meta.env.BASE_URL}Atempo_Market_Logo.png`} alt="logo" />
                Inicio
            </NavLink>
            

            <p> &copy; 2025 Lu - Todos los derechos reservados</p>
            <div className="mediaContainer">
                <p>Visitanos en redes</p>
                <a href="www.instagram.com/123"> <img src={`${import.meta.env.BASE_URL}instagram.png`} alt="instagram" /></a>
                <a href="www.facebook.com/123"><img src={`${import.meta.env.BASE_URL}facebook.png`} alt="facebook" /></a>
                <a href="www.x.com/123"><img src={`${import.meta.env.BASE_URL}x.png`} alt="X" /></a>
            </div>
        </footer>
    );
}
export default Footer;