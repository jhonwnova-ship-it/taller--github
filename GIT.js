
let botonMillonarios = document.getElementById("millonarios");
botonMillonarios.addEventListener("click", function() {
    let mensaje = document.getElementById("mensaje_millonarios");
    mensaje.textContent = "agotado";
});

let botonSantafe = document.getElementById("santa");
botonSantafe.addEventListener("click", function() {
    let mensaje1 = document.getElementById("mensaje_santafe");
    mensaje1.textContent = "solo quedan 10 unidades";
});