import "./App.css";
import Myapp from "./components/Greet.js";
import Welcome from "./components/Welcome";
import Hello from "./components/without";

function App() {
  return (
    <div className="App">
      <Myapp name="Racheal" />
      <Myapp name="Ade" />
      <Welcome
        name="Ade"
        cont="This is the department of Software engineering" >
          <p>Hi I am a children probs</p>
        </Welcome>
      <Hello />
    </div>
  );
}

export default App;
