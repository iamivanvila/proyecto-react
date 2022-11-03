import { Button } from '@mui/material';

const Boton = () => {

    return(
        <Button variant="contained" color="primary" size='large'
            onClick={() => { {/* redigir a seccion selecionada */} }}
        >
            ver Mas!
        </Button>
    )
}

export default Boton;