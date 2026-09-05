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

        codigo: `// =================================
// CAPÍTULO 1 - A FICHA DE ONZE
// =================================

// TODO 1:
// Pergunte o nome usando prompt()
// e guarde em uma variável


// TODO 2:
// Pergunte a idade
// e use parseInt()


// TODO 3:
// Pergunte quantos waffles
// ela comeu usando parseFloat()


// TODO 4:
// Mostre tudo usando document.write()
`

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

        codigo: `// =================================
// CAPÍTULO 2 - A PORTA DO LABORATÓRIO
// =================================

// A senha correta é: 011

// TODO 1:
// Pergunte a senha usando prompt()


// TODO 2:
// Use if para verificar
// se a senha está correta


// TODO 3:
// Use else caso esteja errada


// TODO 4:
// Mostre uma mensagem
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

        codigo: `// =================================
// CAPÍTULO 3 - O CÁLCULO DO DANO
// =================================

// TODO 1:
// Crie uma função chamada
// calcularDano()


// TODO 2:
// A função deve receber
// forca e arma


// TODO 3:
// Use if e else


// TODO 4:
// Use return


// TODO 5:
// Chame a função
// e mostre o resultado
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

        codigo: `// =================================
// CAPÍTULO 4 - BATALHA POR TURNOS
// =================================

let vida = 100;

let dano = 20;


// TODO 1:
// Use while para controlar
// a batalha


// TODO 2:
// Diminua a vida do inimigo


// TODO 3:
// Mostre a vida após
// cada ataque


// TODO 4:
// Use for para repetir
// uma ação várias vezes
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

        codigo: `// =================================
// CAPÍTULO 5 - A MOCHILA DO DUSTIN
// =================================

// TODO 1:
// Crie um vetor chamado mochila


// TODO 2:
// Coloque alguns itens dentro dele


// TODO 3:
// Adicione um novo item
// usando push()


// TODO 4:
// Use for para percorrer
// o vetor


// TODO 5:
// Mostre os itens
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

            Agora você precisa programar as luzes
            usando JavaScript.
        `,

        tarefas: [

            "Encontre um elemento HTML usando getElementById().",

            "Use addEventListener().",

            "Faça algo acontecer quando o botão for clicado.",

            "Modifique um elemento da página."

        ],

        dica: `
            Primeiro encontre o elemento:

            let botao =
                document.getElementById("luzes");

            Depois use:

            botao.addEventListener(
                "click",
                function() {

                    // código

                }
            );
        `,

        gabarito: `
            let botao =
                document.getElementById("luzes");

            botao.addEventListener(
                "click",
                function() {

                    document.body.style.background =
                        "red";

                }
            );
        `,

        codigo: `// =================================
// CAPÍTULO 6 - AS LUZES DA JOYCE
// =================================

// TODO 1:
// Encontre um elemento HTML
// usando document.getElementById()


// TODO 2:
// Use addEventListener()


// TODO 3:
// Quando o botão for clicado,
// altere alguma coisa na página
`

    },


    // ========================================================
    // BOSS
    // ========================================================

    7: {

        numero: "⚠ BATALHA FINAL",

        titulo: "Vecna e o Mundo Invertido",

        historia: `
            Você chegou ao Mundo Invertido.

            Vecna está esperando.

            Para derrotá-lo, você precisará utilizar
            tudo o que aprendeu durante os capítulos
            anteriores.

            Esta é a batalha final.
        `,

        tarefas: [

            "Crie variáveis para o jogador e Vecna.",

            "Use prompt() e conversões.",

            "Use if e else.",

            "Crie uma função usando return.",

            "Use while e for.",

            "Crie e utilize um vetor.",

            "Interaja com elementos HTML usando JavaScript.",

            "Derrote Vecna!"

        ],

        dica: `
            Você já aprendeu todas essas
            ferramentas nos capítulos anteriores.

            Agora você precisa juntá-las.

            Pense na batalha como pequenas partes:

            1. Criar personagem
            2. Definir vida
            3. Calcular dano
            4. Repetir ataques
            5. Usar itens
            6. Interagir com a página
        `,

        gabarito: `
            // Exemplo de estrutura:

            let jogador =
                prompt("Nome do jogador");

            let forca =
                parseInt(
                    prompt("Força:")
                );

            let vidaVecna = 100;

            let itens = [
                "espada",
                "lanterna",
                "walkie-talkie"
            ];

            function calcularDano(forca) {

                if (forca > 5) {

                    return forca * 2;

                } else {

                    return forca;

                }
            }

            let dano =
                calcularDano(forca);

            while (vidaVecna > 0) {

                vidaVecna =
                    vidaVecna - dano;

                document.write(
                    "Vecna: " +
                    vidaVecna +
                    " HP<br>"
                );

                for (
                    let i = 0;
                    i < itens.length;
                    i++
                ) {

                    console.log(
                        itens[i]
                    );

                }

            }

            let botao =
                document.getElementById(
                    "luzes"
                );

            botao.addEventListener(
                "click",
                function() {

                    document.body.style.background =
                        "red";

                }
            );
        `,

        codigo: `// ======================================
// BATALHA FINAL
// VECNA E O MUNDO INVERTIDO
// ======================================


// TODO 1:
// Crie o personagem usando prompt()


// TODO 2:
// Crie uma variável para a força
// usando parseInt()


// TODO 3:
// Crie a vida de Vecna


// TODO 4:
// Crie uma função para calcular
// o dano


// TODO 5:
// Use if e else


// TODO 6:
// Use return


