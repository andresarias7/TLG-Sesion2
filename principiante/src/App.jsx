import { useRef } from "react";
import "./App.css";

function App() {
  const inputRef = useRef(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Te saluda${inputRef.current?.value} desde React`);
  };

  return (
    <div>
      <h1>Hola mundo</h1>
      <form onSubmit={handleSubmit}>
        <input placeholder="Nombre" ref={inputRef} />
        <input type="submit" value="Submit" />
      </form>
    </div>
  );
}

export default App;
