
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


function testarLuzes() {

    try {

        const codigo =
            document
            .getElementById("codigo")
            .value;


        const executar =
            new Function(
                codigo +
                `
                return typeof mudarLuz === "function"
                    ? mudarLuz
                    : null;
                `
            );


        const mudarLuzAluno =
            executar();


        if (
            typeof mudarLuzAluno ===
            "function"
        ) {

            window.mudarLuz =
                mudarLuzAluno;

            mudarLuz();

            document
                .getElementById("saida")
                .innerHTML =
                "Lâmpada alterada!";

        }

        else {

            document
                .getElementById("saida")
                .innerHTML =
                "Crie a função mudarLuz().";

        }

    }

    catch (erro) {

        document
            .getElementById("saida")
            .innerHTML =
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
            "function"
        )
    ) {

        erros.push(
            "Crie uma função para mudar a lâmpada."
        );

    }


    if (
        !codigo.includes(
            "mudarluz"
        )
    ) {

        erros.push(
            "Crie uma função chamada mudarLuz()."
        );

    }


    if (
        !codigo.includes(
            "if"
        )
    ) {

        erros.push(
            "Use if para verificar o estado da lâmpada."
        );

    }


    if (
        !codigo.includes(
            "else"
        )
    ) {

        erros.push(
            "Use else para alternar a lâmpada."
        );

    }


    if (
        !codigo.includes(
            ".src"
        )
    ) {

        erros.push(
            "Use .src para trocar a imagem da lâmpada."
        );

    }


    if (
        !codigo.includes(
            "lampada-acesa.png"
        )
    ) {

        erros.push(
            "Use a imagem da lâmpada acesa."
        );

    }


    if (
        !codigo.includes(
            "lampada-apagada.png"
        )
    ) {

        erros.push(
            "Use a imagem da lâmpada apagada."
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