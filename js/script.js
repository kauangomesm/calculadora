// ;(function () {
    const p_resultado = document.getElementById('p_resultado')
    const d_teclado = document.getElementById('d_teclado')
    
    // p_resultado.textContent = ""


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
            if(!p_resultado.textContent){
                return
            }

            if(findOp() === false){
                p_resultado.textContent += tecla
            }
            else{
                
                

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
                    if(index === undefined){
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
        const operadores = ['+' , '-', 'x', '/']
        const tela = [...p_resultado.textContent]
        let index = undefined
        operadores.forEach((e) => {
            if(tela.indexOf(e) != -1){
                 index =  tela.indexOf(e)
            }
        })

        return index

    }
    function findOp(){

        const operadores = ['+' , '-', 'x', '/']

        const tela = [...p_resultado.textContent]

        return operadores.some(function (elemento) {
            
             return tela.indexOf(elemento) != -1
            
        })
        
    }

    function soma(){

        const tela = [...p_resultado.textContent]
        const indexop = findindexop()
        const op = tela[indexop]
        if(indexop === undefined){
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
    
 

    
    












    
// })()