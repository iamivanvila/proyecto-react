import ResponsiveAppBar from "./componentes/Navbar/ResponsiveAppBar";
import Footer from "./componentes/Footer/Footer";

// para poner el tema dark
import { ThemeProvider, createTheme } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";

import { Route, Routes } from "react-router-dom";
import CheckoutPage from "./componentes/CheckoutPage";
import Home from "./pages/Home";
import SignIn from "./componentes/Signin";

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
            <Routes>
               <Route path="/" element={<Home />} />
               <Route path="signin" element={<SignIn />} />
               <Route path="checkout" element={<CheckoutPage />} />
            </Routes>
            <Footer />
         </div>
      </ThemeProvider>
   );
}

export default App;
