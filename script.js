

const CHAVES = "strangerCode";


// 1. LER O PROGRESSO SALVO

function lerProgresso() {

    let salvo = JSON.parse(
        localStorage.getItem(CHAVES) || "null"
    );

    if (salvo === null) {
        salvo = {};
    }

    let progresso = {};

    for (let i = 1; i <= 7; i++) {

        if (salvo["fase" + i] === true) {
            progresso["fase" + i] = true;
        } else {
            progresso["fase" + i] = false;
        }

    }

    return progresso;
}


// 2. VERIFICAR SE A FASE ESTÁ DISPONÍVEL

function faseDisponivel(numero, progresso) {
    return numero >= 1 && numero <= 7;
}


function abrirFase(numero) {

    // Verifica se o número da fase é válido
    if (
        !Number.isInteger(numero) ||
        numero < 1 ||
        numero > 7
    ) {
        return;
    }

    // Abre o HTML da fase escolhida
    window.location.href = "fases/fase" + numero + ".html";
}


function atualizarMapa() {

    let progresso = lerProgresso();
    let concluidas = 0;

    for (let i = 1; i <= 7; i++) {

        let card = document.getElementById("card" + i);
        let status = document.getElementById("status" + i);

        let concluida = progresso["fase" + i];
        let disponivel = faseDisponivel(i, progresso);

        // Conta as fases concluídas
        if (concluida === true) {
            concluidas++;
        }

        // Se os elementos não existirem, passa para a próxima fase
        if (card === null || status === null) {
            continue;
        }


        // DEFINE A APARÊNCIA DO CARTÃO

        if (i === 7) {
            card.className = "card boss";
        } else {
            card.className = "card";
        }

        if (disponivel === true) {
            card.className += " fase-disponivel";
        } else {
            card.className += " fase-bloqueada";
        }


        // DEFINE O TEXTO E A COR DO STATUS

        if (concluida === true) {

            status.textContent = "✓ CONCLUÍDO";
            status.style.color = "#00ff88";

        } else if (disponivel === true) {

            status.textContent = "DISPONÍVEL";
            status.style.color = "#00ff88";

        } else {

            status.textContent = "🔒 BLOQUEADO";
            status.style.color = "#aaaaaa";

        }

        status.style.borderColor = status.style.color;


        // AJUSTA A NAVEGAÇÃO PELO TECLADO

        card.setAttribute(
            "aria-disabled",
            String(!disponivel)
        );

        if (disponivel === true) {
            card.setAttribute("tabindex", "0");
        } else {
            card.setAttribute("tabindex", "-1");
        }

    }


    // MOSTRA O TOTAL DE FASES CONCLUÍDAS

    let textoProgresso = document.getElementById("progresso");

    if (textoProgresso !== null) {

        textoProgresso.textContent =
            concluidas + " de 7 capítulos concluídos";

    }

}


// 5. PREPARAR O MAPA QUANDO O HTML CARREGAR

document.addEventListener("DOMContentLoaded", function () {

    // Adiciona suporte ao teclado nos cartões
    for (let i = 1; i <= 7; i++) {

        let card = document.getElementById("card" + i);

        if (card === null) {
            continue;
        }

        card.addEventListener("keydown", function (evento) {

            if (
                evento.key === "Enter" ||
                evento.key === " "
            ) {

                evento.preventDefault();

                abrirFase(i);

            }

        });

    }

    atualizarMapa();

});
