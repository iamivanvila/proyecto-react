import Swal from 'sweetalert2';
import Boton from "./Boton";


const BotonComprar = () => {

    const handlerSwal = () => {

        Swal.fire({
                title: 'Quieres agregarlo al carrito?',
                icon: 'info',
                showCancelButton: true,
                confirmButtonColor: '#3085d6',
                cancelButtonColor: '#d33',
                confirmButtonText: 'Yes',
                timer: '5000',
            }).then((result) => {
                if (result.isConfirmed) {
                    Swal.fire(
                        'Confirmado!',
                        'Se ha agregado al carrito con exito.',
                        'success',
                    )
                }
            })
    };

    return (
        <>
            <Boton click={handlerSwal} title={'comprar'} color={'success'} />
        </>
    )
}

export default BotonComprar;