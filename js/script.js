

;(function () {
    const p_resultado = document.getElementById('p_resultado')
    const d_teclado = document.getElementById('d_teclado')
    const d_temas = document.getElementById('tema_1')
    aux = null;
    console.log(aux);



    //Variaveis de cores CSS
    const root = document.querySelector(':root')
    const temas = [...d_temas.children]


    function clicoutemas(){
        if(d_temas.getAttribute('tema') != 2){
            d_temas.setAttribute('tema', parseInt(d_temas.getAttribute('tema')) + 1)
        }else{
            d_temas.setAttribute('tema', 0)
        }

        if(d_temas.getAttribute('tema') == 0) {
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
            root.style.setProperty('--cor-proxtema','#00decf');

        }
        if(d_temas.getAttribute('tema') == 2){
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
            root.style.setProperty('--cor-proxtema','#D13F30');
        }
        if(d_temas.getAttribute('tema') == 1){
            {
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
            root.style.setProperty('--cor-proxtema','#c85401');
        }
    }
}


    function clicouTeclado(e)
    {
        //Limpa a tela
         if(e.target.getAttribute('id') === 'reset'){
            
            p_resultado.textContent = ''
        }

        //remove o ultimo numero
        if(e.target.getAttribute('id') === 'del'){
            
            const a = [...p_resultado.textContent]
            a.pop()
            p_resultado.textContent = a.join('')
               
        }

        // Verifica se é possivel adicionar o elemento a conta
        if(p_resultado.textContent.length <17 && possoAdicionar(e))
        {
            p_resultado.textContent += e.target.textContent;
        }


        else
        {
            if(temNum())
            {
                if(aux != null)
                {
                    
                }
            }
        }
    }

    d_teclado.addEventListener("click", clicouTeclado)

    d_temas.addEventListener("click", clicoutemas)
     
})()


function possoAdicionar(e)
{
    if(p_resultado.textContent == "")
    {   
        //Adiciona o elemento quando a conta está vazia se o elemento for um numero ou "-" ou um "."
        if(e.target.getAttribute('class') === 'tecla num' || e.target.getAttribute('id') === '-' || e.target.getAttribute('id') === '.')
        {
            return true;
        }     
    }
    else
    {
         if(e.target.getAttribute('class') === 'tecla num')
         {
            return true;
         }
         else if (e.target.getAttribute('id') === '.' && !p_resultado.textContent.includes('.'))
         {
            return true;
         }
    
    }

        
}

function temNum()
{
    tela = [...p_resultado.textContent]
    numeros = ['0','1','2','3','4','5','6','7','8','9']
    bool = false;

    tela.forEach(function(elemento) {
        if(numeros.includes(elemento))
        {
            if(bool === false)
                bool = true;
            
        }
    })
    if(bool)
    {
        return true;
    }
    else
        return false;
    
        
            
    
    
    
}