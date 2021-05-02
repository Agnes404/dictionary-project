import Dictionary from "./Dictionary";
import Footer from "./Footer";
import "./App.css";

function App() {
  return (
    <div className="App">
      <div className="container">
        <Dictionary defaultKeyword="dictionary" />
        <Footer />
      </div>
    </div>
  );
}

export default App;
