// ============================================================
// STRANGER CODE
// ============================================================


// ============================================================
// PROGRESSO DO JOGADOR
// ============================================================

let progresso =
    JSON.parse(localStorage.getItem("strangerCode")) ||
    {
        fase1: false,
        fase2: false,
        fase3: false,
        fase4: false,
        fase5: false,
        fase6: false,
        fase7: false
    };


// ============================================================
// FASE ATUAL
// ============================================================

let faseAtual = 1;


// ============================================================
// DADOS DAS FASES
// ============================================================

const fases = {

    // ========================================================
    // FASE 1
    // ========================================================

    1: {

        numero: "CAPÍTULO UM",

        titulo: "A Ficha de Onze",

        historia: `
            Hawkins, 1983.

            Onze acabou de escapar do Laboratório Nacional.

            Para entrar na turma do Mike, ela precisa
            de uma ficha de identidade.

            Monte a ficha pedindo os dados e mostrando
            tudo na tela.
        `,

        tarefas: [

            "Pergunte o nome usando prompt().",

            "Pergunte a idade e transforme em número usando parseInt().",

            "Pergunte quantos waffles ela comeu usando parseFloat().",

            "Mostre as informações usando document.write()."

        ],

        dica: `
            Você pode começar assim:

            let nome = prompt("Qual o nome?");

            Para transformar uma resposta em inteiro:

            let idade = parseInt(
                prompt("Qual a idade?")
            );

            Para números decimais:

            parseFloat()
        `,

        gabarito: `
            let nome = prompt("Qual o nome?");

            let idade = parseInt(
                prompt("Qual a idade?")
            );

            let waffles = parseFloat(
                prompt("Quantos waffles?")
            );

            document.write("Nome: " + nome);
            document.write("<br>Idade: " + idade);
            document.write("<br>Waffles: " + waffles);
        `,

        codigo: `//Faça o que se pede no exercicio`

    },


    // ========================================================
    // FASE 2
    // ========================================================

    2: {

        numero: "CAPÍTULO DOIS",

        titulo: "A Porta do Laboratório",

        historia: `
            O grupo chegou ao Laboratório Nacional.

            Existe uma porta bloqueando o caminho.

            Para passar, é necessário descobrir
            se o jogador possui a senha correta.
        `,

        tarefas: [

            "Pergunte a senha usando prompt().",

            "Use if para verificar a senha.",

            "Use else caso a senha esteja errada.",

            "Mostre uma mensagem para o jogador."

        ],

        dica: `
            A estrutura básica é:

            if (condicao) {

                // código

            } else {

                // código

            }

            Você pode usar == para comparar
            duas informações.
        `,

        gabarito: `
            let senha =
                prompt("Qual é a senha?");

            if (senha == "011") {

                document.write(
                    "A porta abriu!"
                );

            } else {

                document.write(
                    "Senha incorreta!"
                );

            }
        `,

        codigo: `//Faça o que se pede no exercicio
`

    },


    // ========================================================
    // FASE 3
    // ========================================================

    3: {

        numero: "CAPÍTULO TRÊS",

        titulo: "O Cálculo do Dano",

        historia: `
            Um Demogorgon apareceu.

            O grupo precisa descobrir quanto dano
            cada ataque consegue causar.

            Para isso, você deverá criar uma função
            capaz de calcular o dano.
        `,

        tarefas: [

            "Crie uma função chamada calcularDano().",

            "Faça a função receber força e arma.",

            "Use if e else para decidir o resultado.",

            "Use return para devolver o dano.",

            "Chame a função e mostre o resultado."

        ],

        dica: `
            Uma função pode receber informações:

            function calcularDano(forca, arma) {

                let dano = forca * arma;

                return dano;

            }

            O return devolve o resultado
            da função.
        `,

        gabarito: `
            function calcularDano(forca, arma) {

                let dano;

                if (forca > 5) {

                    dano = forca * arma;

                } else {

                    dano = forca + arma;

                }

                return dano;
            }

            let resultado =
                calcularDano(10, 2);

            document.write(
                "Dano: " + resultado
            );
        `,

        codigo: `//Faça o que se pede no exercicio
`

    },


    // ========================================================
    // FASE 4
    // ========================================================

    4: {

        numero: "CAPÍTULO QUATRO",

        titulo: "Batalha por Turnos",

        historia: `
            O Demogorgon está atacando!

            A batalha acontece em turnos.

            Você precisa programar uma sequência
            de ataques até que o inimigo seja derrotado.
        `,

        tarefas: [

            "Crie uma variável para a vida do inimigo.",

            "Use while para controlar a batalha.",

            "Diminua a vida do inimigo a cada ataque.",

            "Use for para realizar uma sequência de ataques.",

            "Mostre o resultado de cada turno."

        ],

        dica: `
            O while pode continuar enquanto
            a vida for maior que zero:

            while (vida > 0) {

                vida = vida - dano;

            }

            Um for pode repetir uma ação
            várias vezes.
        `,

        gabarito: `
            let vida = 100;
            let dano = 20;

            while (vida > 0) {

                vida = vida - dano;

                document.write(
                    "Vida: " + vida + "<br>"
                );

            }

            for (
                let i = 0;
                i < 3;
                i++
            ) {

                document.write(
                    "Ataque realizado!<br>"
                );

            }
        `,

        codigo: `//Faça o que se pede no exercicio
`

    },


    // ========================================================
    // FASE 5
    // ========================================================

    5: {

        numero: "CAPÍTULO CINCO",

        titulo: "A Mochila do Dustin",

        historia: `
            Dustin está preparando sua mochila
            para uma nova aventura.

            Ele precisa organizar todos os itens
            que serão levados para a missão.
        `,

        tarefas: [

            "Crie um vetor chamado mochila.",

            "Coloque alguns itens dentro dele.",

            "Adicione um novo item usando push().",

            "Use for para percorrer o vetor.",

            "Mostre os itens da mochila."

        ],

        dica: `
            Um vetor pode ser criado assim:

            let mochila = [
                "lanterna",
                "comida",
                "walkie-talkie"
            ];

            Para adicionar:

            mochila.push("bússola");

            Para percorrer:

            for (let i = 0; i < mochila.length; i++) {

                // código

            }
        `,

        gabarito: `
            let mochila = [
                "lanterna",
                "comida",
                "walkie-talkie"
            ];

            mochila.push("bússola");

            for (
                let i = 0;
                i < mochila.length;
                i++
            ) {

                document.write(
                    mochila[i] + "<br>"
                );

            }
        `,

        codigo: `//Faça o que se pede no exercicio
`

    },


    // ========================================================
    // FASE 6
    // ========================================================

   6: {
    numero: "CAPÍTULO SEIS",
    titulo: "As Luzes da Joyce",

    historia: `
        Joyce descobriu que as luzes de Natal
        podem ser usadas para se comunicar
        com Will.

        Agora você precisa programar
        a lâmpada usando JavaScript.

        A cada clique no botão, a lâmpada
        deve trocar entre acesa e apagada.
    `,

    tarefas: [
        "Encontre a lâmpada usando getElementById().",
        "Crie uma função para mudar o estado da lâmpada.",
        "Use onclick no botão para chamar a função.",
        "Use if e else para verificar o estado da lâmpada.",
        "Troque a imagem usando .src."
    ],

    dica: `
        let lampada =
            document.getElementById("lampada");

        function mudarLuz() {

            if (...) {

                // troque para a imagem acesa

            } else {

                // troque para a imagem apagada

            }
        }

        O botão deve chamar a função usando onclick.
    `,

    gabarito: `
        let lampada =
            document.getElementById("lampada");

        function mudarLuz() {

            if (lampada.src.includes("apagada")) {

                lampada.src = "assents/lampada-acesa.png";

            } else {

                lampada.src = "assents/lampada-apagada.png";

            }
        }
    `,

    codigo: `//Faça o que se pede no exercicio
`
},


    // ========================================================
    // BOSS
    // ========================================================

    7: {

        numero: "⚠ BATALHA FINAL",

        titulo: "Vecna e o Mundo Invertido",

        historia: `
            Você chegou ao coração do Mundo Invertido.

            Vecna está diante de você e o portal
            está prestes a ser aberto.

            Para derrotá-lo, você precisará construir
            seu próprio sistema de batalha utilizando
            os conhecimentos aprendidos durante
            os capítulos anteriores.
        `,

        tarefas: [

            "Crie no HTML um campo input para o jogador informar a força do ataque.",

            "Crie um button para realizar o ataque.",

            "Crie um elemento <p> para mostrar as informações da batalha.",

            "Use document.getElementById() para acessar os elementos HTML.",

            "Use .value para pegar o valor digitado no input.",

            "Converta o valor recebido para número.",

            "Crie uma função que receba a força do ataque e use return para devolver o dano.",

            "Use if e else para verificar o estado da batalha.",

            "Crie um vetor para armazenar os danos dos ataques.",

            "Use push() para adicionar cada ataque ao vetor.",

            "Use for ou while para percorrer o vetor.",

            "Use innerText ou innerHTML para atualizar informações na página.",

            "Use addEventListener() para detectar o clique no botão.",

            "Faça a vida de Vecna diminuir a cada ataque.",

            "Quando a vida chegar a zero, mostre uma mensagem informando que Vecna foi derrotado."

        ],

        dica: `
            Comece pelo HTML!

            Pense em três elementos principais:

            1. Um input para o jogador digitar
               a força do ataque.

            2. Um button para realizar o ataque.

            3. Um elemento <p> para mostrar
               o resultado da batalha.


            Depois, no JavaScript:

            • Use document.getElementById()
              para encontrar os elementos.

            • Use .value para pegar o que
              foi digitado.

            • Converta esse valor para número.

            • Crie uma função para calcular
              o dano e use return.

            • Diminua a vida de Vecna.

            • Use if e else para verificar
              se Vecna ainda está vivo.

            • Crie um vetor para guardar
              os danos dos ataques.

            • Use push() para registrar
              cada ataque.

            • Use for ou while para percorrer
              o vetor.

            • Use innerText ou innerHTML
              para atualizar a página.

            • Use addEventListener()
              para detectar o clique.

            IMPORTANTE:

            Nesta fase você NÃO precisa usar prompt()
            para realizar o ataque.
        `,

        gabarito: `
            <!DOCTYPE html>
            <html lang="pt-BR">

            <head>

                <meta charset="UTF-8">

                <title>
                    Confronto Final
                </title>

            </head>

            <body>

                <h1>⚔️ Confronto Final</h1>

                <p>
                    Vida de Vecna:
                    <span id="vidaVecna">100</span>
                </p>

                <label>
                    Força do ataque:
                </label>

                <input
                    type="number"
                    id="forcaAtaque"
                >

                <button id="btnAtacar">
                    Atacar Vecna
                </button>

                <p id="resultado"></p>

                <h2>
                    Histórico de ataques
                </h2>

                <p id="historico"></p>


                <script>

                    let vidaVecna = 100;

                    let ataques = [];


                    const inputAtaque =
                        document.getElementById(
                            "forcaAtaque"
                        );


                    const botaoAtacar =
                        document.getElementById(
                            "btnAtacar"
                        );


                    const resultado =
                        document.getElementById(
                            "resultado"
                        );


                    const vidaNaTela =
                        document.getElementById(
                            "vidaVecna"
                        );


                    const historico =
                        document.getElementById(
                            "historico"
                        );


                    function calcularDano(forca) {

                        return forca * 2;

                    }


                    botaoAtacar.addEventListener(
                        "click",
                        function () {

                            if (vidaVecna <= 0) {

                                resultado.innerText =
                                    "Vecna já foi derrotado!";

                                return;

                            }


                            let forca =
                                Number(
                                    inputAtaque.value
                                );


                            if (
                                forca <= 0 ||
                                inputAtaque.value === ""
                            ) {

                                resultado.innerText =
                                    "Digite uma força de ataque válida!";

                                return;

                            }


                            let dano =
                                calcularDano(forca);


                            vidaVecna =
                                vidaVecna - dano;


                            if (vidaVecna < 0) {

                                vidaVecna = 0;

                            }


                            ataques.push(dano);


                            vidaNaTela.innerText =
                                vidaVecna;


                            if (vidaVecna === 0) {

                                resultado.innerText =
                                    "Você derrotou Vecna e fechou o portal do Mundo Invertido!";

                                botaoAtacar.disabled =
                                    true;

                            } else {

                                resultado.innerText =
                                    "Você causou " +
                                    dano +
                                    " de dano! Vecna ainda possui " +
                                    vidaVecna +
                                    " de vida.";

                            }


                            let textoHistorico = "";


                            for (
                                let i = 0;
                                i < ataques.length;
                                i++
                            ) {

                                textoHistorico +=
                                    "Ataque " +
                                    (i + 1) +
                                    ": " +
                                    ataques[i] +
                                    " de dano<br>";

                            }


                            historico.innerHTML =
                                textoHistorico;


                            inputAtaque.value = "";

                        }
                    );

                </script>

            </body>

            </html>
        `,

        codigo: `
<!DOCTYPE html>
<html lang="pt-BR">

<head>
    <meta charset="UTF-8">
    <title>Batalha Final</title>
</head>

<body>

    <!-- Crie aqui os elementos HTML da sua batalha -->


    <script>

        // Escreva aqui o JavaScript da sua batalha


    </script>

</body>

</html>
`

    }

};


