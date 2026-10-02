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

            "Use if para verificar se a senha é igual a 011.",

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
    // FASE 7 - O PORTAL DO MUNDO INVERTIDO
    // ========================================================

    7: {

        numero: "⚠ BATALHA FINAL",

        titulo: "O Portal do Mundo Invertido",

        historia: `
            O portal para o Mundo Invertido foi aberto
            novamente, e Hawkins está em perigo!

            Para fechá-lo, você precisará coletar
            energia suficiente e usar seus conhecimentos
            de JavaScript para concluir a missão.

            Organize as energias coletadas, calcule
            o total e descubra se já é possível
            fechar o portal.
        `,

        tarefas: [

            "Crie uma variável chamada energias e inicialize-a como um vetor vazio.",

            "Crie uma variável chamada total e atribua a ela o valor 0.",

            "No HTML, crie um botão para coletar energia e outro para fechar o portal.",

            "Crie três elementos HTML para exibir o total de energia, o resultado da ação e a lista de energias coletadas.",

            "Utilize document.getElementById() para acessar os três elementos de exibição.",

            "Configure o botão de coleta para executar a função coletarEnergia() ao ser clicado.",

            "Configure o botão de fechar o portal para executar a função fecharPortal() ao ser clicado.",

            "Crie a função coletarEnergia().",

            "Dentro dela, gere um número aleatório inteiro entre 1 e 10.",

            "Adicione o valor gerado ao vetor energias usando push().",

            "Zere a variável total e utilize um laço for para percorrer o vetor e somar todas as energias.",

            "Atualize a página para exibir o total de energia acumulada e a lista de valores coletados.",

            "Exiba uma mensagem informando quantos pontos de energia foram obtidos naquela coleta.",

            "Crie a função fecharPortal().",

            "Dentro dela, utilize if para verificar se o total de energia acumulada é maior ou igual a 30.",

            "Se a condição for verdadeira, exiba uma mensagem informando que o portal foi fechado e desative os dois botões.",

            "Caso contrário, utilize else para informar que a energia ainda é insuficiente e que o jogador precisa coletar mais."

        ],

        dica: `
            Comece criando o vetor e as variáveis
            que serão usadas no jogo.

            Depois, prepare os elementos HTML
            e conecte-os ao JavaScript.

            Lembre-se:

            • document.getElementById() encontra
              elementos da página.

            • onclick chama uma função quando
              o botão é clicado.

            • Math.floor(Math.random() * 10) + 1
              gera um número inteiro de 1 a 10.

            • push() adiciona um valor ao vetor.

            • Um for pode percorrer o vetor
              e somar seus valores.

            • Use if e else para verificar
              se o total chegou a 30.

            Atualize a tela sempre que o jogador
            coletar energia ou tentar fechar o portal.
        `,

        gabarito: `
<!DOCTYPE html>
<html lang="pt-BR">

<head>
    <meta charset="UTF-8">
    <title>O Portal do Mundo Invertido</title>
</head>

<body>

    <h1>O Portal do Mundo Invertido</h1>

    <p>
        Energia acumulada:
        <span id="energia">0</span>
    </p>

    <button
        id="btnColetar"
        onclick="coletarEnergia()"
    >
        Coletar energia
    </button>

    <button
        id="btnFechar"
        onclick="fecharPortal()"
    >
        Fechar portal
    </button>

    <p id="resultado"></p>

    <p id="historico"></p>

    <script>

        let energias = [];
        let total = 0;

        const energiaNaTela =
            document.getElementById("energia");

        const resultado =
            document.getElementById("resultado");

        const historico =
            document.getElementById("historico");

        function coletarEnergia() {

            let energia =
                Math.floor(Math.random() * 10) + 1;

            energias.push(energia);

            total = 0;

            for (let i = 0; i < energias.length; i++) {
                total += energias[i];
            }

            energiaNaTela.innerText = total;

            historico.innerText =
                "Energias coletadas: " +
                energias.join(", ");

            resultado.innerText =
                "Você coletou " +
                energia +
                " pontos de energia!";
        }

        function fecharPortal() {

            if (total >= 30) {

                resultado.innerText =
                    "Portal fechado! Você salvou Hawkins!";

                document.getElementById(
                    "btnColetar"
                ).disabled = true;

                document.getElementById(
                    "btnFechar"
                ).disabled = true;

            } else {

                resultado.innerText =
                    "Energia insuficiente! Colete mais energia.";

            }

        }

    </script>

</body>
</html>
        `,

        codigo: `
<!DOCTYPE html>
<html lang="pt-BR">

<head>
    <meta charset="UTF-8">
    <title>O Portal do Mundo Invertido</title>
</head>

<body>

    <!-- Crie aqui os elementos HTML da missão -->

    <script>

        // Escreva aqui o JavaScript da missão

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
// FASE 7 - O PORTAL DO MUNDO INVERTIDO
// ========================================================

if (faseAtual === 7) {

    const codigoLimpo = codigo
        .replace(/\/\*[\s\S]*?\*\//g, "")
        .replace(/\/\/.*$/gm, "")
        .trim();

    if (codigoLimpo === "") {

        erros.push(
            "Escreva seu código antes de verificar a missão."
        );

    } else {

        // ------------------------------------------------
        // EXTRAIR O JAVASCRIPT DO HTML
        // ------------------------------------------------

        const scripts = [
            ...codigoLimpo.matchAll(
                /<script\b[^>]*>([\s\S]*?)<\/script>/gi
            )
        ]
            .map(function (resultado) {
                return resultado[1];
            })
            .join("\n");

        if (scripts.trim() === "") {

            erros.push(
                "Coloque seu JavaScript dentro de uma tag <script>."
            );

        } else {

            // ------------------------------------------------
            // VERIFICAR A SINTAXE
            // ------------------------------------------------

            let sintaxeValida = true;

            try {
                new Function(scripts);
            } catch (erro) {
                sintaxeValida = false;

                erros.push(
                    "O JavaScript possui um erro de sintaxe."
                );
            }

            // Só verifica a lógica se a sintaxe estiver correta
            if (sintaxeValida) {

                const js = scripts
                    .replace(/\/\*[\s\S]*?\*\//g, "")
                    .replace(/\/\/.*$/gm, "");

                // ------------------------------------------------
                // HTML
                // ------------------------------------------------

                const temBotaoColetar =
                    /<button\b[^>]*\bid\s*=\s*["']btnColetar["']/i.test(codigoLimpo);

                const temBotaoFechar =
                    /<button\b[^>]*\bid\s*=\s*["']btnFechar["']/i.test(codigoLimpo);

                const temEnergia =
                    /<(?:span|p|div)\b[^>]*\bid\s*=\s*["']energia["']/i.test(codigoLimpo);

                const temResultado =
                    /<(?:p|div|span)\b[^>]*\bid\s*=\s*["']resultado["']/i.test(codigoLimpo);

                const temHistorico =
                    /<(?:p|div|span)\b[^>]*\bid\s*=\s*["']historico["']/i.test(codigoLimpo);

                if (!temBotaoColetar) {
                    erros.push(
                        "Crie um botão com o id btnColetar."
                    );
                }

                if (!temBotaoFechar) {
                    erros.push(
                        "Crie um botão com o id btnFechar."
                    );
                }

                if (!temEnergia) {
                    erros.push(
                        "Crie um elemento com o id energia para mostrar o total."
                    );
                }

                if (!temResultado) {
                    erros.push(
                        "Crie um elemento com o id resultado para mostrar as mensagens."
                    );
                }

                if (!temHistorico) {
                    erros.push(
                        "Crie um elemento com o id historico para mostrar as energias coletadas."
                    );
                }

                // ------------------------------------------------
                // VARIÁVEIS
                // ------------------------------------------------

                const temVetor =
                    /\b(?:let|var|const)\s+energias\s*=\s*\[\s*\]/i.test(js);

                const temTotal =
                    /\b(?:let|var|const)\s+total\s*=\s*0\b/i.test(js);

                if (!temVetor) {
                    erros.push(
                        "Crie a variável energias e inicialize-a como um vetor vazio."
                    );
                }

                if (!temTotal) {
                    erros.push(
                        "Crie a variável total e inicialize-a com 0."
                    );
                }

                // ------------------------------------------------
                // FUNÇÕES
                // ------------------------------------------------

                const funcaoColetar =
                    js.match(
                        /function\s+coletarEnergia\s*\([^)]*\)\s*\{([\s\S]*?)\}/i
                    );

                const funcaoFechar =
                    js.match(
                        /function\s+fecharPortal\s*\([^)]*\)\s*\{([\s\S]*?)\}/i
                    );

                if (!funcaoColetar) {
                    erros.push(
                        "Crie a função coletarEnergia()."
                    );
                }

                if (!funcaoFechar) {
                    erros.push(
                        "Crie a função fecharPortal()."
                    );
                }

                // ------------------------------------------------
                // FUNÇÃO DE COLETA
                // ------------------------------------------------

                if (funcaoColetar) {

                    const coleta = funcaoColetar[1];

                    if (!/Math\s*\.\s*random\s*\(/i.test(coleta)) {
                        erros.push(
                            "Na função coletarEnergia(), gere um número aleatório."
                        );
                    }

                    if (!/energias\s*\.\s*push\s*\(/i.test(coleta)) {
                        erros.push(
                            "Na função coletarEnergia(), adicione a energia ao vetor usando push()."
                        );
                    }

                    if (!/\bfor\s*\(/i.test(coleta)) {
                        erros.push(
                            "Na função coletarEnergia(), utilize um laço for para percorrer o vetor."
                        );
                    }

                    if (!/total\s*\+=/i.test(coleta)) {
                        erros.push(
                            "Na função coletarEnergia(), some as energias à variável total."
                        );
                    }

                    if (!/total\s*=\s*0\b/i.test(coleta)) {
                        erros.push(
                            "Zere a variável total antes de calcular novamente a soma."
                        );
                    }

                    if (!/energia/i.test(coleta)) {
                        erros.push(
                            "Utilize uma variável para armazenar o valor da energia coletada."
                        );
                    }

                    if (!/\.innerText\b|\.innerHTML\b/i.test(coleta)) {
                        erros.push(
                            "Atualize as informações da página após coletar energia."
                        );
                    }

                    if (!/historico/i.test(coleta)) {
                        erros.push(
                            "Mostre a lista de energias coletadas no histórico."
                        );
                    }

                    if (!/resultado/i.test(coleta)) {
                        erros.push(
                            "Exiba uma mensagem informando a energia obtida."
                        );
                    }

                    if (!/energia/i.test(coleta) ||
                        !/total/i.test(coleta)) {
                        erros.push(
                            "Utilize as variáveis de energia e total na função de coleta."
                        );
                    }
                }

                // ------------------------------------------------
                // FUNÇÃO DE FECHAR O PORTAL
                // ------------------------------------------------

                if (funcaoFechar) {

                    const fechar = funcaoFechar[1];

                    if (!/\bif\s*\(/i.test(fechar)) {
                        erros.push(
                            "Na função fecharPortal(), utilize if para verificar a energia."
                        );
                    }

                    if (!/\belse\b/i.test(fechar)) {
                        erros.push(
                            "Na função fecharPortal(), utilize else para tratar a energia insuficiente."
                        );
                    }

                    if (!/total\s*>=\s*30/i.test(fechar)) {
                        erros.push(
                            "Verifique se o total é maior ou igual a 30."
                        );
                    }

                    if (!/resultado/i.test(fechar) ||
                        !/\.innerText\b|\.innerHTML\b/i.test(fechar)) {
                        erros.push(
                            "Exiba o resultado da tentativa de fechar o portal."
                        );
                    }

                    if (!/disabled\s*=\s*true/i.test(fechar)) {
                        erros.push(
                            "Desative os botões quando o portal for fechado."
                        );
                    }
                }

                // ------------------------------------------------
                // CONEXÃO DOS BOTÕES
                // ------------------------------------------------

                const botaoColetarConectado =
                    /id\s*=\s*["']btnColetar["'][^>]*onclick\s*=\s*["']coletarEnergia\s*\(\s*\)["']/i.test(codigoLimpo) ||
                    /onclick\s*=\s*["']coletarEnergia\s*\(\s*\)["'][^>]*id\s*=\s*["']btnColetar["']/i.test(codigoLimpo);

                const botaoFecharConectado =
                    /id\s*=\s*["']btnFechar["'][^>]*onclick\s*=\s*["']fecharPortal\s*\(\s*\)["']/i.test(codigoLimpo) ||
                    /onclick\s*=\s*["']fecharPortal\s*\(\s*\)["'][^>]*id\s*=\s*["']btnFechar["']/i.test(codigoLimpo);

                if (!botaoColetarConectado) {
                    erros.push(
                        "Conecte o botão btnColetar à função coletarEnergia() usando onclick."
                    );
                }

                if (!botaoFecharConectado) {
                    erros.push(
                        "Conecte o botão btnFechar à função fecharPortal() usando onclick."
                    );
                }

                // ------------------------------------------------
                // ACESSO AOS ELEMENTOS HTML
                // ------------------------------------------------

                if (!/document\s*\.\s*getElementById\s*\(\s*["']energia["']\s*\)/i.test(js)) {
                    erros.push(
                        "Acesse o elemento energia usando document.getElementById()."
                    );
                }

                if (!/document\s*\.\s*getElementById\s*\(\s*["']resultado["']\s*\)/i.test(js)) {
                    erros.push(
                        "Acesse o elemento resultado usando document.getElementById()."
                    );
                }

                if (!/document\s*\.\s*getElementById\s*\(\s*["']historico["']\s*\)/i.test(js)) {
                    erros.push(
                        "Acesse o elemento historico usando document.getElementById()."
                    );
                }
            }
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