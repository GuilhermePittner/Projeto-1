//variáveis únicas//
var valorFeliz = 0; var valorTriste = 0; var valorApaixonado = 0; var valorInspirado = 0; var valorHearthbroken = 0; var valorChilling = 0
//variáveis únicas//

//variáveis duplas//
var felizApaixonado = 0; var felizInspirado = 0; var felizChilling = 0; var tristePartido = 0; var tristeChilling = 0; var apaixonadoInspirado = 0;var apaixonadoChilling = 0;var hearthbrokenChilling = 0;
//variáveis duplas//

//variável de erro//
var excesso = 0
//variável de erro//

//variável de sorteio//
var sorteio
//variável de sorteio//

//limpar botoes//
let limparbotoes=document.querySelector("#limparBotoes")
//limpar botoes//

//arrumar a tela para o usuário re-inserir os números
function limpar(){
    valorFeliz = 0; valorTriste = 0;valorApaixonado = 0;valorInspirado = 0;valorHearthbroken = 0;valorChilling = 0;felizApaixonado = 0; felizInspirado = 0; felizChilling = 0; tristePartido = 0;  tristeChilling = 0; apaixonadoInspirado = 0;apaixonadoChilling = 0;hearthbrokenChilling = 0;excesso = 0
}
function descolorir(){
    happyMood.classList.remove("fixar-feliz")
    sadMood.classList.remove("fixar-triste")
    loveMood.classList.remove("fixar-apaixonado")
    inspiredMood.classList.remove("fixar-inspirado")
    hearthbrokenMood.classList.remove("fixar-partido")
    chillingMood.classList.remove("fixar-relaxando")
}
function again(){
    limpar()
    descolorir()
    location.reload();
}
//arrumar a tela para o usuário re-inserir os números



//FUNÇÕES DOS BOTÕES//
//FUNÇÕES DOS BOTÕES//
//FUNÇÕES DOS BOTÕES//

function feliz(){
    //seção de atribuição de valores
    valorFeliz++
    felizApaixonado++
    felizInspirado++
    felizChilling++
    excesso++
   
    //seção para preencher a cor do botão
    let happyMood=document.querySelector("#happyMood")
    happyMood.classList.add("fixar-feliz")

    if (valorFeliz%2==0){
        valorFeliz=0
        felizApaixonado=0
        felizInspirado=0
        felizChilling=0
        excesso=0
        happyMood.classList.remove("fixar-feliz")
    }
}

function triste(){
    //seção de atribuição de valores
    valorTriste++  
    tristePartido++ 
    tristeChilling++
    excesso++
    
    //seção para preencher a cor do botão
    let sadMood=document.querySelector("#sadMood")
    sadMood.classList.add("fixar-triste")

    if (valorTriste%2==0){
        valorTriste=0
        tristePartido=0
        tristeChilling=0
        excesso=0
        sadMood.classList.remove("fixar-triste")
    }
}

function apaixonado(){
    //seção de atribuição de valores
    valorApaixonado++
    felizApaixonado++
    apaixonadoInspirado++
    apaixonadoChilling++
    excesso++
      
    //seção para preencher a cor do botão
    let loveMood=document.querySelector("#loveMood")
    loveMood.classList.add("fixar-apaixonado")

    if (valorApaixonado%2==0){
        valorApaixonado=0
        felizApaixonado=0
        apaixonadoInspirado=0
        apaixonadoChilling=0
        excesso=0
        loveMood.classList.remove("fixar-apaixonado")
    }
}

function inspirado(){
    //seção de atribuição de valores
    valorInspirado++ 
    felizInspirado++
    apaixonadoInspirado++
    excesso++

    //seção para preencher a cor do botão
    let inspiredMood=document.querySelector("#inspiredMood")
    inspiredMood.classList.add("fixar-inspirado")

    if (valorInspirado%2==0){
        valorInspirado=0
        felizInspirado=0
        apaixonadoInspirado=0
        excesso=0
        inspiredMood.classList.remove("fixar-inspirado")
    }
}

function hearthbroken(){
    //seção de atribuição de valores
    valorHearthbroken++
    tristePartido++
    hearthbrokenChilling++
    excesso++

    //seção para preencher a cor do botão
    let hearthbrokenMood=document.querySelector("#hearthbrokenMood")
    hearthbrokenMood.classList.add("fixar-partido")

    if (valorHearthbroken%2==0){
        valorHearthbroken=0
        tristePartido=0
        hearthbrokenChilling=0
        excesso=0
        hearthbrokenMood.classList.remove("fixar-partido")
    }
}

