window.onload = function () {

    const btn = document.querySelector('#btn');
    const divJanela = document.querySelector('#div-janela');

    btn.addEventListener('click', () => {
        if (divJanela.className == 'abrir') {
            divJanela.className = 'fechar';
            btn.innerHTML = `Abrir Janela`;
        } else {
            divJanela.className == 'fechar';
            divJanela.className = 'abrir';
            btn.innerHTML = `Fechar Janela`;
        }

    });


}