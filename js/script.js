

;(function () {
    const p_resultado = document.getElementById('p_resultado')
    const d_teclado = document.getElementById('d_teclado')
    
    // p_resultado.textContent = ""


    function clicouTeclado(e){

        // retorna a função se o click foi no elemento pai
        if(e.target.getAttribute('id') === 'd_teclado'){
            return
        }
        
        // cria uma constante tecla para o valor do id
       const tecla = parseFloat(e.target.getAttribute('id'))



       // se for um numero adiciona ele ao visor / resultado 
        if(e.target.getAttribute('class') === 'tecla num'){

            p_resultado.textContent += tecla
        }

        if(e.target.getAttribute('id') === 'reset'){
            
            p_resultado.textContent = ''
        }

        if(e.target.getAttribute('id') === 'del'){
            
            [...p_resultado.textContent].pop()
        }

    }


    d_teclado.addEventListener("click", clicouTeclado)
    
 

    
    












    
})()