// ============================================================
// ABRIR FASE
// ============================================================

function abrirFase(numero) {

    carregarFase(numero);

}


// ============================================================
// CARREGAR FASE
// ============================================================

function carregarFase(numero) {

    faseAtual = numero;

    const fase = fases[numero];


    document
        .getElementById("mapa")
        .classList.add("escondida");


    document
        .getElementById("fase")
        .classList.remove("escondida");


    document
        .getElementById("faseNumero")
        .innerText = fase.numero;


    document
        .getElementById("faseTitulo")
        .innerText = fase.titulo;


    document
        .getElementById("historia")
        .innerText = fase.historia;


    // TAREFAS

    const lista =
        document.getElementById("tarefas");

    lista.innerHTML = "";


    fase.tarefas.forEach(
        function (tarefa) {

            const li =
                document.createElement("li");

            li.innerText = tarefa;

            lista.appendChild(li);

        }
    );


    // CÓDIGO INICIAL

    document
        .getElementById("codigo")
        .value = fase.codigo;


    // DICA

    document
        .getElementById("dica")
        .innerText = fase.dica;


    // GABARITO

    document
        .getElementById("gabarito")
        .innerText = fase.gabarito;


    // LIMPAR

    document
        .getElementById("saida")
        .innerHTML = "";


    document
        .getElementById("mensagem")
        .className =
        "mensagem escondida";


    document
        .getElementById("dica")
        .classList.add("escondida");


    document
        .getElementById("gabarito")
        .classList.add("escondida");

}


