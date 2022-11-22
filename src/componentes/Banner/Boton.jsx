import { Button } from '@mui/material';

const Boton = (props) => {

    const { title, color, click } = props;
    //btn de compras
    //items.length
    //clase 4 min 34

    return (
        <Button
            onClick={click}
            variant="contained"
            color={color}
            size='large'
        >
            {title}
        </Button>
    )
}

export default Boton;

