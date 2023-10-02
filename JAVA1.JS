function actualizarReloj() {
    const relojElemento = document.getElementById('reloj');
    const fechaActual = new Date();
    const hora = fechaActual.getHours();
    const minutos = fechaActual.getMinutes();
    const segundos = fechaActual.getSeconds();

    // Formatear la hora para asegurarse de que siempre tenga dos dígitos
    const horaFormateada = hora.toString().padStart(2, '0');
    const minutosFormateados = minutos.toString().padStart(2, '0');
    const segundosFormateados = segundos.toString().padStart(2, '0');

    // Actualizar el contenido del elemento con la hora actual
    relojElemento.textContent = `${horaFormateada}:${minutosFormateados}:${segundosFormateados}`;
}

// Actualizar el reloj cada segundo (1000 milisegundos)
setInterval(actualizarReloj, 1000);

// Llamar a la función para configurar el reloj en el inicio
actualizarReloj();