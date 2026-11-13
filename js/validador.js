 function verificarChamada(no, nomeFuncao) {
        return (
            no &&
            no.type === "CallExpression" &&
            no.callee.type === "Identifier" &&
            no.callee.name === nomeFuncao
        );
    }

function identificarVariaveis(no) {

    const variaveis = [];

    function percorrer(no) {

        if (!no || typeof no !== "object") {
            return;
        }

        // Identifica o uso de uma variável.
        if (no.type === "Identifier") {

            variaveis.push(no.name);

            return;
        }

        // Percorre os elementos internos.
        for (const chave in no) {

            const valor = no[chave];

            if (Array.isArray(valor)) {

                valor.forEach(item => {

                    if (item && typeof item.type === "string") {
                        percorrer(item);
                    }

                });

            } else if (
                valor &&
                typeof valor.type === "string"
            ) {

                percorrer(valor);

            }

        }

    }

    percorrer(no);

    return [...new Set(variaveis)];

}


function analisarEstrutura(codigo) {

    let estrutura;

    try {

        // Transforma o código em uma estrutura analisável.
        estrutura = acorn.parse(codigo, {
            ecmaVersion: "latest"
        });

    } catch (erro) {

        return {
            sucesso: false,
            erro: "Erro de sintaxe: " + erro.message
        };

    }


    // Informações que queremos encontrar no código.
    const encontrados = {

        variaveis: [],
        atribuicoes: [],
        variaveisExibidas: [],
        prompt: 0,
        parseInt: 0,
        parseFloat: 0,
        documentWrite: 0

    };



    // Percorre a estrutura do código.
    function percorrer(no) {

        if (!no || typeof no !== "object") {
            return;
        }


        // Verifica declarações de variáveis.
        if (no.type === "VariableDeclaration") {

            encontrados.variaveis.push(no.kind);

        }

        // Verifica o valor inicial das variáveis.
if (no.type === "VariableDeclarator") {

    encontrados.atribuicoes.push({

        nome: no.id.name,

        recebePrompt: verificarChamada(
            no.init,
            "prompt"
        ),

        recebeParseInt: verificarChamada(
            no.init,
            "parseInt"
        ),

        recebeParseFloat: verificarChamada(
            no.init,
            "parseFloat"
        ),

        promptDentroParseInt:
            verificarChamada(no.init, "parseInt") &&
            verificarChamada(
            no.init.arguments[0],
            "prompt"
        ),

        promptDentroParseFloat:
            verificarChamada(no.init, "parseFloat") &&
            verificarChamada(
            no.init.arguments[0],
            "prompt"
        )

    });

}


        // Verifica chamadas de funções.
        if (no.type === "CallExpression") {

            if (
                no.callee.type === "Identifier"
            ) {

                if (no.callee.name === "prompt") {
                    encontrados.prompt++;
                }

                if (no.callee.name === "parseInt") {
                    encontrados.parseInt++;
                }

                if (no.callee.name === "parseFloat") {
                    encontrados.parseFloat++;
                }

            }


            // Verifica document.write().
            if (
                no.callee.type === "MemberExpression" &&
                no.callee.object.type === "Identifier" &&
                no.callee.object.name === "document" &&
                no.callee.property.name === "write"
            ) {

                encontrados.documentWrite++;

                // Identifica as variáveis utilizadas na exibição.
                no.arguments.forEach(argumento => {

                    const identificadores =
                        identificarVariaveis(argumento);

                    identificadores.forEach(nome => {

                        if (!encontrados.variaveisExibidas.includes(nome)) {

                            encontrados.variaveisExibidas.push(nome);

                        }

                    });

                });

            }

        }


        // Continua percorrendo os elementos internos.
        for (const chave in no) {

            const valor = no[chave];

            if (Array.isArray(valor)) {

                valor.forEach(item => {

                    if (item && typeof item.type === "string") {
                        percorrer(item);
                    }

                });

            } else if (
                valor &&
                typeof valor.type === "string"
            ) {

                percorrer(valor);

            }

        }

    }


    percorrer(estrutura);

    // Verificações das atribuições
    const atribuicoes = encontrados.atribuicoes;

    const variavelNome = atribuicoes.find(item =>
        item.recebePrompt
    );

    const variavelIdade = atribuicoes.find(item =>
        item.promptDentroParseInt
    );

    const variavelDias = atribuicoes.find(item =>
        (item.promptDentroParseInt || item.promptDentroParseFloat) &&
        item.nome !== variavelIdade?.nome
    );

    const temPrompt = Boolean(variavelNome);
    const temIdade = Boolean(variavelIdade);
    const temDias = Boolean(variavelDias);

    const variaveisExibidas = encontrados.variaveisExibidas;

    const nomeExibido = variaveisExibidas.includes(variavelNome?.nome);
    const idadeExibida = variaveisExibidas.includes(variavelIdade?.nome);
    const diasExibidos = variaveisExibidas.includes(variavelDias?.nome);
    const todasVariaveisExibidas =
    nomeExibido &&
    idadeExibida &&
    diasExibidos;
        

    return {
    sucesso: true,
    encontrados: encontrados,
    validacao: {
        temPrompt: temPrompt,
        temIdade: temIdade,
        temDias: temDias,
        nomeExibido: nomeExibido,
        idadeExibida: idadeExibida,
        diasExibidos: diasExibidos,
        todasVariaveisExibidas: todasVariaveisExibidas
    }
};

}
