import "./App.scss";
import reactImg from "./assets/react.svg";
import ContainerCard from "./components/ContainerCard";

function App() {
  return (
    <div className="App">
      <div className="top_part">
        <img src={reactImg} alt="top-img" />
      </div>
      <div className="bottom_part">
        <ContainerCard />
      </div>
    </div>
  );
}

export default App;
