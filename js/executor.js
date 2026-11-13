
function executarCodigo(codigo, entradas = []) {

    return new Promise((resolve) => {

        const workerCodigo = `

            self.onmessage = function(event) {

                const codigo = event.data.codigo;
                const entradas = event.data.entradas;

                let indice = 0;
                let resultado = "";

                function promptSimulado() {

                    return entradas[indice++] ?? null;

                }

                const documento = {

                    write: function(texto) {

                        resultado += String(texto);

                    }

                };

                try {

                    const funcao = new Function(
                        "prompt",
                        "document",
                        codigo
                    );

                    funcao(promptSimulado, documento);

                    self.postMessage({

                        sucesso: true,
                        resultado: resultado

                    });

                } catch (erro) {

                    self.postMessage({

                        sucesso: false,
                        erro: erro.message

                    });

                }

            };

        `;

        const blob = new Blob(
            [workerCodigo],
            { type: "application/javascript" }
        );

        const url = URL.createObjectURL(blob);

        const worker = new Worker(url);

        const tempoLimite = setTimeout(() => {

            worker.terminate();
            URL.revokeObjectURL(url);

            resolve({

                sucesso: false,
                erro: "O código demorou demais para executar."

            });

        }, 2000);

        worker.onmessage = function(event) {

            clearTimeout(tempoLimite);

            worker.terminate();
            URL.revokeObjectURL(url);

            resolve(event.data);

        };

        worker.onerror = function() {

            clearTimeout(tempoLimite);

            worker.terminate();
            URL.revokeObjectURL(url);

            resolve({

                sucesso: false,
                erro: "Não foi possível executar o código."

            });

        };

        worker.postMessage({

            codigo: codigo,
            entradas: entradas

        });

    });

}
