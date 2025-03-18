import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { CartProvider } from "./context/CartContext";
import Header from "./components/Header";
import Hero from "./components/Hero";
import About from "./components/About";
import Products from "./components/Products";
import Contact from "./components/Contact";
import ProductDetails from "./components/ProductDetails";
import "./App.css";

function App() {
  return (
    <CartProvider>
      <Router basename="/your-repo-name">
        <div className="App">
          <Header />
          <Routes>
            <Route
              path="/"
              element={
                <>
                  <Hero />
                  <About />
                  <Products />
                  <Contact />
                </>
              }
            />
            <Route path="/product/:id" element={<ProductDetails />} />
          </Routes>
        </div>
      </Router>
    </CartProvider>
  );
}

export default App;
