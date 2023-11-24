import axios from "axios";
import { useState,useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";

const URL = 'http://localhost:8000/personas/'

const ComponentEditPersona = () =>{

    //Componente para modificar persona

    /*Utilizo useNavigate para navegar a traves de la ruta y useParams para acceder a los parametros de la ruta en este caso el id  */

    const [name, setName] = useState('')
    const [last_name, setLast_name] = useState('')
    const navigate = useNavigate()
    const {id} = useParams()

    
    const update = async (event) =>{
        event.preventDefault()
        await axios.put(URL + id, {
            name: name,
            last_name: last_name
        })
        navigate('/')
        
    }

    useEffect( () =>{
        getPersonaById()
    },[])

    const getPersonaById = async () =>{
        const response = await axios.get(URL + id)
        setName(response.data.name)
        setLast_name(response.data.last_name)
        
    } 

    return(
        <div className="container">
      <div className="row justify-content-center mt-5">
        <div className="col-md-6">
          <h3>Crear nuevo registro de persona</h3>

          <form onSubmit={update}>
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
            <button type="submit" className="btn btn-primary">Guardar</button>
          </form>
        </div>
      </div>
    </div>
    )
}

export default ComponentEditPersona