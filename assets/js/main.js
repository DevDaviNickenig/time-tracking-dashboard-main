fetch('../../data.json')
    .then(response => response.json())
    .then(data => clockData(data));

function clockData(data) {
    console.log(data);
}

const botoes = document.querySelectorAll('.rastreador-atividade__opcoes-botoes');
console.log(botoes);

const ativarBotaoClicado = (botao) => {
    botoes.forEach(b => b.classList.remove('active'))
    botao.classList.add('active')
    console.log(ativarBotaoClicado);
}


botoes.forEach(botao => {
    botao.addEventListener('click', () => {
        ativarBotaoClicado(botao)
        const botaoClicado = botao.dataset.option
        // trocarInformacoes(botaoClicado)
    })
})







