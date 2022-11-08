
import Footer from "./componentes/Footer/Footer";
import Banner from "./componentes/Banner/Banner" 
import NavBar from "./componentes/dev-edmen/NavBar";
import SobreNosotros from "./componentes/SobreNosotros/SobreNosotros.js"


import ResponsiveAppBar from "./componentes/Navbar/ResponsiveAppBar";

function App() {
  return (
    <div className="App">

      <Footer />

      <NavBar />
      <Banner/>
      <SobreNosotros/>

    </div>
  );
}

export default App;
