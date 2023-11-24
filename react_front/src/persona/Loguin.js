import React, { useState } from 'react';



const Login = () => {

    /*
    Utilizo useState para manejar los estados en los campos de ingreso de información
    */ 
    const [user, setUser] = useState('')
    const [password, setPassword] = useState('')

    const handdleLoguin = (event) =>{

        event.preventDefault()
        console.log({user: user, password: password})
    }

  return (
    <div className="container d-flex justify-content-center align-items-center vh-100">
    <form className="form-signin w-50">
      <h1 className="h3 mb-3 fw-normal">Ingresa tu usuario y contraseña</h1>

      <div className="form-floating mb-3">
        {/* Capturo el evento usando onChange al obtener el valor referenciando con target el cambio  */}
        <input onChange={(event) =>{setUser(event.target.value)}} type="email" className="form-control" id="floatingInput" placeholder="name@example.com" />
        <label htmlFor="floatingInput">Nombre de Usuario</label>
      </div>
      
      <div className="form-floating mb-3">
        <input onChange={(event) =>{setPassword(event.target.value)}} type="password" className="form-control" id="floatingPassword" placeholder="Password" />
        <label htmlFor="floatingPassword">Contraseña</label>
      </div>

      <button onClick={handdleLoguin} className="btn btn-primary w-100 mb-3" type="submit">
        Iniciar Sesión
      </button>
      <p className="mt-5 mb-3 text-muted">&copy; 2023</p>
    </form>
  </div>
  );
};

export default Login;
