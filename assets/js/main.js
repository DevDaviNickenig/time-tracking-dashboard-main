let data = [
    {
        "title": "Work",
        "timeframes": {
            "daily": {
                "current": 5,
                "previous": 7
            },
            "weekly": {
                "current": 32,
                "previous": 36
            },
            "monthly": {
                "current": 103,
                "previous": 128
            }
        }
    },
    {
        "title": "Play",
        "timeframes": {
            "daily": {
                "current": 1,
                "previous": 2
            },
            "weekly": {
                "current": 10,
                "previous": 8
            },
            "monthly": {
                "current": 23,
                "previous": 29
            }
        }
    },
    {
        "title": "Study",
        "timeframes": {
            "daily": {
                "current": 0,
                "previous": 1
            },
            "weekly": {
                "current": 4,
                "previous": 7
            },
            "monthly": {
                "current": 13,
                "previous": 19
            }
        }
    },
    {
        "title": "Exercise",
        "timeframes": {
            "daily": {
                "current": 1,
                "previous": 1
            },
            "weekly": {
                "current": 4,
                "previous": 5
            },
            "monthly": {
                "current": 11,
                "previous": 18
            }
        }
    },
    {
        "title": "Social",
        "timeframes": {
            "daily": {
                "current": 1,
                "previous": 3
            },
            "weekly": {
                "current": 5,
                "previous": 10
            },
            "monthly": {
                "current": 21,
                "previous": 23
            }
        }
    },
    {
        "title": "Self Care",
        "timeframes": {
            "daily": {
                "current": 0,
                "previous": 1
            },
            "weekly": {
                "current": 2,
                "previous": 2
            },
            "monthly": {
                "current": 7,
                "previous": 11
            }
        }
    }
]

const botoes = document.querySelectorAll('.rastreador-atividade__opcoes-botoes');
console.log(botoes);

const ativarBotaoClicado = (botao) => {
    botoes.forEach(b => b.classList.remove('active'))
    botao.classList.add('active')
    // console.log(ativarBotaoClicado);
}



const trocarInformacoes = (botaoClicado) => {

    const calcHoras = (opcao) => {
        if (opcao === 'daily') {
            return 'Yesterday'
        } else if (opcao === 'weekly') {
            return 'Last Week'
        } else if (opcao === 'monthly') {
            return 'Last Month'
        }
    }

    data.forEach(atividade => {
        const nome = atividade.title
        const horas = atividade.timeframes[botaoClicado]
        const janela = calcHoras(botaoClicado)
        const classeAtiva = nome.toLowerCase()
        const section = document.createElement('section')
        section.classList.add('rastreador-atividade__card', classeAtiva)
    })
}


botoes.forEach(botao => {
    botao.addEventListener('click', () => {
        ativarBotaoClicado(botao)
        const botaoClicado = botao.dataset.option
        trocarInformacoes(botaoClicado)
    })
})







