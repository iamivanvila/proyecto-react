import ResponsiveAppBar from "./componentes/Navbar/ResponsiveAppBar";
import Footer from "./componentes/Footer/Footer";
import Banner from "./componentes/Banner/Banner";
import SobreNosotros from "./componentes/SobreNosotros/SobreNosotros";
// para poner el tema dark
import { ThemeProvider, createTheme } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import Productos from "./componentes/Productos/Productos";
import ProductosDos from "./componentes/Productos/ProductosDos";


const darkTheme = createTheme({
   palette: {
      mode: "dark",
   },
});

function App() {
   return (
      <ThemeProvider theme={darkTheme}>
         <CssBaseline />
         <div className="App">
            <ResponsiveAppBar />
            <Banner />
            <Productos/>
            <ProductosDos/>

            <SobreNosotros />
            <Footer />
         </div>
      </ThemeProvider>
   );
}

export default App;
