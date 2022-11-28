import * as React from "react";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import Producto from "./Producto";
import productosData from "./productosData";

const Item = styled(Paper)(({ theme }) => ({
   backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
   ...theme.typography.body2,
   padding: theme.spacing(2),
   textAlign: "center",
   color: theme.palette.text.secondary,
}));

<<<<<<< HEAD
export default function Productos() {
   return (
      <Box sx={{ flexGrow: 1 }}>
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
=======
export default function Productos(productos) {
 
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardHeader
         
        title="CHEESE BURGER"
        subheader= {accounting.formatMoney (1200, "$")}
      />
      <CardMedia
        component="img"
        height="194"
        image="/static/images/cards/paella.jpg"
        alt="Paella dish"
      />
      <CardContent>
        <Typography variant="body2" color="text.secondary">
          Harburguesa de carne vacuna con doble queso cheddar.
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton aria-label="Add to Cart">
          <AddShoppingCart />
        </IconButton>

  
      </CardActions>

        <CardContent>
 
        </CardContent>
    
    </Card>
  );
>>>>>>> main
}
