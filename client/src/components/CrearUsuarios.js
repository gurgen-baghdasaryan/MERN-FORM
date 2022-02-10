import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

const CrearUsuarios = () => {
  const valorInicial = {
    nombre: "",
    apellido: "",
    color: " ",
    price: 0,
    email: "",
  };

  // let {id} = useParams();

  const [usuario, setUsuario] = useState(valorInicial); //El useState() devuelve un array de 2 posiciones , la primera el valor y la segunda es la forma de actualizar ese valor
  // const [subId, setSubId] = useState(id)

  const captruarDatos = (e) => {
    const { name, value } = e.target;
    setUsuario({ ...usuario, [name]: value });
  };

  const guardarDatos = async (e) => {
    e.preventDefault();
    // console.log(usuario);
    //crear la logica  para la peticion post
    const newUser = {
      nombre: usuario.nombre,
      apellido: usuario.apellido,
      edad: usuario.edad,
      telefono: usuario.telefono,
      email: usuario.email,
    };

    await axios.post("http://localhost:4000/api/usuarios", newUser);
    setUsuario({ ...valorInicial });
  };

  // Esto va ser la funcion para actualizar la informasion de nuestro usuario
  // const actualizarUsu = async(e)=>{
  //   e.preventDefault();
  //   const newUser = {
  //     nombre:usuario.nombre,
  //     apellido:usuario.apellido,
  //     edad:usuario.edad,
  //     telefono:usuario.telefono,
  //     email:usuario.email,
  //   }
  //   await axios.put('http://localhost:4000/api/usuarios/' + subId, newUser)
  //   setUsuario({...valorInicial})
  //   setSubId('')
  // }

  // Logica para hacer una petcion a la API

  return (
    <div className="col-md-5 offset-md-3">
      <div className="card card-body">
        <form onSubmit={guardarDatos}>
          <h2 className="text-center">Crear Usuario</h2>
          <div className="mb-3">
            <label>Nombre:</label>
            <input
              type="text"
              className="form-control"
              placeholder="introduzca su Nombre"
              required
              name="nombre"
              value={usuario.nombre}
              onChange={captruarDatos}
            />
          </div>
          <div className="mb-3">
            <label>Apellido:</label>
            <input
              type="text"
              className="form-control"
              placeholder="introduzca su Apellido"
              required
              name="apellido"
              value={usuario.apellido}
              onChange={captruarDatos}
            />
          </div>
          <div className="mb-3">
            <label>Edad:</label>
            <input
              type="number"
              className="form-control"
              placeholder="introduzca su Edad"
              required
              name="edad"
              value={usuario.edad}
              onChange={captruarDatos}
            />
          </div>
          <div className="mb-3">
            <label>Telefono:</label>
            <input
              type="Number"
              className="form-control"
              placeholder="introduzca su Tel"
              required
              name="telefono"
              value={usuario.telefono}
              onChange={captruarDatos}
            />
          </div>
          <div className="mb-3">
            <label>Email:</label>
            <input
              type="text"
              className="form-control"
              placeholder="introduzca su Email"
              required
              name="email"
              value={usuario.email}
              onChange={captruarDatos}
            />
          </div>
          <button className="btn btn-primary form-control">
            Registrar Usuario
          </button>
        </form>
      </div>
    </div>
  );
};

export default CrearUsuarios;
