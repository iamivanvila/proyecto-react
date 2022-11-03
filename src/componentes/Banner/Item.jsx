import { Paper } from '@mui/material';
import Boton  from './Boton';
import './estilos.css';

function Item({ item }) {

    return (
        <Paper>
            
            <div>
                <div className='container-carousel'>
                    <img className="imagen" src={item.image} alt={item.title} />
                    <div className="description" >
                        <h2>{item.title}</h2>
                        <Boton/>
                    </div>
                </div>
            </div>
        
        </Paper>
    )
}

export default Item;