// ============================================================
// VOLTAR PARA O MAPA
// ============================================================

function voltarMapa() {

    document
        .getElementById("fase")
        .classList.add("escondida");


    document
        .getElementById("mapa")
        .classList.remove("escondida");


    atualizarMapa();

}


// ============================================================
// MOSTRAR DICA
// ============================================================

function mostrarDica() {

    const elemento =
        document.getElementById("dica");

    elemento.classList.toggle(
        "escondida"
    );

}


// ============================================================
// MOSTRAR GABARITO
// ============================================================

function mostrarGabarito() {

    const elemento =
        document.getElementById("gabarito");

    elemento.classList.toggle(
        "escondida"
    );

}


// ============================================================
// RECOMEÇAR CÓDIGO
// ============================================================

function recomecarCodigo() {

    document
        .getElementById("codigo")
        .value =
        fases[faseAtual].codigo;


    document
        .getElementById("saida")
        .innerHTML = "";


    document
        .getElementById("mensagem")
        .className =
        "mensagem escondida";

}


// ============================================================
// RODAR CÓDIGO
// ============================================================

function rodarCodigo() {

    const codigo =
        document
            .getElementById("codigo")
            .value;


    const saida =
        document
            .getElementById("saida");


    saida.innerHTML = "";


    // ========================================================
    // FASE 7 - HTML + JAVASCRIPT
    // ========================================================

    if (faseAtual === 7) {

        if (codigo.trim() === "") {

            saida.innerHTML =
                "Digite seu código antes de rodar!";

            return;

        }


        const iframe =
            document.createElement("iframe");


        iframe.style.width = "100%";
        iframe.style.minHeight = "400px";
        iframe.style.border = "none";
        iframe.style.background = "white";
        iframe.style.borderRadius = "8px";


        iframe.setAttribute(
            "sandbox",
            "allow-scripts"
        );


        iframe.srcdoc = codigo;


        saida.appendChild(iframe);


        return;

    }


    // ========================================================
    // FASE 6 - LÂMPADA
    // ========================================================

    if (faseAtual === 6) {

        saida.innerHTML = `
            <img
                id="lampada"
                src="assents/lampada-apagada.png"
                alt="Lâmpada apagada"
                style="max-width: 150px;"
            >

            <br><br>

            <button
                id="botaoLuz"
                onclick="mudarLuz()"
            >
                💡 Acender / Apagar
            </button>
        `;


        try {

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

            } else {

                saida.innerHTML +=
                    "<br><br>Crie a função mudarLuz().";

            }

        }

        catch (erro) {

            saida.innerHTML +=
                `<br><br>
                <span style="color:red">
                    Erro: ${erro.message}
                </span>`;

        }


        return;

    }


    // ========================================================
    // FASES 1 A 5
    // ========================================================

    try {

        const writeOriginal =
            document.write;


        const logOriginal =
            console.log;


        let resultado = "";


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


        const funcao =
            new Function(codigo);


        funcao();


        document.write =
            writeOriginal;


        console.log =
            logOriginal;


        saida.innerHTML =
            resultado;


    }

    catch (erro) {

        saida.innerHTML =
            `<span style="color:red">
                Erro: ${erro.message}
            </span>`;

    }

}

