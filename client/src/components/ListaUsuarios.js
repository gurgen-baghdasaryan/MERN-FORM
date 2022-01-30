import React, { useEffect, useState } from "react";
import axios from 'axios'
import {Link} from 'react-router-dom';

const ListaUsuarios = () => {

    const [lista, setLista] = useState([])

    useEffect(() => {
        const getUsuarios = async()=>{
            const res = await axios.get('http://localhost:4000/api/usuarios')
            setLista(res.data)
        }
        getUsuarios();
    }, [lista])

    const  eliminarUsuario = async(id) =>{
        await axios.delete('http://localhost:4000/api/usuarios/'+ id)
    }

  return (
    <div className="row">
        {
            lista.map(list => (
                <div className="col-md-4 p-2" key={list._id}>
                    <div className="card">
                        <div className="card-header">
                            <h5>Nombre: {list.nombre}</h5>
                        </div>
                        <div className="card-body">
                            <p>Apellido:{list.apellido}</p>
                            <p>Edad: {list.edad}</p>
                            <p>Telefono: {list.telefono}</p>
                            <p>Email: {list.email}</p>
                        </div>

                        <div className="card-footer">
                            <button className="btn btn-danger" onClick={()=>eliminarUsuario(list._id)}>
                                Eliminar
                            </button>
                            <Link className='btn btn-primary m-1'>
                                Editar
                            </Link>
                        </div>
                    </div>
                </div>
            ))
        }
    </div>
  );
};

export default ListaUsuarios;
