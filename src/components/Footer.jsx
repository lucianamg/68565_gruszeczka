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
                <a href="https://tinyurl.com/vzcauj4z" target="_blank" rel="noopener noreferrer"> <img src={`${import.meta.env.BASE_URL}instagram.png`} alt="logo instagram" /></a>
                <a href="https://tinyurl.com/vzcauj4z" target="_blank" rel="noopener noreferrer"><img src={`${import.meta.env.BASE_URL}facebook.png`} alt="logo facebook" /></a>
                <a href="https://tinyurl.com/vzcauj4z" target="_blank" rel="noopener noreferrer"><img src={`${import.meta.env.BASE_URL}x.png`} alt="logo X" /></a>
            </div>
        </footer>
    );
}
export default Footer;