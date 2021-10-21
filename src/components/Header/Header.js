import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { JwtHandler } from '../../jwt-handler/JwtHandler';
import './Header.css'

export default function Header(props) {
  const [isLogged, setIsLogged] = useState(JwtHandler.isJwtValid);

  useEffect(() => {
      const handleOnJwtChange = () => {
          setIsLogged(JwtHandler.isJwtValid());
      };

      window.addEventListener("onJwtChange", handleOnJwtChange);

      // Função de limpeza
      return () => {
          window.removeEventListener("onJwtChange", handleOnJwtChange);
      };
  }, []);
    return (
      <div className="navbar">
        <div className="headerdiv">
          <Link className="nav" to="/">Home</Link>
        </div>
        <div className="headerdiv">
          <Link className="nav" to="/user" >Profiles</Link>
        </div>
        <div className="headerdiv">
          <Link className="nav" to="/game/create">CreateGame</Link>
        </div>
        <div className="headerdiv">
          <Link className="nav" to="/genre/create">CreateGenre</Link>
        </div>
        <div className="loginHeader">
        {isLogged ? (
            <Link className="logout" to="/logout">Logout</Link>
        ) : (
            <Link className="login" to="/login">Login</Link>
        )}
             
        </div>
        
      </div>
        
    )
}
