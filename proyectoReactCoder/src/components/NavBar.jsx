import { NavLink } from "react-router-dom";
import { CartWidget } from "./CartWidget";

export function NavBar() {
  return (
    <nav className="nav-bar">
      <div className="nav-title">Familia JyC</div>
      <ul className="">
        <NavLink to="/" className="nav-links nav-link">Inicio</NavLink>
        <NavLink to="/products" className="nav-links nav-link">Productos</NavLink>
        <NavLink to="/categories" className="nav-links nav-link">Categorias</NavLink>
        <NavLink to="/contact" className="nav-links nav-link">Contacto</NavLink>
      </ul>
      <CartWidget />
    </nav>
  );
};