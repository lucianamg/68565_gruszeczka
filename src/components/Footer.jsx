import { Link, NavLink } from "react-router-dom";
function Footer (){
    return (
        <footer className="footer">
            <NavLink 
                to="/" 
                className="navbar_link">            
                <img src={`${import.meta.env.BASE_URL}Atempo_Market_Logo.webp`} alt="logo" />
                Inicio
            </NavLink>
            

            <p> &copy; 2025 Lu - Todos los derechos reservados</p>
            <div className="mediaContainer">
                <p>Visitanos en redes</p>
                <a href="www.instagram.com/123">Instagram</a>
                <a href="www.facebook.com/123">Facebook</a>
                <a href="www.x.com/123">Twitter</a>
            </div>
        </footer>
    );
}
export default Footer;