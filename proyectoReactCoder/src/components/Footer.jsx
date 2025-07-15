import { NavLink } from "react-router-dom";

export function Footer() {
    return (
        <footer className="nav-bar">
            <div className="nav-title">Familia JyC</div>
            <ul className="">
                <NavLink to="/" className="nav-links nav-link">Inicio</NavLink>
                <NavLink to="/products/:id" className="nav-links nav-link">Productos</NavLink>
                <NavLink to="/categories/:id" className="nav-links nav-link">Categorias</NavLink>
                <NavLink to="/contact" className="nav-links nav-link">Contacto</NavLink>
                <NavLink to="/*" className="nav-links nav-link">error</NavLink>
            </ul>
        </footer>
    )
}