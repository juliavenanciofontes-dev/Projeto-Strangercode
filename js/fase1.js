// Texto inicial do editor usado pelo botão "Recomeçar código".
const codigoInicial = document.getElementById("codigo").value;




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



async function rodarCodigo() {

    const codigo = document
        .getElementById("codigo")
        .value;

    const saida = document
        .getElementById("saida");

    const mensagem = document.getElementById("mensagem");
    mensagem.className = "mensagem escondida";
    mensagem.innerHTML = "";

    const analise = analisarEstrutura(codigo);

    if (!analise.sucesso) {
        saida.innerHTML = "Erro: " + analise.erro;
        return;
    }

    const entradas = [];

    const perguntas = [
        "Informe o nome:",
        "Informe a idade:",
        "Informe quantos dias você passou fora do laboratório:"
    ];

    for (let i = 0; i < analise.encontrados.prompt; i++) {

        const resposta = window.prompt(
            perguntas[i] || "Informe sua resposta:"
        );

        entradas.push(resposta);
    }

    const resultado = await executarCodigo(codigo, entradas);

    if (resultado.sucesso) {
        saida.innerHTML = resultado.resultado;
    } else {
        saida.innerHTML = "Erro: " + resultado.erro;
    }

}




async function verificarCodigo() {

    const codigo = document
        .getElementById("codigo")
        .value;

    const analise = analisarEstrutura(codigo);

    const mensagem = document
        .getElementById("mensagem");

    mensagem.className = "mensagem escondida";
    mensagem.innerHTML = "";

    // Verifica se existe algum erro de sintaxe
    if (!analise.sucesso) {

        mensagem.className = "mensagem erro";

        mensagem.innerHTML = analise.erro;

        return;
    }

    const erros = analise.validacao.erros;



    if (erros.length > 0) {
        mensagem.className = "mensagem erro";
        mensagem.innerHTML = erros.join("<br>");
        return;
    }

    const entradasTeste = [
    "PessoaTeste",
    "23",
    "4.5"
    ];

    const resultado = await executarCodigo(
        codigo,
        entradasTeste
    );

    if (!resultado.sucesso) {
        mensagem.className = "mensagem erro";
        mensagem.innerHTML =
            "Seu código possui um erro durante a execução: " +
            resultado.erro;
        return;
    }
    
    const valoresEsperados = entradasTeste;
    const resultadoTexto = resultado.resultado;

    const todosExibidos = valoresEsperados.every(valor =>
        resultadoTexto.includes(String(valor))
    );

    if (!todosExibidos) {
        mensagem.className = "mensagem erro";
        mensagem.innerHTML =
            "Seu código executou, mas não exibiu corretamente todas as informações.";
        return;
    }

    mensagem.className = "mensagem sucesso";
    mensagem.innerHTML =
        "<strong>✓ MISSÃO CONCLUÍDA!</strong>";

    concluirFase(1);
}



