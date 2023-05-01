const minhaImagem = document.querySelector('#minha-imagem');

setInterval(() => {
    if (minhaImagem.style.opacity === '0') {
        minhaImagem.style.opacity = '1';
    } else {
        minhaImagem.style.opacity = '0';
    }
}, 2000);
