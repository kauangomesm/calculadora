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

        if(e.target.getAttribute('class') === 'tecla op'){
            if(!p_resultado.textContent){
                return
            }

            if(findOp() === false){
                p_resultado.textContent += tecla
            }
            else{
                soma()
            }

            


        }


        

        if(e.target.getAttribute('id') === '.'){   
            //  console.log('clicou')

            if(p_resultado.textContent){

                // console.log('tem coisa')

                if(findOp() === false){
                    if([...p_resultado.textContent].indexOf('.') === -1){
                        p_resultado.textContent += tecla
                    }
                }
                else{
                    findindexop()
                }
            }
        }


        

    }

    function findindexop(){
        const operadores = ['+' , '-', 'x', '/']
        const tela = [...p_resultado.textContent]

        

        
    }
    function findOp(){

        const operadores = ['+' , '-', 'x', '/']

        const tela = [...p_resultado.textContent]

        return operadores.some(function (elemento) {
            
             return tela.indexOf(elemento) != -1
            
        })
        
    }



    d_teclado.addEventListener("click", clicouTeclado)
    
 

    
    












    
// })()