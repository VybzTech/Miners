import "./App.css";
import Home from "./Components/Home/Home";
import About from "./Components/About/About";
import Lithium from "./Components/Home/Lithium";
import Products from "./Components/Products/Products";
import Services from "./Components/Services/Services";
import Contact from "./Components/Contact/Contact";

function App() {
  return (
    <div className="App">
      <Home />
      <About />
      <Lithium />
      <Products />
      <Services />
      <Contact />
    </div>
  );
}

export default App;
