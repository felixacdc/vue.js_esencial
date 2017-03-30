// function comprarBillete(destino, fecha) {
//     fecha = fecha || new Date();
//     console.log(destino, fecha);
// }

function fechaActual() {
    return new Date().toLocaleDateString();
}

function comprarBillete(destino, fecha = fechaActual()) {
    console.log(destino, fecha);
}

comprarBillete('valencia');