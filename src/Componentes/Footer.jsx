import React from "react";

import Grid from "@mui/material/Grid";

import Box from "@mui/material/Box";
import { Button, ListItemText, Typography } from "@mui/material";

const footer = () => {
  return (
    <div>
      <Box display={"flex"} alignItems={"center"}>
        <Grid container spacing={2} justifyContent={"center"}>
          <Grid item md={3} sm={6} xs={12}>
            <img src="images" alt="" />
          </Grid>

          <Grid item md={3} sm={6} xs={12}>
            <Typography h4 fontSize={20} align='center'> Contacto </Typography>

              <ListItemText></ListItemText>
              <Typography  fontSize={15} align='center'> 4522-4567 </Typography>
              
              <ListItemText></ListItemText>
              <Typography  fontSize={15} align='center'> 15-4367-9050 </Typography>
              
              <ListItemText></ListItemText>
              <Typography  fontSize={15} align='center'> Avda. Santa Fe 3540 </Typography>

              <ListItemText></ListItemText>
              <Typography  fontSize={15} align='center'> burgerhouse@gmail.com  </Typography>
              
          </Grid>

          <Grid item md={3} sm={6} xs={12}>
            <Typography h4 fontSize={20} align= 'center'> Redes sociales</Typography>
            
            <ListItemText></ListItemText>
              <Typography  fontSize={15} align='center'> Facebook </Typography>
              
              <ListItemText></ListItemText>
              <Typography  fontSize={15} align='center'> Instagram </Typography>
              
              <ListItemText></ListItemText>
              <Typography  fontSize={15} align='center'> Twitter </Typography>

              <ListItemText></ListItemText>
              <Typography  fontSize={15} align='center'> Facebook Menssegger </Typography>
          
          </Grid>

          <Grid item md={3} sm={6} xs={12}>
            <Typography h4 fontSize={20} align= 'center'> Suscríbete a nuestro Newsletter</Typography>

              <Typography p fontSize={15} align='center'> Serás el primero en enterarte de nuestras novedades y
                promociones</Typography>


            <form action="" method="post" enctype="text/plain" netlify />
            <label for="email adress"></label>
            <input type="email" name="email" id="" />
            <Button variant="contained" color="inherit" size="small">
              {" "}
              Enviar
            </Button>
          </Grid>
        </Grid>
      </Box>
    </div>
  );
};

export default footer;


