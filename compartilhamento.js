// Biblioteca de Compartilhamento Híbrido - SisPorta
// Opção 3: Tenta Gist, fallback QR Code, fallback Arquivo

// Biblioteca QRCode.js embutida (versão minificada)
!function(){var t="object"==typeof window&&window||"object"==typeof self&&self;"undefined"!=typeof exports?exports.QRCode=u:"function"==typeof define&&define.amd?define([],function(){return u}):t&&(t.QRCode=u);var e=function(){var r,t,e,o,n,i,a,s,d,h,c,l,f,u,g,w,v,p,b,m,y,B,C,E,x,k,A,T,_,R,D,I,S,M,P,L,O,N,F,q,U,H,j,$,z,V,W,G,Y,X,Z,J,K,Q="https://kazuhikoarase.github.io/qrcode-generator/js/qrcode.js",tt="QR Code Generator",et="Copyright (C) 2009 Kazuhiko Arase";function rt(r,t){if(void 0===r.length)throw r;var e=r.length,o=0,n=e,i=0;while(n>o){var a=Math.floor((o+n)/2);t(a)?o=a+1:n=a}return o}function ot(){if(i){clearTimeout(i);i=null}n();a();r=0}function nt(){if(i){clearTimeout(i);i=null}s();d();r=0}function it(){h();c();l();f();u()}function at(r,t,e,o){function n(){g(t,e,o)}i=setTimeout(n,r)}function st(t){r=t;if(!i)return;i.cancel();i=null}function dt(r){return ht(ct(r))}function ht(r){e=r;return ut(r,r.length)}function ct(r){if(/[\u0080-\uffff]/.test(r)){return lt(r)}return r}function lt(r){for(var t=[],e=0;e<r.length;e++){t.push(r.charCodeAt(e))}return t}function ft(r){return String.fromCharCode.apply(null,r)}function ut(r,t){var e=0,o=0,n=0,i=0,a=r.length,s=[];while(e<a){var d=r[e];if(d<128){s.push(String.fromCharCode(d));e+=1}else if(192==(224&d)){if(e+1>=a)throw"invalid encoding";var h=r[e+1];s.push(String.fromCharCode(((31&d)<<6)|63&h));e+=2}else if(224==(240&d)){if(e+2>=a)throw"invalid encoding";var h=r[e+1],c=r[e+2];s.push(String.fromCharCode(((15&d)<<12)|((63&h)<<6)|63&c));e+=3}else{if(240!=(248&d))throw"invalid encoding";if(e+3>=a)throw"invalid encoding";var h=r[e+1],c=r[e+2],l=r[e+3],f=((7&d)<<18)|((63&h)<<12)|((63&c)<<6)|63&l;if(f>65535){var u=f-65536;s.push(String.fromCharCode(55296|(u>>10)));s.push(String.fromCharCode(56320|(1023&u)))}else s.push(String.fromCharCode(f));e+=4}}return s.join("")}var gt=[1,0,0,1,1],wt=[0,1,0,1,1],vt=[0,1,1,0,0],pt=[1,0,1,0,0],bt=[1,0,0,0,1],mt={};mt[0]=[[0,0,0,0,0,0,0],[0,0,1,0,1,0,0],[0,1,0,1,0,1,0],[0,0,1,0,1,0,0],[0,1,0,1,0,1,0],[0,0,1,0,1,0,0],[0,0,0,0,0,0,0]];mt[1]=[[0,0,0,0,0,0,0],[0,1,1,1,1,1,0],[0,1,0,0,0,1,0],[0,1,0,0,0,1,0],[0,1,0,0,0,1,0],[0,1,1,1,1,1,0],[0,0,0,0,0,0,0]];mt[2]={};for(var yt in mt){yt=parseInt(yt);for(var Bt=0;Bt<7;Bt++){mt[2][Bt]=[];for(var Ct=0;Ct<7;Ct++)mt[2][Bt][Ct]=Bt%2==0?0:1}}return mt}();function u(r,t){this.typeNumber=r;this.errorCorrectionLevel=t;this.modules=null;this.moduleCount=0;this.dataCache=null;this.rsBlocks=null}u.stringToBytes=function(r){return dt(r)};u.createStringToBytes=ht;u.createBytesArray=function(){return Array.prototype.slice.call(arguments)};u.RS_BLOCK_TABLE=[[1,26,19],[1,26,16],[1,26,13],[1,26,9],[1,44,34],[1,44,28],[1,44,22],[1,44,16],[1,70,55],[1,70,44],[2,35,17],[2,35,13],[1,100,80],[2,50,32],[2,50,24],[4,25,9],[1,134,108],[2,67,43],[2,33,15,2,34,16],[2,33,11,2,34,12],[2,86,68],[4,43,27],[4,43,19],[4,43,15],[2,98,78],[4,49,31],[2,32,14,4,33,15],[4,39,13,1,40,14],[2,121,97],[2,60,38,2,61,39],[4,40,18,2,41,19],[4,40,14,2,41,15],[2,146,116],[3,58,36,2,59,37],[4,36,16,4,37,17],[4,36,12,4,37,13],[2,86,68,2,87,69],[4,69,43,1,70,44],[6,43,19,2,44,20],[6,43,15,2,44,16],[4,101,81],[1,80,50,4,81,51],[4,50,22,4,51,23],[3,36,12,8,37,13],[2,116,92,2,117,93],[6,58,36,2,59,37],[4,46,20,6,47,21],[7,42,14,4,43,15],[4,133,107],[8,59,37,1,60,38],[8,44,20,4,45,21],[12,33,11,4,34,12],[3,145,115,1,146,116],[4,64,40,5,65,41],[11,36,16,5,37,17],[11,36,12,5,37,13],[5,109,87,1,110,88],[5,65,41,5,66,42],[5,54,24,7,55,25],[11,36,12,7,37,13],[5,122,98,1,123,99],[7,73,45,3,74,46],[15,43,19,2,44,20],[3,45,15,13,46,16],[1,135,107,5,136,108],[10,74,46,1,75,47],[1,50,22,15,51,23],[2,42,14,17,43,15],[5,150,120,1,151,121],[9,69,43,4,70,44],[17,50,22,1,51,23],[2,42,14,19,43,15],[3,141,113,4,142,114],[3,70,44,11,71,45],[17,47,21,4,48,22],[9,39,13,16,40,14],[3,135,107,5,136,108],[3,67,41,13,68,42],[15,54,24,5,55,25],[15,43,15,10,44,16],[4,144,116,4,145,117],[17,68,42],[17,50,22,6,51,23],[19,46,16,6,47,17],[2,139,111,7,140,112],[17,74,46],[7,54,24,16,55,25],[34,37,13],[4,151,121,5,152,122],[4,75,47,14,76,48],[11,54,24,14,55,25],[16,45,15,14,46,16],[6,147,117,4,148,118],[6,73,45,14,74,46],[11,54,24,16,55,25],[30,46,16,2,47,17],[8,132,106,4,133,107],[8,75,47,13,76,48],[7,54,24,22,55,25],[22,45,15,13,46,16],[10,142,114,2,143,115],[19,74,46,4,75,47],[28,50,22,6,51,23],[33,46,16,4,47,17],[8,152,122,4,153,123],[22,73,45,3,74,46],[8,53,23,26,54,24],[12,45,15,28,46,16],[3,147,117,10,148,118],[3,73,45,23,74,46],[4,54,24,31,55,25],[11,45,15,31,46,16],[7,146,116,7,147,117],[21,73,45,7,74,46],[1,53,23,37,54,24],[19,45,15,26,46,16],[5,145,115,10,146,116],[19,75,47,10,76,48],[15,54,24,25,55,25],[23,45,15,25,46,16],[13,145,115,3,146,116],[2,74,46,29,75,47],[42,54,24,1,55,25],[23,45,15,28,46,16],[17,145,115],[10,74,46,23,75,47],[10,54,24,35,55,25],[19,45,15,35,46,16],[17,145,115,1,146,116],[14,74,46,21,75,47],[29,54,24,19,55,25],[11,45,15,46,46,16],[13,145,115,6,146,116],[14,74,46,23,75,47],[44,54,24,7,55,25],[59,46,16,1,47,17],[12,151,121,7,152,122],[12,75,47,26,76,48],[39,54,24,14,55,25],[22,45,15,41,46,16],[6,151,121,14,152,122],[6,75,47,34,76,48],[46,54,24,10,55,25],[2,45,15,64,46,16],[17,152,122,4,153,123],[29,74,46,14,75,47],[49,54,24,10,55,25],[24,45,15,46,46,16],[4,152,122,18,153,123],[13,74,46,32,75,47],[48,54,24,14,55,25],[42,45,15,32,46,16],[20,147,117,4,148,118],[40,75,47,7,76,48],[43,54,24,22,55,25],[10,45,15,67,46,16],[19,148,118,6,149,119],[18,75,47,31,76,48],[34,54,24,34,55,25],[20,45,15,61,46,16]]}();

