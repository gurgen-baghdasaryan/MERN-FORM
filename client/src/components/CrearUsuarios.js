import React from 'react'

const CrearUsuarios = () => {
    return (
        <div className="col-md-5 offset-md-3">
      <div className="card card-body">
        <form>
          <h2 className="text-center">Crear Usuario</h2>
          <div className="mb-3">
            <label>Nombre:</label>
            <input
              type="text"
              className="form-control"
              placeholder="introduzca su Nombre"
              required
            />
          </div>
          <div className="mb-3">
            <label>Apellido:</label>
            <input
              type="text"
              className="form-control"
              placeholder="introduzca su Apellido"
              required
            />
          </div>
          <div className="mb-3">
            <label>Edad:</label>
            <input
              type="number"
              className="form-control"
              placeholder="introduzca su Edad"
              required
            />
          </div>
          <div className="mb-3">
            <label>Telefono:</label>
            <input
              type="Number"
              className="form-control"
              placeholder="introduzca su Tel"
              required
            />
          </div>
          <div className="mb-3">
            <label>Email:</label>
            <input
              type="text"
              className="form-control"
              placeholder="introduzca su Email"
              required
            />
          </div>

          <button className="btn btn-primary form-control">Registrar Usuario</button>
        </form>
      </div>
    </div>
    )
}

export default CrearUsuarios;

