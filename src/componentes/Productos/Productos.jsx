import * as React from 'react';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import { AddShoppingCart } from '@mui/icons-material';
import accounting from "accounting"


export default function Productos() {
 
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
}


