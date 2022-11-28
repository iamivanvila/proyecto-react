import { Paper } from '@mui/material';
import Boton from './Boton';
import './estilos.css';

function Item({ item }) {

    return (
        <Paper>

            <div>
                <div className='container-carousel'>
                    <img className="imagenCarrousel" src={item.image} alt={item.title} />
                    <div className="description" >
                        <h2>{item.title}</h2>
                        <Boton title={'Ver mas'} color={'primary'} />
                    </div>
                </div>
            </div>

        </Paper>
    )
}

export default Item;
