import "./App.css";
import Home from "./Components/Home/Home";
import About from "./Components/About/About";
import Lithium from "./Components/Home/Lithium";
import Products from "./Components/Products/Products";
import Services from "./Components/Services/Services";
import Contact from "./Components/Contact/Contact";
import ErrorHandler from "./Components/ErrorHandler";

function App() {
  return (
    <div className="App">
      <ErrorHandler>
        <Home />
      </ErrorHandler>
      <ErrorHandler>
        <About />
      </ErrorHandler>
      <ErrorHandler>
        <Lithium />
      </ErrorHandler>
      <ErrorHandler>
        <Products />
      </ErrorHandler>
      <ErrorHandler>
        <Services />
      </ErrorHandler>
      <ErrorHandler>
        <Contact />
      </ErrorHandler>
    </div>
  );
}

export default App;
