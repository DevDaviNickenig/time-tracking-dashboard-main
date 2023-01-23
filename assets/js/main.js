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

botoes.forEach(botao => {
    botao.addEventListener('click', () => {
        ativarBotaoClicado(botao)
        const botaoClicado = botao.dataset.option
        trocarInformacoes(botaoClicado)
    })
})

const carregarPagina = () => {
    botoes[1].click()
}



const trocarInformacoes = (botaoClicado) => {
    AtualizarCards()

    const calcHoras = (opcao) => {
        if (opcao === 'daily') {
            return 'Yesterday'
        } else if (opcao === 'weekly') {
            return 'Last Week'
        } else if (opcao === 'monthly') {
            return 'Last Month'
        }
    }

    const rastreadorAtividade = document.querySelector('section.rastreador-atividade')

    data.forEach(atividade => {
        const nome = atividade.title.replace(' ', '')
        const horas = atividade.timeframes[botaoClicado]
        const janela = calcHoras(botaoClicado)
        const classeAtiva = nome.toLowerCase().replace(' ', '');
        const section = document.createElement('section')
        section.classList.add('rastreador-atividade__card', classeAtiva)
        const cards = `
        <div class="rastreador-fundo">
          <img src="assets/images/icon-${classeAtiva}.svg" alt="ícone maleta" />
        </div>
        <article class="atividade-informacoes">
          <div class="atividade-topo">
            <h2 class="atividade-nome">${nome}</h2>
            <div class="atividade-opcoes">
              <svg width="21" height="5" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M2.5 0a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5Zm8 0a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5Zm8 0a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5Z"
                  fill="#BBC0FF"
                  fill-rule="evenodd"
                />
              </svg>
            </div>
          </div>
          <div class="atividade-tempo">
            <h3 class="atividade-tempo__atual">${horas.current}hrs</h3>
            <div class="atividade-tempo__passado">
              <p class="atividade-tempo__passado-texto">${janela}</p>
              <p>&nbsp;-&nbsp;</p>
              <p class="tempo passado">${horas.previous}hrs</p>
            </div>
          </div>
        </article>
        `
        section.innerHTML = cards
        // console.log(section)
        rastreadorAtividade.append(section)
    })
}

function AtualizarCards() {
    const atualizar = document.querySelectorAll('.rastreador-atividade__card')
    atualizar.forEach(a => a.remove())
}

carregarPagina()








