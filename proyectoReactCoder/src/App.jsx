import { Header } from "./components/Header.jsx"
import { Footer } from "./components/Footer.jsx"
import { Main } from "./components/Main.jsx"

export function App () {
  return (
    <div className="app-container">
      <Header />
      <Main />
      <Footer />
      
      {/* <NavBar />
      <ItemListContainer /> */} 
    </div>
  );
}; 