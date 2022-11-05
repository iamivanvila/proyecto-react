import React from "react";
import "./NavBarStyles.css";
function NavBar (){
    return (
              
         <nav className="contenedor-NavBar">
            <img src="/logoBurguer.png"alt="FotoBruguer" height="200" width="300"/>
                   
            <div>
                <ul id="navbar">
                    <li><a href= "index.html">Inicio</a></li>
                    <li><a href= "index.html">Nosotros</a></li> 
                    <li><a href= "index.html">Productos</a></li> 
                    <li><a href= "index.html">Contactos</a></li>     
                </ul>

            </div>

         </nav>
        
        
        
    );
}

export default NavBar;