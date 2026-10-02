// Mostra ou esconde a dica
function mostrarDica() {
    const dica = document.getElementById("dica");

    if (dica.style.display === "none") {
        dica.style.display = "block";
    } else {
        dica.style.display = "none";
    }
}

// Mostra ou esconde o gabarito
function mostrarGabarito() {
    const gabarito = document.getElementById("gabarito");

    if (gabarito.style.display === "none") {
        gabarito.style.display = "block";
    } else {
        gabarito.style.display = "none";
    }
}

// Limpa o editor e o resultado
function recomecarCodigo() {
    document.getElementById("codigo").value = "";
    document.getElementById("resultado").innerHTML = "";

    const verificacao = document.getElementById("verificacao");

    if (verificacao) {
        verificacao.innerText = "";
    }
}

// Executa o código escrito pelo aluno
function rodarCodigo() {
    const codigo = document.getElementById("codigo").value;
    const resultado = document.getElementById("resultado");

    resultado.innerHTML = "";

    try {
        const iframe = document.createElement("iframe");

        iframe.style.width = "100%";
        iframe.style.height = "300px";
        iframe.style.border = "1px solid #ccc";
        iframe.style.backgroundColor = "white";

        // Executa o código em um iframe isolado
        iframe.setAttribute("sandbox", "allow-scripts");

        resultado.appendChild(iframe);

        iframe.srcdoc = codigo;

    } catch (erro) {
        resultado.innerText =
            "Erro ao executar o código: " + erro.message;
    }
}

// Verifica se o aluno cumpriu os requisitos da fase
function verificarCodigo() {
    const codigo = document.getElementById("codigo").value;
    const verificacao = document.getElementById("verificacao");

    let erros = [];

    // Remove comentários e espaços desnecessários
    const codigoLimpo = codigo
        .replace(/\/\*[\s\S]*?\*\//g, "")
        .replace(/\/\/.*$/gm, "");

    // Verifica se o código possui um vetor
    if (!/\b(let|const|var)\s+energias\s*=\s*\[\s*\]/.test(codigoLimpo)) {
        erros.push("Crie um vetor chamado energias para armazenar as energias.");
    }

    // Verifica se o código adiciona energia ao vetor
    if (!/\benergias\s*\.\s*push\s*\(/.test(codigoLimpo)) {
        erros.push("Utilize energias.push() para adicionar as energias ao vetor.");
    }

    // Verifica se existe uma variável para armazenar o total
    if (!/\b(let|const|var)\s+total\b/.test(codigoLimpo)) {
        erros.push("Crie uma variável chamada total para armazenar a soma das energias.");
    }

    // Verifica se existe um laço for
    if (!/\bfor\s*\(/.test(codigoLimpo)) {
        erros.push("Utilize um laço for para percorrer o vetor de energias.");
    }

    // Verifica se existe uma condição para fechar o portal
    if (!/\bif\s*\(/.test(codigoLimpo)) {
        erros.push("Utilize if para verificar se há energia suficiente.");
    }

    // Verifica se existe else
    if (!/\belse\b/.test(codigoLimpo)) {
        erros.push("Utilize else para tratar a falta de energia.");
    }

    // Verifica o acesso aos elementos HTML
    if (!/document\s*\.\s*getElementById\s*\(/.test(codigoLimpo)) {
        erros.push("Utilize getElementById() para acessar os elementos da página.");
    }

    // Verifica se o código atualiza a página
    if (!/\.\s*(innerText|innerHTML)\s*=/.test(codigoLimpo)) {
        erros.push("Utilize innerText ou innerHTML para mostrar informações na página.");
    }

    // Verifica se existem funções
    if (!/\bfunction\s+coletarEnergia\s*\(/.test(codigoLimpo)) {
        erros.push("Crie a função coletarEnergia() para coletar as energias.");
    }

    if (!/\bfunction\s+fecharPortal\s*\(/.test(codigoLimpo)) {
        erros.push("Crie a função fecharPortal() para verificar se o portal pode ser fechado.");
    }

    // Verifica se existe uma comparação com 30
    if (!/\btotal\s*>=\s*30\b/.test(codigoLimpo)) {
        erros.push("Verifique se o total de energia é maior ou igual a 30.");
    }

    // Exibe o resultado da verificação
    if (erros.length === 0) {
        verificacao.innerText =
            "Parabéns! Você cumpriu todos os requisitos da fase 7!";

        verificacao.style.color = "green";

        // Desbloqueia a próxima fase
        localStorage.setItem("fase7", "true");
    } else {
        verificacao.innerText =
            "Ainda faltam alguns requisitos:\n\n" + erros.join("\n");

        verificacao.style.color = "red";
    }
}