const SisPortaShare = {
    // Configuração
    config: {
        gistEnabled: true,
        qrEnabled: true,
        fileEnabled: true,
        baseURL: window.location.origin + window.location.pathname.replace(/\/[^\/]*$/, '/')
    },

    // Função principal de compartilhamento
    async compartilhar(dados, tipo) {
        const resultado = {
            sucesso: false,
            metodo: null,
            dados: null,
            erro: null
        };

        // Validar dados
        if (!dados || !dados.territorio_id) {
            resultado.erro = 'Dados inválidos';
            return resultado;
        }

        // Tentar Gist primeiro (se online e habilitado)
        if (this.config.gistEnabled && navigator.onLine) {
            try {
                const gistResult = await this.compartilharViaGist(dados, tipo);
                if (gistResult.sucesso) {
                    return gistResult;
                }
            } catch (erro) {
                console.warn('Gist falhou, tentando alternativa:', erro);
            }
        }

        // Fallback 1: QR Code
        if (this.config.qrEnabled) {
            try {
                const qrResult = this.compartilharViaQRCode(dados, tipo);
                if (qrResult.sucesso) {
                    return qrResult;
                }
            } catch (erro) {
                console.warn('QR Code falhou, tentando arquivo:', erro);
            }
        }

        // Fallback 2: Arquivo tradicional
        if (this.config.fileEnabled) {
            resultado.sucesso = true;
            resultado.metodo = 'arquivo';
            resultado.dados = this.gerarArquivo(dados);
            return resultado;
        }

        resultado.erro = 'Nenhum método de compartilhamento disponível';
        return resultado;
    },

    // Método 1: GitHub Gist
    async compartilharViaGist(dados, tipo) {
        const resultado = {
            sucesso: false,
            metodo: 'gist',
            dados: null,
            erro: null
        };

        try {
            const gistData = {
                description: `SisPorta - ${dados.nome}`,
                public: false,
                files: {
                    'territorio.json': {
                        content: JSON.stringify(dados, null, 2)
                    }
                }
            };

            const response = await fetch('https://api.github.com/gists', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(gistData)
            });

            if (!response.ok) {
                throw new Error('Falha ao criar Gist: ' + response.status);
            }

            const gist = await response.json();
            const gistId = gist.id;
            const link = `${this.config.baseURL}${tipo}.html?gist=${gistId}`;

            resultado.sucesso = true;
            resultado.dados = {
                link: link,
                gistId: gistId,
                gistUrl: gist.html_url
            };

        } catch (erro) {
            resultado.erro = erro.message;
        }

        return resultado;
    },

    // Método 2: QR Code
    compartilharViaQRCode(dados, tipo) {
        const resultado = {
            sucesso: false,
            metodo: 'qrcode',
            dados: null,
            erro: null
        };

        try {
            // Comprimir dados (remover espaços desnecessários)
            const dadosComprimidos = JSON.stringify(dados);
            
            // Limitar tamanho (QR Code suporta até ~2953 bytes no modo binário)
            if (dadosComprimidos.length > 2800) {
                throw new Error('Dados muito grandes para QR Code');
            }

            // Gerar código único e salvar localmente
            const codigo = this.gerarCodigoUnico();
            localStorage.setItem(`sisporta_temp_${codigo}`, dadosComprimidos);

            // Criar link com código
            const link = `${this.config.baseURL}${tipo}.html?codigo=${codigo}`;

            // Gerar QR Code
            const qr = new QRCode(-1, 'L');
            qr.addData(link);
            qr.make();
            
            resultado.sucesso = true;
            resultado.dados = {
                codigo: codigo,
                link: link,
                qrCodeSVG: qr.createSvgTag(4, 0),
                qrCodeDataURL: qr.createDataURL(4, 0)
            };

        } catch (erro) {
            resultado.erro = erro.message;
        }

        return resultado;
    },

    // Método 3: Arquivo tradicional
    gerarArquivo(dados) {
        const dataStr = JSON.stringify(dados, null, 2);
        const blob = new Blob([dataStr], { type: 'application/json' });
        const url = URL.createObjectURL(blob);
        
        return {
            blob: blob,
            url: url,
            nome: `territorio_${dados.territorio_id}_${new Date().toISOString().split('T')[0]}.json`
        };
    },

    // Carregar território via método híbrido
    async carregarTerritorio() {
        const urlParams = new URLSearchParams(window.location.search);

        // Método 1: Via Gist
        if (urlParams.has('gist')) {
            const gistId = urlParams.get('gist');
            return await this.carregarDeGist(gistId);
        }

        // Método 2: Via código local
        if (urlParams.has('codigo')) {
            const codigo = urlParams.get('codigo');
            return this.carregarDeCodigo(codigo);
        }

        return null;
    },

    // Carregar de Gist
    async carregarDeGist(gistId) {
        try {
            const response = await fetch(`https://api.github.com/gists/${gistId}`);
            
            if (!response.ok) {
                throw new Error('Gist não encontrado');
            }

            const gist = await response.json();
            const arquivo = gist.files['territorio.json'];
            
            if (!arquivo) {
                throw new Error('Arquivo não encontrado no Gist');
            }

            return JSON.parse(arquivo.content);

        } catch (erro) {
            console.error('Erro ao carregar Gist:', erro);
            return null;
        }
    },

    // Carregar de código local
    carregarDeCodigo(codigo) {
        try {
            const dadosStr = localStorage.getItem(`sisporta_temp_${codigo}`);
            
            if (!dadosStr) {
                throw new Error('Código não encontrado');
            }

            // Limpar após carregar (opcional)
            // localStorage.removeItem(`sisporta_temp_${codigo}`);

            return JSON.parse(dadosStr);

        } catch (erro) {
            console.error('Erro ao carregar de código:', erro);
            return null;
        }
    },

    // Gerar código único
    gerarCodigoUnico() {
        return 'T' + Date.now().toString(36).toUpperCase() + 
               Math.random().toString(36).substr(2, 4).toUpperCase();
    },

    // Copiar para clipboard
    async copiarParaClipboard(texto) {
        try {
            if (navigator.clipboard && navigator.clipboard.writeText) {
                await navigator.clipboard.writeText(texto);
                return true;
            } else {
                // Fallback para navegadores antigos
                const textarea = document.createElement('textarea');
                textarea.value = texto;
                textarea.style.position = 'fixed';
                textarea.style.opacity = '0';
                document.body.appendChild(textarea);
                textarea.select();
                const sucesso = document.execCommand('copy');
                document.body.removeChild(textarea);
                return sucesso;
            }
        } catch (erro) {
            console.error('Erro ao copiar:', erro);
            return false;
        }
    },

    // Share API nativa (se disponível)
    async compartilharNativo(titulo, texto, url) {
        if (navigator.share) {
            try {
                await navigator.share({
                    title: titulo,
                    text: texto,
                    url: url
                });
                return true;
            } catch (erro) {
                if (erro.name !== 'AbortError') {
                    console.error('Erro ao compartilhar:', erro);
                }
                return false;
            }
        }
        return false;
    }
};

// Exportar para uso global
if (typeof window !== 'undefined') {
    window.SisPortaShare = SisPortaShare;
}
