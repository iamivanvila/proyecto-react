import React, { useState } from "react";
import Banner from "../componentes/Banner/Banner";
import Productos from "../componentes/Productos/Productos";
import SobreNosotros from "../componentes/SobreNosotros/SobreNosotros";

const BASE_URL = "http://localhost:3003";

const Home = () => {
   const [refetch, setRefetch] = useState(false);
   return (
      <div>
         <Banner />
         <Productos refetch={refetch} url={`${BASE_URL}/data`} />
         <SobreNosotros />
      </div>
   );
};

export default Home;
