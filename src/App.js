import FComponent from "./Components/FComponent.js"; //penamaan kelas function harus huruf besar di awal untuk pemanggilan funct
import ClassCompo from "./Components/ClassCompo";
import "./App.css";

function App() {
  return (
    <div className="App">
      <FComponent name="Saputra" message="Siap"></FComponent>
      <ClassCompo mentor="Tomi" message="Siap" />
    </div>
  );
}

export default App;
