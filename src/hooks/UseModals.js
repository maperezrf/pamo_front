import Swal from 'sweetalert2';

export const ModalMeli = () => {
    const onSubmit = (data) => {
        Swal.fire({
            title: 'Formulario enviado!',
            text: `Nombre: ${data.name}, Email: ${data.email}`,
            icon: 'success',
            confirmButtonText: 'OK'
        });
    };

    return {
        onSubmit
    }
}
