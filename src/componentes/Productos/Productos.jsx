import * as React from "react";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import Producto from "./Producto";
import productosData from "./productosData";
import { Typography } from "@mui/material";

const Item = styled(Paper)(({ theme }) => ({
   backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
   ...theme.typography.body2,
   padding: theme.spacing(2),
   textAlign: "center",
   color: theme.palette.text.secondary,
}));

export default function Productos() {
   return (
      <Box sx={{ flexGrow: 1 }}>
         <Typography align="center" variant="h4">
            Productos
         </Typography>
         <Grid container spacing={2} columns={12}>
            {productosData.map((product) => (
               <Grid item xs={12} sm={6} md={4} lg={3}>
                  <Item>
                     <Producto key={product.id} product={product} />
                  </Item>
               </Grid>
            ))}
         </Grid>
      </Box>
   );
}
