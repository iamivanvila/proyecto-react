import burger from './img/burger.png';

const Carousel = () => {
    return(
        <>

        <div className='homeBurger' style={{ backgroundImage: `url(${burger})`, 
                height:400, with:'auto', padding:20 }} >
        </div>
        
        </>
    )
}

export default Carousel;