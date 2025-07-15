import { Routes, Route } from "react-router-dom"
import { Home } from "./Home"
import { ItemListContainer  } from "./ItemListContainer"

export function Main () {
    return (
        <main>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/products" element={ <ItemListContainer /> } />
                <Route path="/products/:id" element={ /* <ItemDetail /> */ <h3>Detalle Producto</h3> }/>
                <Route path="/categories/" element={ /* <Categories /> */ <h3>Categorias</h3> }/>
                <Route path="/contact" element={ /* <Contact /> */ <h3>Contacto</h3> }  />
                <Route path="/*" element={ <h3>404</h3> }  />
            </Routes>
        </main>
    )
}