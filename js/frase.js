const fraseDia = document.getElementById('fraseDia');

async function fraseDoDia() {
    const frase = await fetch('https://api.adviceslip.com/advice');
    const fraseConvertida = await frase.json();

    fraseDia.innerText = fraseConvertida.slip.advice;
}

fraseDoDia();