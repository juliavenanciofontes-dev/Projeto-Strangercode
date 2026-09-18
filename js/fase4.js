
// ============================================================
// STRANGER CODE - FASE 4
// ============================================================




// ============================================================
// MOSTRAR DICA
// ============================================================

function mostrarDica() {

    document
        .getElementById("dica")
        .classList.toggle("escondida");

}


// ============================================================
// MOSTRAR GABARITO
// ============================================================

function mostrarGabarito() {

    document
        .getElementById("gabarito")
        .classList.toggle("escondida");

}


// ============================================================
// RECOMEÇAR CÓDIGO
// ============================================================

function recomecarCodigo() {

    document
        .getElementById("codigo")
        .value = codigoInicial;

    document
        .getElementById("saida")
        .innerHTML = "";

    document
        .getElementById("mensagem")
        .className = "mensagem escondida";

}


// ============================================================
// RODAR CÓDIGO
// ============================================================

function rodarCodigo() {

    const codigo =
        document.getElementById("codigo").value;

    const saida =
        document.getElementById("saida");

    let resultado = "";

    const writeOriginal = document.write;
    const logOriginal = console.log;

    try {

        document.write = function(texto) {
            resultado += texto;
        };

        console.log = function(...dados) {
            resultado += dados.join(" ") + "<br>";
        };

        new Function(codigo)();

        saida.innerHTML =
            resultado || "Código executado sem saída.";

    } catch (erro) {

        saida.innerHTML =
            "Erro: " + erro.message;

    } finally {

        document.write = writeOriginal;
        console.log = logOriginal;

    }

}


// ============================================================
// VERIFICAR CÓDIGO
// ============================================================

function verificarCodigo() {

    const codigo =
        document.getElementById("codigo").value;

    const mensagem =
        document.getElementById("mensagem");

    let erros = [];


    // --------------------------------------------------------
    // 1. REMOVER COMENTÁRIOS
    // --------------------------------------------------------

    const codigoLimpo = codigo
        .replace(/\/\*[\s\S]*?\*\//g, "")
        .replace(/\/\/.*$/gm, "")
        .trim();


    // --------------------------------------------------------
    // 2. VERIFICAR SE O CÓDIGO ESTÁ VAZIO
    // --------------------------------------------------------

    if (codigoLimpo === "") {

        erros.push(
            "Escreva o código da batalha antes de verificar."
        );

    }


    // --------------------------------------------------------
    // 3. VERIFICAR A ESTRUTURA DA BATALHA
    // --------------------------------------------------------

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

    if (!/\bvida\b/.test(codigoLimpo)) {

        erros.push(
            "Crie uma variável para a vida do inimigo."
        );

    }

    if (!/\bdano\b/.test(codigoLimpo)) {

        erros.push(
            "Crie uma variável para representar o dano."
        );

    }

    if (!/document\s*\.\s*write\s*\(/.test(codigoLimpo)) {

        erros.push(
            "Use document.write() para mostrar o resultado."
        );

    }


    // --------------------------------------------------------
    // 4. VERIFICAR ERROS DE SINTAXE
    // --------------------------------------------------------

    if (erros.length === 0) {

        try {

            new Function(codigo);

        } catch (erro) {

            erros.push(
                "Seu código possui um erro de sintaxe."
            );

        }

    }


    // --------------------------------------------------------
    // 5. MOSTRAR RESULTADO
    // --------------------------------------------------------

    if (erros.length === 0) {

        mensagem.className =
            "mensagem sucesso";

        mensagem.innerHTML =
            "<strong>✓ MISSÃO CONCLUÍDA!</strong>" +
            "<br><br>" +
            "O Demogorgon foi derrotado!";

        concluirFase();

    } else {

        mensagem.className =
            "mensagem erro";

        mensagem.innerHTML =
            "<strong>✗ Ainda não!</strong>" +
            "<br><br>" +
            erros.join("<br>");

    }

}


