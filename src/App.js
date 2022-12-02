import ResponsiveAppBar from "./componentes/Navbar/ResponsiveAppBar";
import Footer from "./componentes/Footer/Footer";
import Banner from "./componentes/Banner/Banner";
import SobreNosotros from "./componentes/SobreNosotros/SobreNosotros";
// para poner el tema dark
import { ThemeProvider, createTheme } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";

import Productos from "./componentes/Productos/Productos";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import CheckoutPage from "./componentes/CheckoutPage";

const darkTheme = createTheme({
   palette: {
      mode: "dark",
   },
});

function App() {
   return (
      <ThemeProvider theme={darkTheme}>
         <CssBaseline />
         <BrowserRouter>
            <div className="App">
               <ResponsiveAppBar />
               

               <Banner />
               <CheckoutPage />
               <Productos />
               <SobreNosotros />

               <Routes>
                  <Route path="/nosotros" element={<SobreNosotros />} />
                  <Route path="/productos" element={<Productos />} />
                  <Route path="/checkout" element={<CheckoutPage />} />
               </Routes>

               <Footer />
            </div>
         </BrowserRouter>
      </ThemeProvider>
   );
}

export default App;
