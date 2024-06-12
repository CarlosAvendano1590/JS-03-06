document.addEventListener('DOMContentLoaded', () => {
    const digitOptions = Array.from({ length: 9 }, (_, i) => i + 1);

    const select1 = document.getElementById('digit1');
    const select2 = document.getElementById('digit2');
    const select3 = document.getElementById('digit3');

    digitOptions.forEach(number => {
        const option1 = document.createElement('option');
        const option2 = document.createElement('option');
        const option3 = document.createElement('option');

        option1.value = number;
        option1.textContent = number;
        option2.value = number;
        option2.textContent = number;
        option3.value = number;
        option3.textContent = number;

        select1.appendChild(option1);
        select2.appendChild(option2);
        select3.appendChild(option3);
    });
});

function verificarPassword() {
    const digit1 = document.getElementById('digit1').value;
    const digit2 = document.getElementById('digit2').value;
    const digit3 = document.getElementById('digit3').value;

    const password = digit1 + digit2 + digit3;
    const resultado = document.getElementById('resultado');

    if (password === '911') {
        resultado.textContent = 'password 1 correcto';
    } else if (password === '714') {
        resultado.textContent = 'password 2 correcto';
    } else {
        resultado.textContent = 'password incorrecto';
    }
}
