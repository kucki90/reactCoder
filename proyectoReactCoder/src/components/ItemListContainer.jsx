import { NavLink } from "react-router-dom";

export function ItemListContainer({ greeting }) {
  const productos = [
      { id: 1, nombre: "Producto 1" },
      { id: 2, nombre: "Producto 2" },
      { id: 3, nombre: "Producto 3" }
    ]
  return (
    <div className="item-list-container">
      <h2>{greeting}</h2>
      <p>Pronto verás nuestros increíbles productos aquí.</p>
      {productos.map((producto, indice) => {
          return (
              <div key={indice}>
                  {producto.nombre}
                  <NavLink to={`/producto/${producto.id}`}>ver detalle</NavLink>
              </div>
          )
      })}
    </div>
  );

};