const codigoInicial =
    document
    .getElementById("codigo")
    .value;


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


    if (!codigo.includes("prompt")) {

        erros.push(
            "Use prompt() para perguntar o nível."
        );

    }


    if (!codigo.includes("parseint")) {

        erros.push(
            "Use parseInt() para transformar o valor em número."
        );

    }


    if (!codigo.includes("if")) {

        erros.push(
            "Use uma estrutura if."
        );

    }


    if (!codigo.includes("else")) {

        erros.push(
            "Use else para a segunda possibilidade."
        );

    }


    if (
        !codigo.includes(
            "document.write"
        )
    ) {

        erros.push(
            "Use document.write() para mostrar o resultado."
        );

    }


    const mensagem =
        document
        .getElementById("mensagem");


    if (erros.length === 0) {

        mensagem.className =
            "mensagem sucesso";


        mensagem.innerHTML =
            "<strong>✓ MISSÃO CONCLUÍDA!</strong>" +
            "<br><br>" +
            "A porta do laboratório foi aberta!";


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


    progresso.fase2 = true;


    localStorage.setItem(
        "strangerCode",
        JSON.stringify(progresso)
    );

}