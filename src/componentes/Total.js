import React from "react";
import accounting from "accounting";
import { getBasketTotal } from "../reducer";
import { useStateValue } from "../StateProvider";
// import { makeStyles } from "@mui/material";

// const useStyles = makeStyles((theme) => ({
//    root: {
//       display: "flex",
//       flexDirection: "column",
//       justifyContent: "center",
//       alignItems: "center",
//       height: "20vh",
//    },
//    button: {
//       marginTop: "2rem",
//    },
// }));

const Total = () => {
   //    const classes = useStyles();
   const [{ basket }, dispatch] = useStateValue();

   return (
      <div>
         <h5>Total items : {basket?.length}</h5>

         <h5> {accounting.formatMoney(basket)} </h5>
      </div>
   );
};

export default Total;
