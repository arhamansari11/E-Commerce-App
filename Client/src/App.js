import "./App.css";
import Image from "./Assets/Images/logo.png";
function App() {
  return (
    <div>
      <h1>This is my E-commerce App</h1>
      {/* <img classname="w-20" src={Image} /> */}
      <div class="spinner-border" role="status">
        <span class="visually-hidden">Loading...</span>
      </div>
    </div>
  );
}

export default App;
