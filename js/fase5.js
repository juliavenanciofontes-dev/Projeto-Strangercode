const codigoInicial =
    document.getElementById("codigo").value;


function mostrarDica() {

    document
        .getElementById("dica")
        .classList.toggle("escondida");

}


function mostrarGabarito() {

    document
        .getElementById("gabarito")
        .classList.toggle("escondida");

}


function recomecarCodigo() {

    document
        .getElementById("codigo")
        .value = codigoInicial;


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


    try {

        document.write =
            function(texto) {

                resultado += texto;

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

    }

}


function verificarCodigo() {

    const codigo =
        document
        .getElementById("codigo")
        .value
        .toLowerCase();


    let erros = [];


    if (
        !codigo.includes("[") ||
        !codigo.includes("]")
    ) {

        erros.push(
            "Crie um vetor usando [ ]."
        );

    }


    if (!codigo.includes("push")) {

        erros.push(
            "Use push() para adicionar um item."
        );

    }


    if (!codigo.includes("for")) {

        erros.push(
            "Use for para percorrer o vetor."
        );

    }


    const mensagem =
        document
        .getElementById("mensagem");


    if (erros.length === 0) {

        mensagem.className =
            "mensagem sucesso";


        mensagem.innerHTML =
            "<strong>✓ MISSÃO CONCLUÍDA!</strong><br><br>" +
            "A mochila está pronta!";


        concluirFase();

    }

    else {

        mensagem.className =
            "mensagem erro";


        mensagem.innerHTML =
            erros.join("<br>");

    }

}


function concluirFase() {

    let progresso =
        JSON.parse(
            localStorage.getItem(
                "strangerCode"
            )
        ) || {};


    progresso.fase5 = true;


    localStorage.setItem(
        "strangerCode",
        JSON.stringify(progresso)
    );

}