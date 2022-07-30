
function showAnswer(){
    var answ = document.querySelector("#answer")
    //* variavel nome da variavel = document.querySelector(aonde eu quero bbuscar as informacoes)("")(nome da tag, dentro de parentese e entre aspas, se for ID usar # se for classe usar .)
    answ.classList.toggle("blur");
    //Variavel contem todas as informacoes do html)//
    //classList.toggle alterna uma funcao//
    //blur ja foi definido no css//
    //Adicionar ou remover funcao para a clase//
    }
function next(nextQuestion){
        var question = document.querySelector("#card-container");
        question.innerHTML="";
        //modifica o que esta no html//
        var cardDiv = document.createElement("div");
        cardDiv.classList.add("card","animate__animated", "animate__backInRight");
        cardDiv.innerHTML = `<div class="card">
        <div class="card-title center">
        <h1 class="right-title"> O que é ${nextQuestion.title}?</h1>
        </div>
            <div id="answer" class="card-description blur">
                ${nextQuestion.description}
            </div>
    </div>`;
    question.appendChild(cardDiv);
}
function search(){
    fetch("https://flash.quickstaart.com/random")
    .then(function(result){
        return result.json()
    })
    .then(function(resultJson){
        next(resultJson)
    })
}
window.addEventListener("load", nextQuestion)