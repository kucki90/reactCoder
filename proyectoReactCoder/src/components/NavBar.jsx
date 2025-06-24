import './index.css'; 

const NavBar = () => {
  return (
    <nav className="nav-bar">
      <div className="nav-title">Familia JyC</div>
      <ul className="nav-links">
        <li><a href="#" className="nav-link">Inicio</a></li>
        <li><a href="#" className="nav-link">Productos</a></li>
        <li><a href="#" className="nav-link">Contacto</a></li>
      </ul>
      <CartWidget /> 
    </nav>
  );
};

export default NavBar;