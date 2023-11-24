
import React, { useState } from 'react';





const Register = () => {

    const [user, setUser] = useState('')
    const [name, setName] = useState('')
    const [password, setPassword] = useState('')

    const handdleLoguin = (event) =>{

        event.preventDefault()
        console.log({user: user, name: name, password: password})
    }


  return (
    <div className="container d-flex justify-content-center align-items-center vh-100">
    <form className="form-signin w-50" action='/register' method='POST'>
      <h1 className="h3 mb-3 fw-normal">Crea tu usuario y contraseña</h1>

      <div className="form-floating mb-3">
        <input onChange={(event) =>{setUser(event.target.value)}} type="email" className="form-control" id="floatingInput" placeholder="name@example.com" />
        <label htmlFor="floatingInput">Nombre de Usuario</label>
      </div>
      <div className="form-floating mb-3">
        <input onChange={(event) =>{setName(event.target.value)}} type="text" className="form-control" id="floatingInput" placeholder="name@example.com" />
        <label htmlFor="floatingInput">Nombre </label>
      </div>
      <div className="form-floating mb-3">
        <input onChange={(event) =>{setPassword(event.target.value)}} type="password" className="form-control" id="floatingPassword" placeholder="Password" />
        <label htmlFor="floatingPassword">Contraseña</label>
      </div>

      <button onClick={handdleLoguin} className="btn btn-primary w-100 mb-3" type="submit">
        Registrarse
      </button>
      <p className="mt-5 mb-3 text-muted">&copy; 2023</p>
    </form>
  </div>
  );
};

export default Register;