// TODO 7:
// Crie um vetor de itens


// TODO 8:
// Use while para controlar
// a batalha


// TODO 9:
// Use for


// TODO 10:
// Use document.getElementById()


// TODO 11:
// Use addEventListener()


// DERROTE VECNA!
`

    }

};


// ============================================================
// ABRIR FASE
// ============================================================

function abrirFase(numero) {

    // A fase 1 sempre está disponível

    if (numero === 1) {

        carregarFase(numero);

        return;

    }


    // Verifica se a fase anterior foi concluída

    if (
        !progresso["fase" + (numero - 1)]
    ) {

        alert(
            "🔒 Essa fase ainda está bloqueada!\n\n" +
            "Complete a fase anterior primeiro."
        );

        return;

    }


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
        function(tarefa) {

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


    try {

        // Guarda os comandos originais

        const writeOriginal =
            document.write;


        const logOriginal =
            console.log;


        let resultado = "";


        // Captura document.write

        document.write =
            function(texto) {

                resultado += texto;

            };


        // Captura console.log

        console.log =
            function(...dados) {

                resultado +=
                    dados.join(" ") +
                    "<br>";

            };


        // Executa o código

        const funcao =
            new Function(codigo);


        funcao();


        // Restaura

        document.write =
            writeOriginal;


        console.log =
            logOriginal;


        // Mostra resultado

        saida.innerHTML =
            resultado;


    } catch (erro) {

        saida.innerHTML =
            `<span style="color:red">
                Erro: ${erro.message}
            </span>`;


        document.write =
            document.write;


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

        if (!codigo.includes("let")) {

            erros.push(
                "Declare uma variável usando let."
            );

        }

        if (!codigo.includes("prompt")) {

            erros.push(
                "Use prompt() para receber informações."
            );

        }

        if (!codigo.includes("parseint")) {

            erros.push(
                "Use parseInt() para converter a idade."
            );

        }

        if (!codigo.includes("parsefloat")) {

            erros.push(
                "Use parseFloat() para converter os waffles."
            );

        }

        if (!codigo.includes("document.write")) {

            erros.push(
                "Use document.write() para mostrar a ficha."
            );

        }

    }


    // ========================================================
    // FASE 2
    // ========================================================

    if (faseAtual === 2) {

        if (!codigo.includes("prompt")) {

            erros.push(
                "Use prompt()."
            );

        }

        if (!codigo.includes("if")) {

            erros.push(
                "Você precisa utilizar if."
            );

        }

        if (!codigo.includes("else")) {

            erros.push(
                "Você precisa utilizar else."
            );

        }

    }


    // ========================================================
    // FASE 3
    // ========================================================

    if (faseAtual === 3) {

        if (!codigo.includes("function")) {

            erros.push(
                "Crie uma função."
            );

        }

        if (!codigo.includes("if")) {

            erros.push(
                "Use if dentro da lógica."
            );

        }

        if (!codigo.includes("else")) {

            erros.push(
                "Use else."
            );

        }

        if (!codigo.includes("return")) {

            erros.push(
                "A função precisa utilizar return."
            );

        }

    }


    // ========================================================
    // FASE 4
    // ========================================================

    if (faseAtual === 4) {

        if (!codigo.includes("while")) {

            erros.push(
                "Use while para controlar a batalha."
            );

        }

        if (!codigo.includes("for")) {

            erros.push(
                "Use for para repetir uma ação."
            );

        }

    }


    // ========================================================
    // FASE 5
    // ========================================================

    if (faseAtual === 5) {

        if (
            !codigo.includes("[") ||
            !codigo.includes("]")
        ) {

            erros.push(
                "Crie um vetor usando []."
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

    }


    // ========================================================
    // FASE 6
    // ========================================================

    if (faseAtual === 6) {

        if (
            !codigo.includes(
                "getelementbyid"
            )
        ) {

            erros.push(
                "Use document.getElementById()."
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

    }


    // ========================================================
    // BOSS
    // ========================================================

    if (faseAtual === 7) {

        const requisitos = [

            "let",

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
                    !codigo.includes(requisito)
                ) {

                    erros.push(
                        "Está faltando: " +
                        requisito
                    );

                }

            }
        );

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
            ${erros.join("<br>")}
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


    for (let i = 1; i <= 7; i++) {

        if (
            progresso["fase" + i]
        ) {

            concluidas++;

        }

    }


    document
        .getElementById("progresso")
        .innerText =
            concluidas +
            " de 7 capítulos concluídos";


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


        // Fase concluída

        if (
            progresso["fase" + i]
        ) {

            card.className =
                "card fase-disponivel";


            status.innerText =
                "✓ CONCLUÍDO";


            status.style.color =
                "#00ff88";


            status.style.borderColor =
                "#00ff88";


            card.onclick =
                function() {

                    abrirFase(i);

                };

        }


        // Fase disponível

        else if (
            i === 1 ||
            progresso["fase" + (i - 1)]
        ) {

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
                function() {

                    abrirFase(i);

                };

        }


        // Fase bloqueada

        else {

            card.className =
                i === 7
                    ? "card boss fase-bloqueada"
                    : "card fase-bloqueada";


            status.innerText =
                "🔒 BLOQUEADO";


            status.style.color =
                "#777";


            status.style.borderColor =
                "#444";


            card.onclick = null;

        }

    }

}


// ============================================================
// INICIAR JOGO
// ============================================================

document.addEventListener(
    "DOMContentLoaded",
    function() {

        atualizarMapa();

    }
);