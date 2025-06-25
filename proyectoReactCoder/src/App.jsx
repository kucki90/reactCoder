import { NavBar } from "./components/NavBar";
import { ItemListContainer } from "./components/ItemListContainer";

export function App () {
  return (
    <div className="app-container">
      <NavBar />
      <ItemListContainer greeting="¡Bienvenido a nuestra Tienda Online!" /> {}
    </div>
  );
}; 