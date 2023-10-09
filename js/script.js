
;(function () {
    const p_resultado = document.getElementById('p_resultado')
    const d_teclado = document.getElementById('d_teclado')
    const d_temas = document.getElementById('temas')



    //Variaveis de cores CSS
    const root = document.querySelector(':root')
    const temas = [...d_temas.children]


    function clicoutemas(e){

        if(e.target.getAttribute('id') === 'tema_1'){   

            root.style.setProperty('--cor-body', '#3B4664');
            root.style.setProperty('--cor-resultado','#191F32');
            root.style.setProperty('--cor-font-primaria','#FDFFFF');
            root.style.setProperty('--cor-font-secundaria','#464E59');
            root.style.setProperty('--cor-font-terciaria','#fff9ff');
            root.style.setProperty('--cor-teclado','#252D44');
            root.style.setProperty('--cor-teclas','#E9E3DC');
            root.style.setProperty('--cor-teclas-hover','#ffffff');
            root.style.setProperty('--cor-teclaEnter','#D13F30');
            root.style.setProperty('--cor-teclaEnter-hover','#ec5949');
            root.style.setProperty('--cor-teclaReset','#647298');
            root.style.setProperty('--cor-teclaReset-hover','#8b9dce')
            root.style.setProperty('--cor-box-shadow-teclas','#b4a398')
            root.style.setProperty('--cor-box-shadow-reset','#424e73')
            root.style.setProperty('--cor-box-shadow-enter','#922518')

            temas.forEach(function (el){
                if(el === e.target){
                    el.classList.add('act')
                }
                else {
                    el.classList.remove('act')
                }
            })
            

        }

        if(e.target.getAttribute('id') === 'tema_2'){
            
            root.style.setProperty('--cor-body', '#e6e6e6');
            root.style.setProperty('--cor-resultado','#eeeeee');
            root.style.setProperty('--cor-font-primaria','#39382f');
            root.style.setProperty('--cor-font-secundaria','#3a3a30');
            root.style.setProperty('--cor-font-terciaria','#fff9ff');
            root.style.setProperty('--cor-teclado','#d3cdcd');
            root.style.setProperty('--cor-teclas','#e5e4e0');
            root.style.setProperty('--cor-teclas-hover','#ffffff');
            root.style.setProperty('--cor-teclaEnter','#c85401');
            root.style.setProperty('--cor-teclaEnter-hover','#ff8b38');
            root.style.setProperty('--cor-teclaReset','#388187');
            root.style.setProperty('--cor-teclaReset-hover','#62b5bd')
            root.style.setProperty('--cor-box-shadow-teclas','#b6a499')
            root.style.setProperty('--cor-box-shadow-reset','#1c5c64')
            root.style.setProperty('--cor-box-shadow-enter','#883900')

            temas.forEach(function (el){
                if(el === e.target){
                    el.classList.add('act')
                }
                else{
                    el.classList.remove('act')
                }
            })
            

    

        }
        if(e.target.getAttribute('id') === 'tema_3'){

            root.style.setProperty('--cor-body', '#17062a');
            root.style.setProperty('--cor-resultado','#1e0836');
            root.style.setProperty('--cor-font-primaria','#fbe23d');
            root.style.setProperty('--cor-font-secundaria','#fff9ff');
            root.style.setProperty('--cor-font-terciaria','#fff9ff');
            root.style.setProperty('--cor-teclado','#1e0836');
            root.style.setProperty('--cor-teclas','#331b4d');
            root.style.setProperty('--cor-teclas-hover','#6b34ac');
            root.style.setProperty('--cor-teclaEnter','#00decf');
            root.style.setProperty('--cor-teclaEnter-hover','#94fff9');
            root.style.setProperty('--cor-teclaReset','#56077c');
            root.style.setProperty('--cor-teclaReset-hover','#8631b0')
            root.style.setProperty('--cor-box-shadow-teclas','#871b9f')
            root.style.setProperty('--cor-box-shadow-reset','#bf15f5')
            root.style.setProperty('--cor-box-shadow-enter','#73f7ee')

            temas.forEach(function (el){
                if(el === e.target){
                    el.classList.add('act')
                }
                else{
                    el.classList.remove('act')
                }
            })
        }

       



    }


    function clicouTeclado(e){

        // retorna a função se o click foi no elemento pai
        if(e.target.getAttribute('id') === 'd_teclado'){
            return
        }
        
        // cria uma constante tecla para o valor do id
       const tecla = e.target.getAttribute('id')



       // se for um numero adiciona ele ao visor / resultado 
        if(e.target.getAttribute('class') === 'tecla num'){

            p_resultado.textContent += tecla
        }

        //simplesmente limpa o p_resultado
        if(e.target.getAttribute('id') === 'reset'){
            
            p_resultado.textContent = ''
        }

        //remove o ultimo numero ou operador digitado
        if(e.target.getAttribute('id') === 'del'){
            
            const a = [...p_resultado.textContent]
            a.pop()
            p_resultado.textContent = a.join('')
               
        }

        //Adicionando operadores
        if(e.target.getAttribute('class') === 'tecla op'){
            if(!p_resultado.textContent && e.target.getAttribute('id') === '-'){
                p_resultado.textContent = tecla
                return
            }
            if(!p_resultado.textContent && e.target.getAttribute('id') != '-'){
                return
            }
            
            

            
            if([...p_resultado.textContent][0] === `-`){
                if([...p_resultado.textContent].slice(1 ,[...p_resultado.textContent].length) == ``){
                    return
                }
                else{
                    if(findOp() === true){
                        console.log([...p_resultado.textContent].slice(findindexop() + 1, [...p_resultado.textContent].length))
                        if([...p_resultado.textContent].slice(findindexop() + 1, [...p_resultado.textContent].length) != ''){
                            p_resultado.textContent = soma()
                            p_resultado.textContent += tecla
        
                        }
        
                    }
                    else{
                        p_resultado.textContent += tecla
                    }


                }



            }

            if(findOp() === true){
                console.log([...p_resultado.textContent].slice(findindexop() + 1, [...p_resultado.textContent].length))
                if([...p_resultado.textContent].slice(findindexop() + 1, [...p_resultado.textContent].length) != ''){
                    p_resultado.textContent = soma()
                    p_resultado.textContent += tecla

                }

            }

             else if (findOp() === false){
                
                p_resultado.textContent += tecla
            }
            else{

                if([...p_resultado.textContent].slice(findindexop() + 1, [...p_resultado.textContent].length) == ''){
                    
                    return
                }
            }
        }


        
        //Adicionando (.)
        if(e.target.getAttribute('id') === '.'){   

            if(p_resultado.textContent){


                if(findOp() === false){
                    if([...p_resultado.textContent].indexOf('.') === -1){
                        p_resultado.textContent += tecla
                    }
                }
                else{

                    const index = findindexop()
                    if(index == 0){
                        return
                    }
                    else{
                        if([...p_resultado.textContent].slice(index +1, [...p_resultado.textContent].length).indexOf('.') === -1){
                            p_resultado.textContent += tecla 
                        }
                    }
                    

                }
            }
        }

        //Somar
        if(e.target.getAttribute('id') === 'enter'){
            

            if(p_resultado.textContent === '' || findOp() === false || [...p_resultado.textContent].slice(findindexop() + 1, [...p_resultado.textContent].length) == ''){
                return
            }
                p_resultado.textContent = soma()
            
        }


        

    }

    function findindexop(){
        let index = 0
        const operadores = ['+' , '-', 'x', '/']

        const tela = [...p_resultado.textContent]
        let tela_agora = [...p_resultado.textContent]
            if(tela[0] === '-'){
                tela_agora = tela.slice(1, tela.length)
                index = 1
            }

        

        operadores.forEach((e) => {
            if(tela_agora.indexOf(e) != -1){

                 index +=  parseInt(tela_agora.indexOf(e))
            }
        })

        return index

    }
    function findOp(){

        const operadores = ['+' , '-', 'x', '/']

        const tela = [...p_resultado.textContent]
        let tela_agora = [...p_resultado.textContent]
            if(tela[0] === '-' && tela[1] != ''){
                tela_agora = tela.slice(1, tela.length)
            }
            
        
        return operadores.some(function (elemento) {
            
             return tela_agora.indexOf(elemento) != -1
            
        })
        
    }

    function soma(){

        const tela = [...p_resultado.textContent]
        const indexop = findindexop()

        
        
        const op = tela[indexop]
        if(indexop == 0){
            return
        }
        else{
            const n1 = (parseFloat((tela.slice(0, indexop)).join('')))

            const n2 = (parseFloat((tela.slice(indexop + 1, tela.length)).join('')))

            if(op === '+'){
                return n1 + n2
            }
            else if(op === '-'){
                return n1 - n2
            }
            else if(op === 'x'){
                return n1 * n2
            }
            else if(op === '/'){
                return n1 / n2
            }
            
            
        }


    }



    d_teclado.addEventListener("click", clicouTeclado)

    d_temas.addEventListener("click", clicoutemas)
    
 

    
    












    
})()