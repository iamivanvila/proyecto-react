import ResponsiveAppBar from "./componentes/Navbar/ResponsiveAppBar";
import Footer from "./componentes/Footer/Footer";
import Banner from "./componentes/Banner/Banner";
import SobreNosotros from "./componentes/SobreNosotros/SobreNosotros";
// para poner el tema dark
import { ThemeProvider, createTheme } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";

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
            <SobreNosotros />
            <Footer />
         </div>
      </ThemeProvider>
   );
}

export default App;
