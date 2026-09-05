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


    try {

        new Function(codigo)();


        saida.innerHTML =
            "Código executado!";

    }

    catch (erro) {

        saida.innerHTML =
            "Erro: " +
            erro.message;

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
        !codigo.includes(
            "getelementbyid"
        )
    ) {

        erros.push(
            "Use getElementById()."
        );

    }


    if (
        !codigo.includes(
            "addeventlistener"
        )
    ) {

        erros.push(
            "Use addEventListener()."
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
            "As luzes responderam!";


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


    progresso.fase6 = true;


    localStorage.setItem(
        "strangerCode",
        JSON.stringify(progresso)
    );

}