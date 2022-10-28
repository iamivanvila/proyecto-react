const BotonVerMas = () => {
    
    const estiloBoton = {
        color: 'white',
        background: 'red',
        height:25,
        with:150, //Y?
        borderRadius: 5,
        paddingLeft: 20,
        paddingRight: 20,
        borderColor: 'black',
    }

    return(
        <>
        <button className='menuBurger' style={estiloBoton} >Ver mas</button>
        </>
    )
}

export default BotonVerMas;