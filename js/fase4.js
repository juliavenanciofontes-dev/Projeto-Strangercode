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


    const logOriginal =
        console.log;


    try {

        document.write =
            function(texto) {

                resultado += texto;

            };


        console.log =
            function(...dados) {

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

    const codigo =
        document
        .getElementById("codigo")
        .value
        .toLowerCase();


    let erros = [];


    if (!codigo.includes("while")) {

        erros.push(
            "Use um loop while."
        );

    }


    if (!codigo.includes("for")) {

        erros.push(
            "Use um loop for."
        );

    }


    if (
        !codigo.includes("vida")
    ) {

        erros.push(
            "Crie uma variável de vida."
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
            "O Demogorgon foi derrotado!";


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


    progresso.fase4 = true;


    localStorage.setItem(
        "strangerCode",
        JSON.stringify(progresso)
    );

}