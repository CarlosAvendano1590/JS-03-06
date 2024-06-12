function verificarStickers() {
    const sticker1 = parseInt(document.getElementById('cantidad1').value) || 0;
    const sticker2 = parseInt(document.getElementById('cantidad2').value) || 0;
    const sticker3 = parseInt(document.getElementById('cantidad3').value) || 0;

    const total = sticker1 + sticker2 + sticker3;

    const resultado = document.getElementById('resultado');
    if (total > 10) {
        alert('Llevas más de lo permitido');
    }else {
        if (total <= 5) {
            resultado.textContent = `Llevas ${total} stickers`;
        } else {
            resultado.textContent = 'Llevas demasiados stickers';
        }
    }
}
