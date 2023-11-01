import { Route, Routes } from "react-router-dom";
import "./App.css";
import Contact from "./pages/Contact";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Contact />} />
      </Routes>
    </div>
  );
}

export default App;
