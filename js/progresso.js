function voltarMenu() {

    window.location.href =
        "../index.html";

}


function concluirFase(numero) {

    let fasesConcluidas =
        JSON.parse(
            localStorage.getItem(
                "fasesConcluidas"
            )
        ) || [];


    if (
        !fasesConcluidas.includes(numero)
    ) {

        fasesConcluidas.push(numero);

    }


    localStorage.setItem(

        "fasesConcluidas",

        JSON.stringify(
            fasesConcluidas
        )

    );

}


function irParaProxima(numero) {

    concluirFase(numero);


    if (numero < 6) {

        window.location.href =
            "fase" +
            (numero + 1) +
            ".html";

    }

    else {

        window.location.href =
            "boss.html";

    }

}


function faseAnterior(numero) {

    if (numero === 1) {

        voltarMenu();

    }

    else {

        window.location.href =
            "fase" +
            (numero - 1) +
            ".html";

    }

}