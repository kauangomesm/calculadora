;(function () {
    const p_resultado = document.getElementById('p_resultado')
    const d_teclado = document.getElementById('d_teclado')
    const d_temas = document.getElementById('tema_1')
    const d_numero = document.getElementById('aux')
    const d_operacao = document.getElementById('operação')
    let historico = 'Vazio'
    let equacaoAux = '';
    let resultadoAux = '';
    let SinalAux = '';
    historico = AtualizaStorage()

    let aux = null;
    let operacao = null;
    const root = document.querySelector(':root')
    const temas = [...d_temas.children]

    function clicoutemas() {
        if (d_temas.getAttribute('tema') != 2) {
            d_temas.setAttribute('tema', parseInt(d_temas.getAttribute('tema')) + 1)
        } else {
            d_temas.setAttribute('tema', 0)
        }

        // Temas (mesmo código existente)
        if (d_temas.getAttribute('tema') == 0) {
            root.style.setProperty('--cor-body', '#3B4664');
            root.style.setProperty('--cor-resultado', '#191F32');
            root.style.setProperty('--cor-font-primaria', '#FDFFFF');
            root.style.setProperty('--cor-font-secundaria', '#464E59');
            root.style.setProperty('--cor-font-terciaria', '#fff9ff');
            root.style.setProperty('--cor-teclado', '#252D44');
            root.style.setProperty('--cor-teclas', '#E9E3DC');
            root.style.setProperty('--cor-teclas-hover', '#ffffff');
            root.style.setProperty('--cor-teclaEnter', '#D13F30');
            root.style.setProperty('--cor-teclaEnter-hover', '#ec5949');
            root.style.setProperty('--cor-teclaReset', '#647298');
            root.style.setProperty('--cor-teclaReset-hover', '#8b9dce')
            root.style.setProperty('--cor-box-shadow-teclas', '#b4a398')
            root.style.setProperty('--cor-box-shadow-reset', '#424e73')
            root.style.setProperty('--cor-box-shadow-enter', '#922518')
            root.style.setProperty('--cor-proxtema', '#00decf');
        }
        if (d_temas.getAttribute('tema') == 2) {
            root.style.setProperty('--cor-body', '#e6e6e6');
            root.style.setProperty('--cor-resultado', '#eeeeee');
            root.style.setProperty('--cor-font-primaria', '#39382f');
            root.style.setProperty('--cor-font-secundaria', '#3a3a30');
            root.style.setProperty('--cor-font-terciaria', '#fff9ff');
            root.style.setProperty('--cor-teclado', '#d3cdcd');
            root.style.setProperty('--cor-teclas', '#e5e4e0');
            root.style.setProperty('--cor-teclas-hover', '#ffffff');
            root.style.setProperty('--cor-teclaEnter', '#c85401');
            root.style.setProperty('--cor-teclaEnter-hover', '#ff8b38');
            root.style.setProperty('--cor-teclaReset', '#388187');
            root.style.setProperty('--cor-teclaReset-hover', '#62b5bd')
            root.style.setProperty('--cor-box-shadow-teclas', '#b6a499')
            root.style.setProperty('--cor-box-shadow-reset', '#1c5c64')
            root.style.setProperty('--cor-box-shadow-enter', '#883900')
            root.style.setProperty('--cor-proxtema', '#D13F30');
        }
        if (d_temas.getAttribute('tema') == 1) {
            root.style.setProperty('--cor-body', '#17062a');
            root.style.setProperty('--cor-resultado', '#1e0836');
            root.style.setProperty('--cor-font-primaria', '#fbe23d');
            root.style.setProperty('--cor-font-secundaria', '#fff9ff');
            root.style.setProperty('--cor-font-terciaria', '#fff9ff');
            root.style.setProperty('--cor-teclado', '#1e0836');
            root.style.setProperty('--cor-teclas', '#331b4d');
            root.style.setProperty('--cor-teclas-hover', '#6b34ac');
            root.style.setProperty('--cor-teclaEnter', '#00decf');
            root.style.setProperty('--cor-teclaEnter-hover', '#94fff9');
            root.style.setProperty('--cor-teclaReset', '#56077c');
            root.style.setProperty('--cor-teclaReset-hover', '#8631b0')
            root.style.setProperty('--cor-box-shadow-teclas', '#871b9f')
            root.style.setProperty('--cor-box-shadow-reset', '#bf15f5')
            root.style.setProperty('--cor-box-shadow-enter', '#73f7ee')
            root.style.setProperty('--cor-proxtema', '#c85401');
        }
    }

    document.addEventListener('keydown', (e) => {
        const key = e.key;

        // Reseta (Esc)
        if (key === 'Escape') {
            p_resultado.textContent = '';
            aux = null;
            operacao = null;
            d_numero.textContent = '';
            d_operacao.textContent = '';
            return;
        }

        // Backspace (deletar último dígito)
        if (key === 'Backspace') {
            const a = [...p_resultado.textContent];
            a.pop();
            p_resultado.textContent = a.join('');
            return;
        }

        // Enter = calcular
        if (key === 'Enter' || key === '=') {
            if (temNum() && aux != null) {
                const resultado = Somar(aux, p_resultado.textContent, operacao);
                AdicionarHistorico(p_resultado.textContent, operacao, true)
                aux = null;
                d_numero.textContent = '';
                operacao = null;
                d_operacao.textContent = '';
                p_resultado.textContent = resultado;
            }
            return;
        }

        // Operações
        if (['+', '-', '*', '/'].includes(key)) {
            let op = key === '*' ? 'x' : key === '/' ? '÷' : key;
            if (temNum() && aux === null) {
                operacao = op;
                AdicionarHistorico(p_resultado.textContent, operacao, false)
                aux = p_resultado.textContent;
                d_numero.textContent = aux;
                p_resultado.textContent = '';
                d_operacao.textContent = operacao;
            } else if (temNum() && aux != null) {
                const resultado = Somar(aux, p_resultado.textContent, operacao);
                aux = resultado;
                d_numero.textContent = aux;
                operacao = op;
                AdicionarHistorico(p_resultado.textContent, operacao, false)
                d_operacao.textContent = operacao;
                p_resultado.textContent = '';
            }
            return;
        }

        if ((/^[0-9]$/.test(key) || key === '.' || key === ',') && p_resultado.textContent.length < 17) {
            if ((key === '.' || key === ',') && p_resultado.textContent.includes('.')) return;
            p_resultado.textContent += (key === ',' ? '.' : key);
        }
    });

    function clicouTeclado(e) {
        if (e.target.getAttribute('id') === 'reset') {
            p_resultado.textContent = ''
            aux = null;
            operacao = null;
            d_numero.textContent = '';
            d_operacao.textContent = '';
        }
        if (e.target.getAttribute('icone') === 'del') {
            const a = [...p_resultado.textContent]
            a.pop()
            p_resultado.textContent = a.join('')
        }
        if (p_resultado.textContent.length < 17 && possoAdicionar(e)) {
            p_resultado.textContent += e.target.textContent;
        } else {
            if (temNum() && aux != null && e.target.getAttribute('id') === 'enter') {
                resultado = Somar(aux, p_resultado.textContent, operacao);
                AdicionarHistorico(p_resultado.textContent, operacao, true)
                aux = null;
                d_numero.textContent = '';
                operacao = null;
                d_operacao.textContent = '';
                p_resultado.textContent = resultado;
            } else if (temNum() && aux != null && e.target.getAttribute('class') === 'tecla op') {
                resultado = Somar(aux, p_resultado.textContent, operacao);
                aux = resultado;
                d_numero.textContent = aux;
                operacao = e.target.textContent;
                AdicionarHistorico(p_resultado.textContent, operacao, false)
                d_operacao.textContent = operacao;
                p_resultado.textContent = '';
            } else if (temNum() && aux === null && e.target.getAttribute('class') === 'tecla op') {
                operacao = e.target.textContent;
                AdicionarHistorico(p_resultado.textContent, operacao, false)
                aux = p_resultado.textContent;
                d_numero.textContent = aux;
                p_resultado.textContent = '';
                d_operacao.textContent = operacao;
            }
        }
    }

    d_teclado.addEventListener("click", clicouTeclado);
    d_temas.addEventListener("click", clicoutemas);

    function possoAdicionar(e) {
        if (p_resultado.textContent == "") {
            if (e.target.getAttribute('class') === 'tecla num' || e.target.getAttribute('id') === '-' || e.target.getAttribute('id') === '.') {
                return true;
            }
        } else {
            if (e.target.getAttribute('class') === 'tecla num') {
                return true;
            } else if (e.target.getAttribute('id') === '.' && !p_resultado.textContent.includes('.')) {
                return true;
            }
        }
    }

    function temNum() {
        const tela = [...p_resultado.textContent]
        const numeros = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9']
        return tela.some(el => numeros.includes(el))
    }

    function Somar(num1, num2, operacao) {
        num1 = parseFloat(num1);
        num2 = parseFloat(num2);
        if (isNaN(num1) || isNaN(num2)) return 0;
        let resultado;
        switch (operacao) {
            case '+': resultado = num1 + num2; break;
            case '-': resultado = num1 - num2; break;
            case 'x': resultado = num1 * num2; break;
            case '÷': resultado = num2 !== 0 ? num1 / num2 : 0; break;
            default: return 0;
        }
        return parseFloat(resultado.toFixed(5));
    }

    const btn_historico = document.getElementById('btn_historico')
    const overlay_historico = document.getElementById('overlay_historico')

    if (btn_historico && overlay_historico) {
        btn_historico.addEventListener('click', () => {
            atualizarVisualizacaoHistorico();
            overlay_historico.classList.add('show');
        })

        overlay_historico.addEventListener('click', (e) => {
            // Fecha ao clicar no fundo
            if (e.target === overlay_historico) {
                overlay_historico.classList.remove('show');
            }
        });

        overlay_historico.addEventListener('click', (e) => {
            const btn = e.target.closest('.btn-delete');
            if (!btn) return;
            const itemElem = btn.closest('.historico-item');
            if (itemElem) {
                itemElem.classList.add('fade-out');
                const idx = parseInt(btn.getAttribute('data-index'));
                setTimeout(() => removerItemHistorico(idx), 200);
            }
        });

        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape') overlay_historico.classList.remove('show')
        })
    }

    function AdicionarHistorico(valor, operacao, somar) {
        if (historico === 'Vazio' || !Array.isArray(historico)) historico = [];
        const numValor = parseFloat(valor);
        if (resultadoAux === '') resultadoAux = numValor;
        if (!SinalAux && operacao) SinalAux = operacao;

        if (somar) {
            let resultado = Somar(resultadoAux, numValor, SinalAux);
            equacaoAux += `${numValor}=${resultado}`;
            historico.push(equacaoAux);
            localStorage.setItem('historico', historico.join(','));
            atualizarVisualizacaoHistorico();
            resultadoAux = '';
            equacaoAux = '';
            SinalAux = '';
        } else {
            if (equacaoAux === '') {
                resultadoAux = numValor;
                SinalAux = operacao;
                equacaoAux = `${numValor}${operacao}`;
            } else {
                resultadoAux = Somar(resultadoAux, numValor, SinalAux);
                SinalAux = operacao;
                equacaoAux += `${numValor}${operacao}`;
            }
        }
        equacaoAux = equacaoAux.replace(/null|undefined/g, '');
    }

    function atualizarVisualizacaoHistorico() {
        const overlay = document.getElementById('overlay_historico');
        overlay.innerHTML = '';

        if (historico === 'Vazio' || !Array.isArray(historico) || historico.length === 0) {
            overlay.innerHTML = '<p id="vazio">Nenhum Historico</p>';
            return;
        }

        historico.forEach((item, index) => {
            const div = document.createElement('div');
            div.className = 'historico-item';

            const p = document.createElement('p');
            p.textContent = item;

            const btnWrapper = document.createElement('button');
            btnWrapper.className = 'btn-delete';
            btnWrapper.setAttribute('data-index', index);
            btnWrapper.setAttribute('title', 'Remover');

            btnWrapper.innerHTML = `
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" aria-hidden="true">
                    <title>trash-can</title>
                    <path d="M9,3V4H4V6H5V19A2,2 0 0,0 7,21H17A2,2 0 0,0 19,19V6H20V4H15V3H9M9,8H11V17H9V8M13,8H15V17H13V8Z" />
                </svg>
            `;

            div.appendChild(p);
            div.appendChild(btnWrapper);
            overlay.appendChild(div);
        });
    }


    function removerItemHistorico(index) {
        if (Array.isArray(historico)) {
            if (index < 0 || index >= historico.length) {
                atualizarVisualizacaoHistorico();
                return;
            }
            historico.splice(index, 1);
            if (historico.length === 0) historico = 'Vazio';
            localStorage.setItem('historico', Array.isArray(historico) ? historico.join(',') : historico);
            atualizarVisualizacaoHistorico();
        }
    }

    function AtualizaStorage() {
        const item = localStorage.getItem('historico');
        if (item === null) {
            localStorage.setItem('historico', 'Vazio');
            return 'Vazio';
        } else if (item === 'Vazio') {
            return 'Vazio';
        } else {
            return item.split(',');
        }
    }
})();
