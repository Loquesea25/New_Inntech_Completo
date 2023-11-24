import axios from 'axios'
import { useState, useEffect } from 'react'
import {Await, Link} from 'react-router-dom'

//Url que consumirá la API creada en el back
const URL = 'http://localhost:8000/personas/'


//Componente funcional
//Hook que me permite gestionar los estados de los componentes funcionales
const ComponentShowPersonas = () =>{
    const [personas, setPersona] = useState([])
    useEffect( ()=>{
        getAllPersonas()
    },[])

    
    //Método que mostrará las personas registradas
    //axios me permite conectar con la url donde definí los metodos http
    const getAllPersonas = async() =>{
        const response = await axios.get(URL)
        setPersona(response.data)
    }

    //Método que eliminará la persona por id
    const deletePersona = async(id) =>{
         await axios.delete(`${URL} ${id}`)
        getAllPersonas();
    }

    //Aquí devuelvo la vista 
    return(
        <div className='container'>
            <div className='row'>
                <div className='col'>

                    <Link to="/create" className='btn btn-primary mt-2 mb-2'><i className="fa-solid fa-user-plus"></i> Agregar nueva persona</Link>

                    <table className="table table-striped table-hover">
                        <thead>
                            <tr>
                            <th scope="col">ID</th>
                            <th scope="col">Nombre</th>
                            <th scope="col">Apellido</th>
                            <th scope="col">Editar / Eliminar</th>
                            </tr>
                        </thead>
                        <tbody>
                        {/* recorro el arreglo con personas.map y usando persona recorro uno por uno */}
                            
                           { personas.map ( (persona) =>(
                            <tr key = { persona.id}>
                                <td> { persona.id} </td>
                                <td> { persona.name} </td>
                                <td> { persona.last_name} </td>
                                
                                <td>
                                     <Link to={`/edit/${persona.id}`} className='btn btn-info '><i className="fa-solid fa-user-pen"></i> Editar</Link> 
                                    <button onClick={ ()=> deletePersona(persona.id)} className='btn btn-danger '><i className="fa-solid fa-user-minus"></i> Eliminar</button>
                                </td>
                            </tr>
                           ))

                           }
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    )
}

export default ComponentShowPersonas