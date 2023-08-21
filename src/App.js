import "./App.css";
import DashBoard from "./Components/DashBoard/DashBoard";
import Navbar from "./Navigation/Navbar";

function App() {
  return (
    <div className="App">
      <div className="container">
        <div className="row">
          <Navbar />
          <DashBoard />
        </div>
      </div>
    </div>
  );
}

export default App;
