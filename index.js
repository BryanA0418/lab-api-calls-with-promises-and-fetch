const form = document.querySelector("form");
const main = document.querySelector("main");

function fetchQuestions(){
main.innerHTML = "";
fetch("https://opentdb.com/api.php?amount=10")
.then((res)=>res.json())
.then((res)=>{
    res.results.map(ele =>{
        let article = document.createElement("article")
        article.innerHTML = `<article class="card">
    <h2>${ele.category}</h2>
    <p>${ele.question}</p>
    <button class="show-answer">Show Answer</button>
    <p class="hidden">${ele.correct_answer}</p>
    </article>`
    let answer = article.querySelector(".show-answer");
    answer.addEventListener("click",(e)=>{
        let answerParagraph = article.querySelector(".hidden");
            answerParagraph.classList.toggle("active");
    })
    main.append(article);
        })
    })
    .catch((error)=>main.innerHTML=`<p>Slow down</p>`)
}
form.addEventListener("submit",(e)=>{
    e.preventDefault()
    fetchQuestions()
})