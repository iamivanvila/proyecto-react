import * as React from "react";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import accounting from "accounting";
import DeleteIcon from "@mui/icons-material/Delete";
import { useStateValue } from "../StateProvider";
import { actionTypes } from "../reducer";

export default function CheckoutCard({
   product: { id, price, name, description, image },
}) {
   const [{ basket }, dispatch] = useStateValue();
   const removeItem = () =>
      dispatch({
         type: actionTypes.REMOVE_ITEM,
         id: id,
      });

   return (
      <Card sx={{ maxWidth: 345, mt: 2, ml: 5 }}>
         <CardHeader
            action={
               <Typography variant="h5" color="textSecondary">
                  {accounting.formatMoney(price)}
               </Typography>
            }
            title={name}
         />
         <CardMedia
            component="img"
            height="194"
            image={image}
            alt="BurguerHouse"
         />
         <CardContent>
            <Typography variant="body2" color="text.secondary">
               {description}
            </Typography>
         </CardContent>
         <CardActions disableSpacing>
            <IconButton>
               <DeleteIcon fontSize="large" onClick={removeItem} />
            </IconButton>
         </CardActions>
      </Card>
   );
}
