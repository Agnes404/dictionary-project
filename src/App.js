import Dictionary from "./Dictionary";
import Footer from "./Footer";
import "./App.css";

function App() {
  return (
    <div className="App">
      <div className="container">
        <Dictionary defaultKeyword="sunset" />
        <Footer />
      </div>
    </div>
  );
}

export default App;
