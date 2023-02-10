import { dataInfo } from "./dataBase.js"

const boxCourses = document.querySelector('.box-courses')

renderDataInfoOnScreen()
function renderDataInfoOnScreen(){
    dataInfo.map(card => {
    boxCourses.innerHTML += 
    `
    <div class="card-course">
    <img src="${card.urlImage}" alt="Imagem do curso">
    <div class="info-course">
        <h3>${card.title}</h3>
        <p>
        ${card.description}
        </p>
        <button>Ingressar na turma</button>
    </div>
</div>
    `
})
}