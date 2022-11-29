import logo from '../imagenes/logo.png';
import React from 'react';
import { useNavigate } from 'react-router-dom';

const Login = (props) => {
    const navigate = useNavigate();
    
    const onSubmit = (e) => {
        e.preventDefault();
        const email= e.target.correo.value;
        const password= e.target.contraseña.value;

        console.log(email, password);
        //navigate('/');


    } 
    
    return(
        <form className="login-container">
            <img className="logo" src={logo} alt="logo" />
            
            <input className="correo" type="text" placeholder="Escribe tu correo" htmlFor="correo"></input>
            <input className="contraseña" type="password" placeholder="Escribe tu contraseña" htmlFor="contraseña"></input>
            <button className="iniciar-sesion" type="submit" onClick={onSubmit}>Iniciar Sesion</button>
        </form>
    );
}

//conmy-app\src\imagenes\logo.pngst Btn ()=> <button onClick={ ()=> alert(“Hola”) }>Enviar </button> 

export default Login;