function chilling(){
    //seção de atribuição de valores
    valorChilling++
    felizChilling++
    tristeChilling++
    apaixonadoChilling++
    hearthbrokenChilling++
    excesso++

    //seção para preencher a cor do botão
    let chillingMood=document.querySelector("#chillingMood")
    chillingMood.classList.add("fixar-relaxando")

    if (valorChilling%2==0){
        valorChilling=0
        felizChilling=0
        tristeChilling=0
        apaixonadoChilling=0
        hearthbrokenChilling=0
        excesso=0
        chillingMood.classList.remove("fixar-relaxando")
    }
}

function checar(){
    //checagem para ver se há um excesso de escolhas
    if (excesso>=3){
        limpar()
        descolorir()
    }
    if (valorFeliz>=2 || valorInspirado>=2 || valorApaixonado>=2 || valorTriste>=2 || valorChilling>=2 || valorHearthbroken>=2){
        limpar()
        descolorir()
    }
    //checagem para ver se há um excesso de escolhas

    if (felizApaixonado==2){
        valorFeliz=0
        valorApaixonado=0

        sorteio = Math.floor(Math.random()*songs07.length)

        var showMusic=document.querySelector("#showMusic")
        showMusic.innerHTML=(`The best music for you in this moment is: <a href="${songs07[sorteio].link}" target="_blank">${songs07[sorteio].nome}</a> by: ${songs07[sorteio].autor}`)

        var reiniciar=document.querySelector("#reiniciar")
        reiniciar.innerHTML=(`<button class="btn reiniciar" id="reiniciarMood" onclick="again()">Again!</button>`)

        limparbotoes.classList.add("limpar-sumir")

        
    } else if (felizInspirado==2){
        valorFeliz=0
        valorInspirado=0
        
        sorteio = Math.floor(Math.random()*songs08.length)

        var showMusic=document.querySelector("#showMusic")
        showMusic.innerHTML=(`The best music for you in this moment is: <a href="${songs08[sorteio].link}" target="_blank">${songs08[sorteio].nome}</a> by: ${songs08[sorteio].autor}`)

        var reiniciar=document.querySelector("#reiniciar")
        reiniciar.innerHTML=(`<button class="btn reiniciar" id="reiniciarMood" onclick="again()">Again!</button>`)

    } else if (felizChilling==2){
        console.log(felizChilling+ "felizChilling")
        valorFeliz=0
        valorChilling=0

        sorteio = Math.floor(Math.random()*songs09.length)

        var showMusic=document.querySelector("#showMusic")
        showMusic.innerHTML=(`The best music for you in this moment is: <a href="${songs09[sorteio].link}" target="_blank">${songs09[sorteio].nome}</a> by: ${songs09[sorteio].autor}`)

        var reiniciar=document.querySelector("#reiniciar")
        reiniciar.innerHTML=(`<button class="btn reiniciar" id="reiniciarMood" onclick="again()">Again!</button>`)

    } else if (tristePartido==2){
        console.log(tristePartido+ "tristePartido")
        valorTriste=0
        valorHearthbroken=0

        sorteio = Math.floor(Math.random()*songs10.length)

        var showMusic=document.querySelector("#showMusic")
        showMusic.innerHTML=(`The best music for you in this moment is: <a href="${songs10[sorteio].link}" target="_blank">${songs10[sorteio].nome}</a> by: ${songs10[sorteio].autor}`)

        var reiniciar=document.querySelector("#reiniciar")
        reiniciar.innerHTML=(`<button class="btn reiniciar" id="reiniciarMood" onclick="again()">Again!</button>`)

    } else if (tristeChilling==2){
        console.log(tristeChilling+ "tristeChilling")
        valorTriste=0
        valorChilling=0

        sorteio = Math.floor(Math.random()*songs11.length)

        var showMusic=document.querySelector("#showMusic")
        showMusic.innerHTML=(`The best music for you in this moment is: <a href="${songs11[sorteio].link}" target="_blank">${songs11[sorteio].nome}</a> by: ${songs11[sorteio].autor}`)

        var reiniciar=document.querySelector("#reiniciar")
        reiniciar.innerHTML=(`<button class="btn reiniciar" id="reiniciarMood" onclick="again()">Again!</button>`)

    } else if (apaixonadoInspirado==2){
        console.log(apaixonadoInspirado+ "apaixonadoInspirado")
        valorApaixonado=0
        valorInspirado=0

        sorteio = Math.floor(Math.random()*songs12.length)

        var showMusic=document.querySelector("#showMusic")
        showMusic.innerHTML=(`The best music for you in this moment is: <a href="${songs12[sorteio].link}" target="_blank">${songs12[sorteio].nome}</a> by: ${songs12[sorteio].autor}`)

        var reiniciar=document.querySelector("#reiniciar")
        reiniciar.innerHTML=(`<button class="btn reiniciar" id="reiniciarMood" onclick="again()">Again!</button>`)

    } else if(apaixonadoChilling==2){
        console.log(apaixonadoChilling+ "apaixonadoChilling") 
        valorApaixonado=0
        valorChilling=0

        sorteio = Math.floor(Math.random()*songs13.length)

        var showMusic=document.querySelector("#showMusic")
        showMusic.innerHTML=(`The best music for you in this moment is: <a href="${songs13[sorteio].link}" target="_blank">${songs13[sorteio].nome}</a> by: ${songs13[sorteio].autor}`)

        var reiniciar=document.querySelector("#reiniciar")
        reiniciar.innerHTML=(`<button class="btn reiniciar" id="reiniciarMood" onclick="again()">Again!</button>`)

    } else if (hearthbrokenChilling==2){
        console.log(hearthbrokenChilling+ "hearthbrokenchilling")
        valorHearthbroken=0
        valorChilling=0

        sorteio = Math.floor(Math.random()*songs14.length)

        var showMusic=document.querySelector("#showMusic")
        showMusic.innerHTML=(`The best music for you in this moment is: <a href="${songs14[sorteio].link}" target="_blank">${songs14[sorteio].nome}</a> by: ${songs14[sorteio].autor}`)

        var reiniciar=document.querySelector("#reiniciar")
        reiniciar.innerHTML=(`<button class="btn reiniciar" id="reiniciarMood" onclick="again()">Again!</button>`)

    } else if (excesso==2){
        alert("Ops, there was an error! Did you choose your mood correctly?")
        limpar()
        descolorir()
    } else if (valorFeliz==1){

        sorteio = Math.floor(Math.random()*songs01.length)

        var showMusic=document.querySelector("#showMusic")
        showMusic.innerHTML=(`The best music for you in this moment is: <a href="${songs01[sorteio].link}" target="_blank">${songs01[sorteio].nome}</a> by: ${songs01[sorteio].autor}`)

        var reiniciar=document.querySelector("#reiniciar")
        reiniciar.innerHTML=(`<button class="btn reiniciar" id="reiniciarMood" onclick="again()">Again!</button>`)
        
    } else if (valorTriste==1){

        sorteio = Math.floor(Math.random()*songs02.length)

        var showMusic=document.querySelector("#showMusic")
        showMusic.innerHTML=(`The best music for you in this moment is: <a href="${songs02[sorteio].link}" target="_blank">${songs02[sorteio].nome}</a> by: ${songs02[sorteio].autor}`)

        var reiniciar=document.querySelector("#reiniciar")
        reiniciar.innerHTML=(`<button class="btn reiniciar" id="reiniciarMood" onclick="again()">Again!</button>`)

        
    } else if (valorApaixonado==1){
        
        sorteio = Math.floor(Math.random()*songs03.length)

        var showMusic=document.querySelector("#showMusic")
        showMusic.innerHTML=(`The best music for you in this moment is: <a href="${songs03[sorteio].link}" target="_blank">${songs03[sorteio].nome}</a> by: ${songs03[sorteio].autor}`)

        var reiniciar=document.querySelector("#reiniciar")
        reiniciar.innerHTML=(`<button class="btn reiniciar" id="reiniciarMood" onclick="again()">Again!</button>`)

    } else if (valorInspirado==1){
        
        sorteio = Math.floor(Math.random()*songs04.length)

        var showMusic=document.querySelector("#showMusic")
        showMusic.innerHTML=(`The best music for you in this moment is: <a href="${songs04[sorteio].link}" target="_blank">${songs04[sorteio].nome}</a> by: ${songs04[sorteio].autor}`)

        var reiniciar=document.querySelector("#reiniciar")
        reiniciar.innerHTML=(`<button class="btn reiniciar" id="reiniciarMood" onclick="again()">Again!</button>`)

    } else if (valorHearthbroken==1){

        sorteio = Math.floor(Math.random()*songs05.length)

        var showMusic=document.querySelector("#showMusic")
        showMusic.innerHTML=(`The best music for you in this moment is: <a href="${songs05[sorteio].link}" target="_blank">${songs05[sorteio].nome}</a> by: ${songs05[sorteio].autor}`)

        var reiniciar=document.querySelector("#reiniciar")
        reiniciar.innerHTML=(`<button class="btn reiniciar" id="reiniciarMood" onclick="again()">Again!</button>`)

    } else if (valorChilling==1){

        sorteio = Math.floor(Math.random()*songs06.length)

        var showMusic=document.querySelector("#showMusic")
        showMusic.innerHTML=(`The best music for you in this moment is: <a href="${songs06[sorteio].link}" target="_blank">${songs06[sorteio].nome}</a> by: ${songs06[sorteio].autor}`)

        var reiniciar=document.querySelector("#reiniciar")
        reiniciar.innerHTML=(`<button class="btn reiniciar" id="reiniciarMood" onclick="again()">Again!</button>`)

    } else {
        alert("Ops, there was an error! Did you choose your mood correctly?")
        limpar()
        descolorir()
    } 
}