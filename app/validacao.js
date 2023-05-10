function verificaSeNumero(chute) {
    const numero = +chute;

    if (chuteInvalido(numero)) {
        elementoChute.innerHTML += '<div>Não é um número Válido!!</div>';
        return
    }

    if (numeroMaiorOuMenor(numero)){
        elementoChute.innerHTML += `<div>O número ${numero} está fora dos limites permitidos!! Escolha um número entre ${menorValor} e ${maiorValor}</div>`;
        return
    }

    if (numero === numeroSecreto) {
        document.body.innerHTML = `
            <h2>Parabéns, você acertou!!!</h2>
            <h3>O número secreto era ${numero}!</h3>

            <button id="jogar-novamente" class="btn-jogar">Jogar Novamente</button>
        `
    } else if (numero < numeroSecreto) {
        elementoChute.innerHTML += `
        <div>O número secreto é maior <i class="fa-solid fa-arrow-up"></i></div>
        `
    } else {
        elementoChute.innerHTML += `
        <div>O número secreto é menor <i class="fa-solid fa-arrow-down"></i></div>
        `
    }
}

function numeroMaiorOuMenor(numero) {
    return numero > maiorValor || numero < menorValor;
}

function chuteInvalido(numero) {
    return Number.isNaN(numero);
}

document.body.addEventListener('click', e => {
    if (e.target.id == 'jogar-novamente') {
        window.location.reload();
    }
})