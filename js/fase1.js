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


    const writeOriginal =
        document.write;


    const logOriginal =
        console.log;


    let resultado = "";


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


        const funcao =
            new Function(codigo);


        funcao();


        saida.innerHTML =
            resultado;


    } catch (erro) {

        saida.innerHTML =
            "Erro: " +
            erro.message;

    } finally {

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


    if (!codigo.includes("let")) {

        erros.push(
            "Declare uma variável usando let."
        );

    }


    if (!codigo.includes("prompt")) {

        erros.push(
            "Use prompt()."
        );

    }


    if (!codigo.includes("parseint")) {

        erros.push(
            "Use parseInt()."
        );

    }


    if (!codigo.includes("parsefloat")) {

        erros.push(
            "Use parseFloat()."
        );

    }


    if (
        !codigo.includes(
            "document.write"
        )
    ) {

        erros.push(
            "Use document.write()."
        );

    }


    const mensagem =
        document
        .getElementById("mensagem");


    if (erros.length === 0) {

        mensagem.className =
            "mensagem sucesso";


        mensagem.innerHTML =
            "<strong>✓ MISSÃO CONCLUÍDA!</strong>";


        concluirFase();


    } else {

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


    progresso.fase1 = true;


    localStorage.setItem(
        "strangerCode",
        JSON.stringify(progresso)
    );

}