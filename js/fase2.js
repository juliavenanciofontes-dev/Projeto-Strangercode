


function mostrarDica() {

    document
        .getElementById("dica")
        .classList.toggle(
            "escondida"
        );

}


function mostrarGabarito() {

    document
        .getElementById("gabarito")
        .classList.toggle(
            "escondida"
        );

}


function recomecarCodigo() {

    document
        .getElementById("codigo")
        .value =
        codigoInicial;


    document
        .getElementById("saida")
        .innerHTML = "";


    document
        .getElementById("mensagem")
        .className =
        "mensagem escondida";

}


function rodarCodigo() {

    const codigo =
        document
            .getElementById("codigo")
            .value;


    const saida =
        document
            .getElementById("saida");


    let resultado = "";


    const writeOriginal =
        document.write;


    const logOriginal =
        console.log;


    try {

        document.write =
            function (texto) {

                resultado += texto;

            };


        console.log =
            function (...dados) {

                resultado +=
                    dados.join(" ") +
                    "<br>";

            };


        new Function(codigo)();


        saida.innerHTML =
            resultado ||
            "Código executado sem saída.";

    }

    catch (erro) {

        saida.innerHTML =
            "Erro: " +
            erro.message;

    }

    finally {

        document.write =
            writeOriginal;


        console.log =
            logOriginal;

    }

}



function verificarCodigo() {

    const codigo = document
        .getElementById("codigo")
        .value;

    const mensagem = document
        .getElementById("mensagem");

    // 1. Remover comentários do código
    const codigoLimpo = codigo
        .replace(/\/\*[\s\S]*?\*\//g, "")
        .replace(/\/\/.*$/gm, "")
        .toLowerCase();

    let erros = [];

    // 2. Verificar os comandos necessários
    if (!/\bprompt\s*\(/.test(codigoLimpo)) {
        erros.push("Use prompt() para perguntar a senha.");
    }

    if (!/\bif\s*\(/.test(codigoLimpo)) {
        erros.push("Use uma estrutura if.");
    }

    if (!/\belse\b/.test(codigoLimpo)) {
        erros.push("Use else para a senha incorreta.");
    }

    if (!/\bdocument\s*\.\s*write\s*\(/.test(codigoLimpo)) {
        erros.push("Use document.write() para mostrar o resultado.");
    }

    // 3. Verificar se o código possui erros de sintaxe
    if (erros.length === 0) {

        try {
            new Function(codigo);

        } catch (erro) {
            erros.push("Seu código possui um erro de sintaxe.");
        }
    }

    // 4. Mostrar o resultado da verificação
    if (erros.length === 0) {

        mensagem.className = "mensagem sucesso";

        mensagem.innerHTML =
            "<strong>✓ MISSÃO CONCLUÍDA!</strong>" +
            "<br><br>" +
            "A porta do laboratório foi aberta!";

        concluirFase();

    } else {

        mensagem.className = "mensagem erro";

        mensagem.innerHTML = erros.join("<br>");
    }
}


