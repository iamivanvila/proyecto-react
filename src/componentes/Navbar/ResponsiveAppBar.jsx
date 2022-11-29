import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import MenuItem from "@mui/material/MenuItem";
import logo from "../../images/logo.png";
import { ShoppingCart } from "@mui/icons-material";
import { Badge } from "@mui/material";
import { Link } from "react-router-dom";
import { useStateValue } from "../../StateProvider";
import CheckoutPage from "../CheckoutPage";

const pages = ["Inicio", "Nosotros", "Productos", "Contacto"];

function ResponsiveAppBar() {
   const [anchorElNav, setAnchorElNav] = React.useState(null);
   const [{ basket }, dispatch] = useStateValue();

   const handleOpenNavMenu = (event) => {
      setAnchorElNav(event.currentTarget);
   };

   const handleCloseNavMenu = () => {
      setAnchorElNav(null);
   };

   return (
      <AppBar position="sticky">
         <Container maxWidth="xl">
            <Toolbar disableGutters>
               <Box
                  component="img"
                  sx={{
                     height: 90,
                     display: { xs: "none", md: "flex" },
                     mr: 1,
                  }}
                  alt="BurguerHouse"
                  src={logo}
               />

               <Typography
                  variant="h6"
                  noWrap
                  component="a"
                  href="/"
                  sx={{
                     mr: 2,
                     display: { xs: "none", md: "flex" },
                     fontFamily: "monospace",
                     fontWeight: 700,
                     letterSpacing: ".3rem",
                     color: "inherit",
                     textDecoration: "none",
                  }}
               >
                  Burguer House
               </Typography>

               <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
                  <IconButton
                     size="large"
                     aria-label="account of current user"
                     aria-controls="menu-appbar"
                     aria-haspopup="true"
                     onClick={handleOpenNavMenu}
                     color="inherit"
                  >
                     <MenuIcon />
                  </IconButton>
                  <Menu
                     id="menu-appbar"
                     anchorEl={anchorElNav}
                     anchorOrigin={{
                        vertical: "bottom",
                        horizontal: "left",
                     }}
                     keepMounted
                     transformOrigin={{
                        vertical: "top",
                        horizontal: "left",
                     }}
                     open={Boolean(anchorElNav)}
                     onClose={handleCloseNavMenu}
                     sx={{
                        display: { xs: "block", md: "none" },
                     }}
                  >
                     {pages.map((page) => (
                        <MenuItem key={page} onClick={handleCloseNavMenu}>
                           <Typography textAlign="center">{page}</Typography>
                        </MenuItem>
                     ))}
                  </Menu>
               </Box>

               <Box
                  component="img"
                  sx={{
                     height: 70,
                     display: { xs: "flex", md: "none" },
                     mr: 1,
                  }}
                  alt="BurguerHouse"
                  src={logo}
               />
               <Typography
                  variant="h5"
                  noWrap
                  component="a"
                  href=""
                  sx={{
                     mr: 2,
                     display: { xs: "flex", md: "none" },
                     flexGrow: 1,
                     fontFamily: "monospace",
                     fontWeight: 700,
                     letterSpacing: ".3rem",
                     color: "inherit",
                     textDecoration: "none",
                  }}
               >
                  Burguer House
               </Typography>
               <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
                  {pages.map((page) => (
                     <Button
                        key={page}
                        onClick={handleCloseNavMenu}
                        sx={{ my: 2, color: "white", display: "block" }}
                     >
                        {page}
                     </Button>
                  ))}
               </Box>

               <Box sx={{ flexGrow: 0, display: "flex" }}>
                  <Typography variant="h6" color="textPrimary" component="p">
                     Hello Guest
                  </Typography>
                  <Button variant="outline">
                     <strong>Login</strong>
                  </Button>
                  <Link to="checkout">
                     <IconButton aria-label="show cart item" color="inherit">
                        <Badge badgeContent={basket?.length} color="secondary">
                           <ShoppingCart fontSize="large"></ShoppingCart>
                        </Badge>
                     </IconButton>
                  </Link>
               </Box>
            </Toolbar>
         </Container>
      </AppBar>
   );
}
export default ResponsiveAppBar;
