import React from "react";
import Banner from "../componentes/Banner/Banner";
import Productos from "../componentes/Productos/Productos";
import SobreNosotros from "../componentes/SobreNosotros/SobreNosotros";

const Home = () => {
   return (
      <div>
         <Banner />
         <Productos />
         <SobreNosotros />
      </div>
   );
};

export default Home;
