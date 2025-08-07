function sortear() {
    let quantidade = parseInt(document.getElementById('quantidade').value);
    let de = parseInt(document.getElementById('de').value);
    let ate = parseInt(document.getElementById('ate').value);
    
    let sorteados = [];
    let numero;

    if (
        document.getElementById('quantidade').value == '' ||
        document.getElementById('de').value == '' ||
        document.getAnimations('ate').value == '')
        {
        alert('Preencha todos os campos primeiro!');
        return;
    } else {
        if (de >= ate) {
        alert('O número mínimo tem que ser maior que o número máximo');
        reiniciar();
        return;
    } else {
        for (let i = 0; i < quantidade; i++){
            numero = obterNumeroAleatorio(de, ate);
            sorteados.push(numero);
        }
     }    
    }

    let resultado = document.getElementById('resultado');
    resultado.innerHTML = `<label class="texto__paragrafo">Números sorteados: ${sorteados} </label>`;
    alterarStatusBotao();
    document.getElementById('btn-sortear').setAttribute('disabled', '');
    
}

function obterNumeroAleatorio(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function alterarStatusBotao() {
    let botao = document.getElementById('btn-reiniciar');
    if (botao.classList.contains('container__botao-desabilitado')) {
        botao.classList.remove('container__botao-desabilitado');
        botao.classList.add('container__botao');
        botao.removeAttribute('disabled');
    }
    else {
        if (botao.hasAttribute('disabled')) {
        botao.classList.remove('container__botao');
        botao.classList.add('container__botao-desabilitado');   
        } else {
            botao.classList.remove('container__botao');
            botao.classList.add('container__botao-desabilitado');
            botao.setAttribute('disabled', '');
        }
        
    }
}


function reiniciar () {
    quantidade.value = '';
    de.value = '';
    ate.value = '';
    resultado.value = '';
    resultado.innerHTML = `<label class="texto__paragrafo">Números sorteados:  nenhum até agora</label>`;
    alterarStatusBotao();
    document.getElementById('btn-sortear').removeAttribute('disabled');
}