// ============================================================
// VERIFICAR CÓDIGO
// ============================================================

function verificarCodigo() {

    const codigo =
        document
            .getElementById("codigo")
            .value
            .toLowerCase();


    let erros = [];


    // ========================================================
    // FASE 1
    // ========================================================

   if (faseAtual === 1) {

    const codigoLimpo = codigo
        .replace(/\/\*[\s\S]*?\*\//g, "")
        .replace(/\/\/.*$/gm, "")
        .trim();

    if (codigoLimpo === "") {

        erros.push(
            "Escreva o código da ficha antes de verificar."
        );

    } else {

        if (!/\b(?:let|var)\s+nome\s*=/.test(codigoLimpo)) {

            erros.push(
                "Crie uma variável chamada nome usando let ou var."
            );

        }

        if (
            !/\b(?:let|var)\s+nome\s*=\s*prompt\s*\(/.test(codigoLimpo)
        ) {

            erros.push(
                "Use prompt() para perguntar o nome."
            );

        }

        if (
            !/\b(?:let|var)\s+idade\s*=\s*parseint\s*\(\s*prompt\s*\(/.test(codigoLimpo)
        ) {

            erros.push(
                "Use parseInt(prompt()) para receber a idade."
            );

        }

        if (
            !/\b(?:let|var)\s+waffles\s*=\s*parsefloat\s*\(\s*prompt\s*\(/.test(codigoLimpo)
        ) {

            erros.push(
                "Use parseFloat(prompt()) para receber a quantidade de waffles."
            );

        }

        if (
            !/\bdocument\s*\.\s*write\s*\(/.test(codigoLimpo)
        ) {

            erros.push(
                "Use document.write() para mostrar as informações."
            );

        }

        if (erros.length === 0) {

            try {

                new Function(codigoLimpo);

            } catch (erro) {

                erros.push(
                    "Seu código possui um erro de sintaxe."
                );

            }

        }
    }
}


    // ========================================================
    // FASE 2
    // ========================================================

    if (faseAtual === 2) {

        const codigoSemComentarios = codigo
            .replace(/\/\*[\s\S]*?\*\//g, "")
            .replace(/\/\/.*$/gm, "")
            .trim();


        if (!/\bprompt\s*\(/.test(codigoSemComentarios)) {

            erros.push(
                "Use prompt() para perguntar a senha."
            );

        }


        if (!/\bif\s*\(/.test(codigoSemComentarios)) {

            erros.push(
                "Você precisa utilizar if para verificar a senha."
            );

        }


        if (!/\belse\b/.test(codigoSemComentarios)) {

            erros.push(
                "Você precisa utilizar else para a senha incorreta."
            );

        }


        if (
            !/document\s*\.\s*write\s*\(/.test(codigoSemComentarios)
        ) {

            erros.push(
                "Use document.write() para mostrar uma mensagem."
            );

        }


        if (
            !/(==|===)\s*["']011["']|["']011["']\s*(==|===)/.test(codigoSemComentarios)
        ) {

            erros.push(
                "Verifique a senha correta: 011."
            );

        }

    }


    // ========================================================
    // FASE 3
    // ========================================================

    if (faseAtual === 3) {

        if (
            !/function\s+calculardano\s*\(/.test(codigo)
        ) {

            erros.push(
                "Crie uma função chamada calcularDano()."
            );

        }


        if (!/\bif\s*\(/.test(codigo)) {

            erros.push(
                "Use if dentro da lógica da função."
            );

        }


        if (!/\belse\b/.test(codigo)) {

            erros.push(
                "Use else para completar a lógica."
            );

        }


        if (!/\breturn\b/.test(codigo)) {

            erros.push(
                "A função precisa utilizar return."
            );

        }


        if (!/\bcalculardano\s*\(/.test(codigo)) {

            erros.push(
                "Chame a função calcularDano()."
            );

        }

    }


    // ========================================================
    // FASE 4
    // ========================================================

   if (faseAtual === 4) {

    const codigoLimpo = codigo
        .replace(/\/\*[\s\S]*?\*\//g, "")
        .replace(/\/\/.*$/gm, "")
        .trim();

    if (codigoLimpo === "") {

        erros.push(
            "Escreva o código da batalha antes de verificar."
        );

    }

    if (!/\bwhile\s*\(/.test(codigoLimpo)) {

        erros.push(
            "Use while() para controlar a batalha."
        );

    }

    if (!/\bfor\s*\(/.test(codigoLimpo)) {

        erros.push(
            "Use for() para repetir os ataques."
        );

    }

    if (
        !/\b(?:let|var)\s+vida\b/.test(codigoLimpo)
    ) {

        erros.push(
            "Crie uma variável para a vida do inimigo usando let ou var."
        );

    }

    if (
        !/\b(?:let|var)\s+dano\b/.test(codigoLimpo)
    ) {

        erros.push(
            "Crie uma variável para o dano usando let ou var."
        );

    }

    if (
        !/(?:vida\s*[-]=|vida\s*=\s*vida\s*-)/.test(codigoLimpo)
    ) {

        erros.push(
            "Diminua a vida do inimigo a cada ataque."
        );

    }

    if (
        !/document\s*\.\s*write\s*\(/.test(codigoLimpo)
        &&
        !/console\s*\.\s*log\s*\(/.test(codigoLimpo)
    ) {

        erros.push(
            "Mostre o resultado usando document.write() ou console.log()."
        );

    }

    if (erros.length === 0) {

        try {

            new Function(codigoLimpo);

        } catch (erro) {

            erros.push(
                "Seu código possui um erro de sintaxe."
            );

        }

    }
}

    // ========================================================
    // FASE 5
    // ========================================================

    if (faseAtual === 5) {

        if (!/=\s*\[/.test(codigo)) {

            erros.push(
                "Crie um vetor utilizando []."
            );

        }


        if (!/\.push\s*\(/.test(codigo)) {

            erros.push(
                "Use push() para adicionar um item ao vetor."
            );

        }


        if (!/\bfor\s*\(/.test(codigo)) {

            erros.push(
                "Use for para percorrer o vetor."
            );

        }

    }


    // ========================================================
    // FASE 6
    // ========================================================

    if (faseAtual === 6) {

    if (!codigo.includes("getelementbyid")) {
        erros.push("Use document.getElementById().");
    }

    if (!codigo.includes("function")) {
        erros.push("Crie uma função para mudar a lâmpada.");
    }

    if (!codigo.includes("mudarluz")) {
        erros.push("Crie uma função chamada mudarLuz().");
    }

    if (!codigo.includes("if")) {
        erros.push("Use if para verificar o estado da lâmpada.");
    }

    if (!codigo.includes("else")) {
        erros.push("Use else para alternar a lâmpada.");
    }

    if (!codigo.includes(".src")) {
        erros.push("Use .src para trocar a imagem.");
    }

    if (!codigo.includes("lampada-acesa.png")) {
        erros.push("Use a imagem da lâmpada acesa.");
    }

    if (!codigo.includes("lampada-apagada.png")) {
        erros.push("Use a imagem da lâmpada apagada.");
    }
}


    // ========================================================
    // FASE 7 - BATALHA FINAL
    // ========================================================

    if (faseAtual === 7) {

        // ----------------------------------------------------
        // Remove comentários
        // ----------------------------------------------------

        const codigoLimpo =
            codigo
                .replace(/\/\*[\s\S]*?\*\//g, "")
                .replace(/\/\/.*$/gm, "")
                .trim();


        // ----------------------------------------------------
        // Verifica se o código está vazio
        // ----------------------------------------------------

        if (codigoLimpo === "") {

            erros.push(
                "Escreva seu código da batalha antes de verificar."
            );

        } else {


            // ------------------------------------------------
            // HTML
            // ------------------------------------------------

            if (!/<input\b/i.test(codigoLimpo)) {

                erros.push(
                    "Crie um elemento <input> para receber a força do ataque."
                );

            }


            if (!/<button\b/i.test(codigoLimpo)) {

                erros.push(
                    "Crie um elemento <button> para realizar o ataque."
                );

            }


            if (!/<p\b/i.test(codigoLimpo)) {

                erros.push(
                    "Crie pelo menos um elemento <p> para mostrar informações da batalha."
                );

            }


            // ------------------------------------------------
            // DOM
            // ------------------------------------------------

            if (
                !/document\s*\.\s*getelementbyid\s*\(/i.test(codigoLimpo)
            ) {

                erros.push(
                    "Use document.getElementById() para acessar os elementos HTML."
                );

            }


            if (!/\.value\b/i.test(codigoLimpo)) {

                erros.push(
                    "Use .value para pegar o valor digitado no input."
                );

            }


            // ------------------------------------------------
            // CONVERSÃO
            // ------------------------------------------------

            const temConversao =
                /number\s*\(/i.test(codigoLimpo) ||
                /parseint\s*\(/i.test(codigoLimpo) ||
                /parsefloat\s*\(/i.test(codigoLimpo);


            if (!temConversao) {

                erros.push(
                    "Converta o valor do input para número usando Number(), parseInt() ou parseFloat()."
                );

            }


            // ------------------------------------------------
            // FUNÇÃO
            // ------------------------------------------------

            if (!/\bfunction\b/i.test(codigoLimpo)) {

                erros.push(
                    "Crie uma função para calcular o dano."
                );

            }


            if (!/\breturn\b/i.test(codigoLimpo)) {

                erros.push(
                    "Sua função precisa utilizar return."
                );

            }


            // ------------------------------------------------
            // CONDIÇÃO
            // ------------------------------------------------

            if (!/\bif\s*\(/i.test(codigoLimpo)) {

                erros.push(
                    "Use if para verificar a situação da batalha."
                );

            }


            if (!/\belse\b/i.test(codigoLimpo)) {

                erros.push(
                    "Use else para definir o que acontece quando Vecna ainda está vivo."
                );

            }


            // ------------------------------------------------
            // VETOR
            // ------------------------------------------------

            const temVetor =
                /=\s*\[[\s\S]*?\]/.test(codigoLimpo);


            if (!temVetor) {

                erros.push(
                    "Crie um vetor para armazenar os ataques."
                );

            }


            if (!/\.push\s*\(/i.test(codigoLimpo)) {

                erros.push(
                    "Use push() para registrar os ataques no vetor."
                );

            }


            // ------------------------------------------------
            // REPETIÇÃO
            // ------------------------------------------------

            const temFor =
                /\bfor\s*\(/i.test(codigoLimpo);


            const temWhile =
                /\bwhile\s*\(/i.test(codigoLimpo);


            if (!temFor && !temWhile) {

                erros.push(
                    "Use for ou while para percorrer o vetor."
                );

            }


            // ------------------------------------------------
            // ALTERAÇÃO DA PÁGINA
            // ------------------------------------------------

            const temInnerText =
                /\.innertext\b/i.test(codigoLimpo);


            const temInnerHTML =
                /\.innerhtml\b/i.test(codigoLimpo);


            if (!temInnerText && !temInnerHTML) {

                erros.push(
                    "Use innerText ou innerHTML para mostrar o resultado na página."
                );

            }


            // ------------------------------------------------
            // EVENTO
            // ------------------------------------------------

            if (
                !/addeventlistener\s*\(/i.test(codigoLimpo)
            ) {

                erros.push(
                    "Use addEventListener() para detectar o clique no botão."
                );

            }


            // ------------------------------------------------
            // JAVASCRIPT DENTRO DO HTML
            // ------------------------------------------------

            const scripts =
                [
                    ...codigoLimpo.matchAll(
                        /<script[^>]*>([\s\S]*?)<\/script>/gi
                    )
                ]
                .map(
                    function (resultado) {

                        return resultado[1];

                    }
                )
                .join("\n");


            // Só verifica sintaxe se encontrou
            // JavaScript dentro de <script>

            if (scripts.trim() !== "") {

                try {

                    new Function(scripts);

                } catch (erro) {

                    erros.push(
                        "O JavaScript possui um erro de sintaxe."
                    );

                }

            } else {

                erros.push(
                    "Coloque seu JavaScript dentro de uma tag <script>...</script>."
                );

            }

        }

    }


    // ========================================================
    // RESULTADO
    // ========================================================

    const mensagem =
        document.getElementById(
            "mensagem"
        );


    if (erros.length === 0) {

        mensagem.className =
            "mensagem sucesso";


        mensagem.innerHTML =
            `
            <strong>✓ MISSÃO CONCLUÍDA!</strong>
            <br><br>
            Você completou o capítulo
            ${faseAtual}.
            `;


        concluirFase();


    } else {

        mensagem.className =
            "mensagem erro";


        mensagem.innerHTML =
            `
            <strong>✗ Ainda não!</strong>
            <br><br>
            ${erros.join("<br><br>")}
            `;

    }

}


// ============================================================
// CONCLUIR FASE
// ============================================================

function concluirFase() {

    progresso[
        "fase" + faseAtual
    ] = true;


    localStorage.setItem(
        "strangerCode",
        JSON.stringify(progresso)
    );


    atualizarMapa();

}


// ============================================================
// ATUALIZAR MAPA
// ============================================================

function atualizarMapa() {

    let concluidas = 0;


    // Conta quantas fases foram concluídas

    for (let i = 1; i <= 7; i++) {

        if (progresso["fase" + i]) {

            concluidas++;

        }

    }


    // Atualiza o texto de progresso

    document
        .getElementById("progresso")
        .innerText =
        concluidas + " de 7 capítulos concluídos";


    // ========================================================
    // ATUALIZAR CARDS
    // ========================================================

    for (let i = 1; i <= 7; i++) {

        const card =
            document.getElementById(
                "card" + i
            );


        const status =
            document.getElementById(
                "status" + i
            );


        // ====================================================
        // FASE CONCLUÍDA
        // ====================================================

        if (progresso["fase" + i]) {

            card.className =
                i === 7
                    ? "card boss fase-disponivel"
                    : "card fase-disponivel";


            status.innerText =
                "✓ CONCLUÍDO";


            status.style.color =
                "#00ff88";


            status.style.borderColor =
                "#00ff88";


            card.onclick =
                function () {

                    abrirFase(i);

                };

        }


        // ====================================================
        // FASE DISPONÍVEL
        // ====================================================

        else {

            card.className =
                i === 7
                    ? "card boss fase-disponivel"
                    : "card fase-disponivel";


            status.innerText =
                "DISPONÍVEL";


            status.style.color =
                "#00ff88";


            status.style.borderColor =
                "#00ff88";


            card.onclick =
                function () {

                    abrirFase(i);

                };

        }

    }

}


// ============================================================
// INICIAR JOGO
// ============================================================

document.addEventListener(
    "DOMContentLoaded",
    function () {

        atualizarMapa();

    }
);