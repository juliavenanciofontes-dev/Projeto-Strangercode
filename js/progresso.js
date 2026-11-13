// Progresso compartilhado pelas sete páginas de fase.
(function () {
    "use strict";

    function lerProgresso() {
        const salvo = JSON.parse(localStorage.getItem("strangerCode") || "null") || {};
        const progresso = {};
        for (let i = 1; i <= 7; i++) {
            progresso["fase" + i] = salvo["fase" + i] === true;
        }
        return progresso;
    }

    window.concluirFase = function (numero) {
        if (!Number.isInteger(numero)) {
            const correspondencia = window.location.pathname.match(/fase([1-7])\.html$/i);
            numero = correspondencia ? Number(correspondencia[1]) : NaN;
        }
        if (!Number.isInteger(numero) || numero < 1 || numero > 7) return;

        const progresso = lerProgresso();
        progresso["fase" + numero] = true;
        localStorage.setItem("strangerCode", JSON.stringify(progresso));

        const concluidas = [];
        for (let i = 1; i <= 7; i++) {
            if (progresso["fase" + i]) concluidas.push(i);
        }
        // Mantém também a chave antiga, caso tenha sido usada em alguma versão anterior.
        localStorage.setItem("fasesConcluidas", JSON.stringify(concluidas));
    };

    window.voltarMenu = function () {
        window.location.href = "../index.html";
    };

    window.irParaProxima = function (numero) {
        window.concluirFase(numero);
        if (numero >= 1 && numero < 7) {
            window.location.href = "fase" + (numero + 1) + ".html";
        } else {
            window.location.href = "../index.html";
        }
    };

    window.faseAnterior = function (numero) {
        if (numero <= 1) window.voltarMenu();
        else window.location.href = "fase" + (numero - 1) + ".html";
    };
})();
