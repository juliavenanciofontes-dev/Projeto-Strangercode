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


        new Function(codigo)();


        saida.innerHTML =
            resultado ||
            "A batalha começou!";

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


    const requisitos = [

        "prompt",
        "parseint",
        "if",
        "else",
        "function",
        "return",
        "while",
        "for",
        "[",
        "]",
        "getelementbyid",
        "addeventlistener"

    ];


    requisitos.forEach(
        function(requisito) {

            if (
                !codigo.includes(
                    requisito
                )
            ) {

                erros.push(
                    "Está faltando: " +
                    requisito
                );

            }

        }
    );


    const mensagem =
        document
        .getElementById("mensagem");


    if (erros.length === 0) {

        mensagem.className =
            "mensagem sucesso";


        mensagem.innerHTML =
            "<strong>⚔ VECNA FOI DERROTADO!</strong>" +
            "<br><br>" +
            "Você completou o Stranger Code!";


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


    progresso.fase7 = true;


    localStorage.setItem(
        "strangerCode",
        JSON.stringify(progresso)
    );

}