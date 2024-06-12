function agregarBorde() {
    var imagen = document.getElementById('imagen');
    if (imagen.style.border === '2px solid red') {
        imagen.style.border = ''; 
    } else {
        imagen.style.border = '2px solid red';
    }
}