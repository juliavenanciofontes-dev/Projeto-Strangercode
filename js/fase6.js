
// Código inicial do desafio
const codigoInicial = `let lampada = document.getElementById("lampada");

function mudarLuz() {
    if (lampada.src.includes("apagada")) {
        lampada.src = "../assents/lampada-acesa.png";
    } else {
        lampada.src = "../assents/lampada-apagada.png";
    }
}`;


// Mostra ou esconde a dica
function mostrarDica() {
    document
        .getElementById("dica")
        .classList.toggle("escondida");
}


// Mostra ou esconde o gabarito
function mostrarGabarito() {
    document
        .getElementById("gabarito")
        .classList.toggle("escondida");
}


// Reinicia o código
function recomecarCodigo() {
    document.getElementById("codigo").value = "";

    document.getElementById("saida").innerHTML = "";

    document.getElementById("mensagem").className =
        "mensagem escondida";

    // Retorna a lâmpada ao estado inicial
    const lampada = document.getElementById("lampada");
    lampada.src = "../assents/lampada-apagada.png";
}


// Executa o código escrito pelo aluno
function rodarCodigo() {
    const codigo = document.getElementById("codigo").value;
    const saida = document.getElementById("saida");

    try {
        const executar = new Function(
            codigo + `
                return typeof mudarLuz === "function"
                    ? mudarLuz
                    : null;
            `
        );

        const mudarLuzAluno = executar();

        if (typeof mudarLuzAluno === "function") {
            window.mudarLuz = mudarLuzAluno;
            saida.innerHTML = "Código executado! Clique no botão para testar a lâmpada.";
        } else {
            saida.innerHTML = "Crie a função mudarLuz() para controlar a lâmpada.";
        }
    } catch (erro) {
        saida.innerHTML = "Erro: " + erro.message;
    }
}


// Testa o funcionamento da lâmpada
function testarLuzes() {
    const codigo = document.getElementById("codigo").value;
    const saida = document.getElementById("saida");
    const lampada = document.getElementById("lampada");

    try {
        const executar = new Function(
            codigo + `
                return typeof mudarLuz === "function"
                    ? mudarLuz
                    : null;
            `
        );

        const mudarLuzAluno = executar();

        if (typeof mudarLuzAluno !== "function") {
            saida.innerHTML = "Crie a função mudarLuz() primeiro.";
            return;
        }

        window.mudarLuz = mudarLuzAluno;

        const estadoInicial = lampada.src;

        mudarLuzAluno();

        if (lampada.src !== estadoInicial) {
            saida.innerHTML = "A lâmpada mudou de estado! Agora teste o botão.";
        } else {
            saida.innerHTML = "A lâmpada não mudou de estado. Verifique seu código.";
        }
    } catch (erro) {
        saida.innerHTML = "Erro: " + erro.message;
    }
}


// Verifica o código do aluno
function verificarCodigo() {
    const codigo = document
        .getElementById("codigo")
        .value
        .toLowerCase();

    const erros = [];

    if (!codigo.includes("getelementbyid")) {
        erros.push("Use getElementById() para localizar a lâmpada.");
    }

    if (!codigo.includes("function")) {
        erros.push("Crie uma função para mudar a lâmpada.");
    }

    if (!codigo.includes("mudarluz")) {
        erros.push("Crie uma função chamada mudarLuz().");
    }

    if (!codigo.includes("if")) {
        erros.push("Use if para verificar o estado da lâmpada.");
    }

    if (!codigo.includes("else")) {
        erros.push("Use else para alternar a lâmpada.");
    }

    if (!codigo.includes(".src")) {
        erros.push("Use .src para trocar a imagem da lâmpada.");
    }

    if (!codigo.includes("lampada-acesa.png")) {
        erros.push("Use a imagem da lâmpada acesa.");
    }

    if (!codigo.includes("lampada-apagada.png")) {
        erros.push("Use a imagem da lâmpada apagada.");
    }

    const mensagem = document.getElementById("mensagem");

    if (erros.length === 0) {
        try {
            const executar = new Function(
                codigo + `
                    return typeof mudarLuz === "function"
                        ? mudarLuz
                        : null;
                `
            );

            const mudarLuzAluno = executar();

            if (typeof mudarLuzAluno !== "function") {
                throw new Error("A função mudarLuz() não foi encontrada.");
            }

            const lampada = document.getElementById("lampada");
            const estadoInicial = lampada.src;

            mudarLuzAluno();
            const primeiroEstado = lampada.src;

            mudarLuzAluno();
            const segundoEstado = lampada.src;

            // A lâmpada precisa alternar entre dois estados
            if (
                primeiroEstado === estadoInicial ||
                segundoEstado !== estadoInicial
            ) {
                throw new Error("A lâmpada não está alternando corretamente.");
            }

            mensagem.className = "mensagem sucesso";
            mensagem.innerHTML =
                "<strong>✓ MISSÃO CONCLUÍDA!</strong><br><br>" +
                "As luzes responderam!";

            concluirFase();

        } catch (erro) {
            mensagem.className = "mensagem erro";
            mensagem.innerHTML = erro.message;
        }
    } else {
        mensagem.className = "mensagem erro";
        mensagem.innerHTML = erros.join("<br>");
    }
}
