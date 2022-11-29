import React from "react";
import accounting from "accounting";
import { getBasketTotal } from "../reducer";
import { useStateValue } from "../StateProvider";
import { Button, Stack, Typography } from "@mui/material";

const Total = () => {
   const [{ basket }, dispatch] = useStateValue();

   return (
      <div>
         <Typography variant="h4" sx={{ mt: 5, ml: 5 }}>
            Total Items : {basket?.length}
            {console.log(getBasketTotal(basket))}
            <br />
            {accounting.formatMoney(getBasketTotal(basket))}
         </Typography>
         <Stack>
            <Button size="large">Pagar</Button>
         </Stack>
      </div>
   );
};

export default Total;
