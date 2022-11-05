import Item from './Item';
import Carousel from 'react-material-ui-carousel'; 
import slider from './slider.json';


const Inicio = () => {

    return(
        <>
            <Carousel>
                {
                    slider.map( item => <Item key={item.id} item={item} /> )
                }
            </Carousel>
        </>
    )
}

export default Inicio;