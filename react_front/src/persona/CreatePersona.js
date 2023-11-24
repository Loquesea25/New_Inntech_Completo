import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const URL = 'http://localhost:8000/personas/'

const ComponentCreatePersona = () =>{

    //Componente para crear nueva persona
    const [name, setName] = useState('')
    const [last_name, setLast_name] = useState('')
    const navigate = useNavigate()

    const store = async (event) =>{
        //Con preventDefault evito el submit del formulario y así me regresa a la pantalla principal
        event.preventDefault()
        await axios.post(URL, {name: name, last_name: last_name})
        navigate('/')
        
    }

    return(
        <div className="container">
        <div className="row justify-content-center mt-5">
          <div className="col-md-6">
            <h3>Crear nuevo registro de persona</h3>
  
            <form onSubmit={store}>
              <div className="mb-3">
                <label className="form-label">Nombre</label>
                <input 
                  value={name}
                  onChange={(event) => setName(event.target.value)}
                  type="text"
                  className="form-control"
                />
  
                <label className="form-label">Apellido</label>
                <input 
                  value={last_name}
                  onChange={(event) => setLast_name(event.target.value)}
                  type="text"
                  className="form-control"
                />
              </div>
              <button type="submit" className="btn btn-primary">Crear</button>
            </form>
          </div>
        </div>
      </div>
    )
}

export default ComponentCreatePersona