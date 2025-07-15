import { Routes, Route } from "react-router-dom";
import { NavBar } from "./NavBar";

export function Header() {
    return (
        <header className="header">

            <Routes>
                <Route path="/"/>
            </Routes>

            <NavBar />
            <h1 className="header__title">¡Bienvenido a nuestra Tienda Online!</h1>
        </header>
    )
}