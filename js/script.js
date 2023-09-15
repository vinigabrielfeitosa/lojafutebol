
// USADO PARA TROCAR AS IMAGEMS DO PRODUTO, QUEM COMPRAR PODE VER A FRENTE, COSTA E LADOS DA CAMISA
const imagensSecundarias = document.querySelectorAll('.clickable');

imagensSecundarias.forEach(function(imagemSecundaria) {
    // FUNÇÃO CLICK PARA ADICIONAR UM EVENTO
  imagemSecundaria.addEventListener('click', function() {
    const imagemPrincipal = document.getElementById('imgpdt');
    // TROCAR A PRINCIPAL PELA OUTRA IMAGEM SELECIONADA
    imagemPrincipal.src = imagemSecundaria.src;
  });
});

// seleciona todos os botões de tamanho
const botoesTamanho = document.querySelectorAll('.botaotam');

// adiciona um event listener para cada botão de tamanho
botoesTamanho.forEach(botao => {
  botao.addEventListener('click', () => {
    // remove a classe "selecionado" de todos os botões de tamanho
    botoesTamanho.forEach(botao => {
      botao.classList.remove('selecionado');
    });

    // adiciona a classe "selecionado" ao botão de tamanho que foi clicado
    botao.classList.add('selecionado');

  });
});

//CONVERSOR DE DOLAR PARA REAL
fetch (`http://economia.awesomeapi.com.br/json/last/USD-BRL`).then(resposta => {
    return resposta.json()
}).then(economia => {

    var dolar = Number(economia.USDBRL.bid);

    var valorDolar = document.getElementsByClassName('valorDolar');

    for(let x = 0; x < valorDolar.length; x++){
      var valorReal = Number(valorDolar[x].innerHTML)
      var calculo = valorReal * dolar;

      let precoTotal = document.getElementsByClassName('valorReal')[x].innerHTML = `${calculo.toFixed(2).replace('.', ',')}`;
    }
  
})

const btnMobile = document.getElementById('btn-mobile');

function toggleMenu(event) {
  if (event.type === 'touchstart') event.preventDefault();
  const nav = document.getElementById('nav');
  nav.classList.toggle('active');
  const active = nav.classList.contains('active');
  event.currentTarget.setAttribute('aria-expanded', active);
  if (active) {
    event.currentTarget.setAttribute('aria-label', 'Fechar Menu');
  } else {
    event.currentTarget.setAttribute('aria-label', 'Abrir Menu');
  }
}

btnMobile.addEventListener('click', toggleMenu);
btnMobile.addEventListener('touchstart', toggleMenu);