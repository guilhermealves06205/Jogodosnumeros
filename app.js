/*let titulo = document.querySelector('h1');
titulo.innerHTML = 'JOGO DO NÚMERO SCRETO';

let paragrafo = document.querySelector('p');
paragrafo.innerHTML = 'Escolha um número entre 1 e 10.';
// Até aqui estamos manipulando as tags html.*/
let listaDeNumerosSorteados = [];
let numeroSecreto = gerarNumeroaletorio();
let tentativas = 0;
console.log(`O número secreto é ${numeroSecreto}.`);

function exibirMensagemInicial (){
    exibirTextoNaTela('h1', 'JOGO DO NÚMERO SECRETO');
    exibirTextoNaTela('p', 'Escolha um número entre 1 e 10.');
}

function exibirTextoNaTela(tag, texto) {
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;
    responsiveVoice.speak(texto, 'Portuguese Female', {rate:1.2});
}
exibirTextoNaTela('h1', 'JOGO DO NÚMERO SECRETO');
exibirTextoNaTela('p', 'Escolha um número entre 1 e 10.');
// Aqui estamos criando função para manipular as tags html.

function verificarChute() {
    let chute = document.querySelector('input').value;
    if (chute === '') {
        alert('Por favor, digite um número.');
        return;
    }
    tentativas++;
    console.log(chute == numeroSecreto);
    if (chute == numeroSecreto){
        
        let palavraTentativas = tentativas > 1 ? 'tentativas' : 'tentativa';
            exibirTextoNaTela('h1', 'ACERTOU!!');
            exibirTextoNaTela('p', `Parabéns, você acertou o número secreto em ${tentativas} ${palavraTentativas}.`);
        document.getElementById('reiniciar').removeAttribute('disabled');
        document.getElementById('chute').setAttribute('disabled', 'disabled');
}
else {
        if (chute > numeroSecreto) {
            exibirTextoNaTela('p', `O número secreto é menor que ${chute}. Tente novamente.`);
    }else {
            exibirTextoNaTela('p', `O número secreto é maior que ${chute}. Tente novamente.`);
            }
        limparCampo()
        }}
            
    
function gerarNumeroaletorio() {
    let numeroEscolhido = parseInt(Math.random() * 10 + 1);
    let quantidadeDeNumerosSorteados = listaDeNumerosSorteados.length;

    if (quantidadeDeNumerosSorteados === 10) {
        listaDeNumerosSorteados = [];
    }

    if (listaDeNumerosSorteados.includes(numeroEscolhido)) {
        return gerarNumeroaletorio();
    } else {
        listaDeNumerosSorteados.push(numeroEscolhido);
        return numeroEscolhido;
    }
}

function limparCampo() {
    chute = document.querySelector('input').value = '';
}

function reiniciarJogo() {
    numeroSecreto = gerarNumeroaletorio();
    limparCampo();
    tentativas = 0
    console.log(`O número secreto é ${numeroSecreto}.`);
    exibirTextoNaTela('h1', 'JOGO DO NÚMERO SECRETO');
    exibirTextoNaTela('p', 'Escolha um número entre 1 e 10.');
    document.getElementById('reiniciar').setAttribute('disabled', true);
    document.getElementById('chute').removeAttribute('disabled');
}

