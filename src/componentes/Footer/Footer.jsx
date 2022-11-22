import React from "react";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import { Button, ListItemText, Typography } from "@mui/material";
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import PlaceIcon from '@mui/icons-material/Place';
import EmailIcon from '@mui/icons-material/Email';





const footer = () => {
  return (
    <div>
      <Box display={"flex"} alignItems={"center"}>
        <Grid container spacing={2} justifyContent={"center"}>
          <Grid item md={3} sm={6} xs={12}>
            <Box
            component="img"
            sx={{
              height: 70,
                     display: { xs: "none", md: "flex" },
                     mr: 1,
            }}>


            </Box>
          </Grid>

          <Grid item md={3} sm={6} xs={12}>
            
            <Typography h4 fontSize={20} align='center'> Contacto </Typography>

              <ListItemText/>
              <Typography  fontSize={15} align='center'> <LocalPhoneIcon/> 4522-4567 </Typography>
              
              <ListItemText/>
              <Typography  fontSize={15} align='center'> <WhatsAppIcon/> 15-4367-9050 </Typography>
              
              <ListItemText/>
              <Typography  fontSize={15} align='center'> <PlaceIcon/> Avda. Santa Fe 3540 </Typography>

              <ListItemText/>
              <Typography  fontSize={15} align='center'> <EmailIcon/> burgerhouse@gmail.com  </Typography>
              
          </Grid>

          <Grid item md={3} sm={6} xs={12}>
            <Typography h4 fontSize={20} align= 'center'> Redes sociales</Typography>
            
            <ListItemText align="center"> <FacebookIcon/></ListItemText>
            
              <ListItemText align="center"><InstagramIcon/></ListItemText>
              
              
              <ListItemText align="center"><TwitterIcon/></ListItemText>

              
          
          </Grid>

          <Grid item md={3} sm={6} xs={12}>
            <Typography h4 fontSize={20} align= 'center'> Suscríbete a nuestro Newsletter</Typography>
            <ListItemText align="center"><MailOutlineIcon/></ListItemText>

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


