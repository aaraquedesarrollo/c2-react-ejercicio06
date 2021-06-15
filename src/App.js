import { useState } from "react";
import { Cabezera } from "./components/Cabezera";

const { DateTime } = require("luxon");

function App() {
  const Pasos = [
    {
      id: 0,
      titulo: "Datos personales",
    },
    { id: 1, titulo: "Datos de acceso" },
    { id: 2, titulo: "Login" },
  ];

  const [paso, setPaso] = useState(Pasos[0]);
  const [titulo, setTitulo] = useState(paso.titulo);
  const [edad, setEdad] = useState(0);

  const siguientePaso = () => {
    const indice = paso.id + 1;
    setPaso(Pasos[indice]);
  };

  const calcularEdad = () => {};

  return (
    <div className="container contenedor">
      <Cabezera titulo={titulo} />
      <form className="d-flex flex-column align-items-center">
        <div className="paso paso1">
          <div className="form-grupo">
            <label>Nombre</label>
            <input type="text" placeholder="Nombre" required={true}></input>
          </div>
          <div className="form-grupo">
            <label>Apellidos</label>
            <input type="text" placeholder="Apellidos" required={true}></input>
          </div>
          <div className="form-grupo">
            <label>Fecha de nacimiento</label>
            <input type="date" required={true}></input>
            <span>Edad: {edad}</span>
          </div>
          <div className="form-grupo">
            <label>Correo electronico</label>
            <input
              type="email"
              placeholder="Correo electronico"
              onChange={calcularEdad}
              required={true}
            ></input>
          </div>
          <button className="btn btn-primary" onClick={siguientePaso}>
            Siguiente
          </button>
        </div>
        <div className="paso paso2">
          <label>Datos de acceso</label>
          <div className="form-grupo">
            <label>Nombre de usuario</label>
            <input
              type="text"
              placeholder="Nombre de usuario"
              required={true}
            ></input>
          </div>
          <div className="form-grupo">
            <label>Contraseña</label>
            <input type="text" placeholder="Contraseña" required={true}></input>
          </div>
          <div className="form-grupo">
            <label>Repetir contraseña</label>
            <input
              type="text"
              placeholder="Repetir contraseña"
              required={true}
            ></input>
          </div>
          <button className="btn btn-primary" disabled={true}>
            Anterior
          </button>
          <button className="btn btn-primary" disabled={true}>
            Siguiente
          </button>
        </div>
        <div className="paso paso3">
          <label>Login</label>
          <div className="form-grupo">
            <label>Nombre de usuario</label>
            <input
              type="text"
              placeholder="Nombre de usuario"
              required={true}
            ></input>
          </div>
          <div className="form-grupo">
            <label>Contraseña</label>
            <input type="text" placeholder="Contraseña" required={true}></input>
          </div>
          <div className="form-grupo">
            <label>Recordar contraseña</label>
            <input type="checkbox"></input>
          </div>
          <button className="btn btn-primary" disabled={true}>
            Anterior
          </button>
          <button className="btn btn-primary" disabled={true}>
            Acceder
          </button>
        </div>
      </form>
    </div>
  );
}

export default App;
