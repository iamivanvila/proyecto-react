import React from 'react'
import "./SobreNosotros.css"

function SobreNosotros() { 
    return (
    <div className="sobreNos">
    <div>
        <h3 className="titulo"> BURGUER HOUSE </h3>
        <img className="imagen" src="../../../logo.jpg" alt="icono"/>
        
    </div>
    <div className="text"> 
        <p> En <strong>BURGUER HOUSE</strong> reinventamos la hamburguesa.
            Reformulamos la receta original, desarrollando hamburguesas gourmet, llenas de sabor, 
            de estilo casero, usando los mejores ingredientes frescos y naturales. Presentadas en un 
            pan casero especial de elaboración propia. Tenemos una propuesta innovadora de Pop-up 
            Stores montados en contenedores reciclados, totalmente equipados, que prometen al visitante 
            una experiencia gastronómica única, garantizando la calidad y la originalidad de nuestros 
            productos.
            <h3>Estamos en C.A.B.A y G.B.A</h3>
            Te esperamos en cualquiera de nuestras sucursales para disfrutar    
            de las mejores hamburguesas. Para Delivery podes hacer tu pedido en la web o encontranos en 
            Pedidos Ya y Rappi.
        </p>
        <button class="btn"><a href="#">HACER PEDIDO!</a>  </button>
    </div>
</div>
    )
}

export default SobreNosotros;