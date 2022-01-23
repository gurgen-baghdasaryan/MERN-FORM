import React from 'react'

const CrearUsuarios = () => {
    return (
        <div className="col-md-5 offset-md-3">
      <div className="card card-body ">
        <form>
          <h2 className="text-center">Crear Usuario</h2>
          <div className="mb-3 col-sm-2  col-form-label col-form-label-sm">
            <label>Nombre:</label>
            <input
              type="text"
              className="form-cotrol"
              placeholder="introduzca su Nombre"
              required
            />
          </div>
          <div className="mb-3 col-sm-2 col-form-label col-form-label-sm">
            <label>Apellido:</label>
            <input
              type="text"
              className="form-cotrol"
              placeholder="introduzca su Apellido"
              required
            />
          </div>
          <div className="mb-3 col-sm-2 col-form-label col-form-label-sm">
            <label>Edad:</label>
            <input
              type="number"
              className="form-cotrol"
              placeholder="introduzca su Edad"
              required
            />
          </div>
          <div className="mb-3 col-sm-2 col-form-label col-form-label-sm">
            <label>Telefono:</label>
            <input
              type="Number"
              className="form-cotrol"
              placeholder="introduzca su Tel"
              required
            />
          </div>
          <div className="mb-3 col-sm-2 col-form-label col-form-label-sm">
            <label>Email:</label>
            <input
              type="text"
              className="form-cotrol"
              placeholder="introduzca su Email"
              required
            />
          </div>

          <button className="btn btn-primary">Registrar Usuario</button>
        </form>
      </div>
    </div>
    )
}

export default CrearUsuarios;

