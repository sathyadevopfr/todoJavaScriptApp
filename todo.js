const inputBox = document.getElementById('input-box')
const listContainer = document.getElementById('list-container')

const addTask = () => {
   inputBox.value === '' ? alert('you must write something') : (() => {
        let li = document.createElement('li')
        li.innerHTML = inputBox.value
        listContainer.appendChild(li)
        let span = document.createElement('span')
        span.innerHTML = '\u00d7'
        li.appendChild(span)
    })();
    inputBox.value = ''
    saveData()
}
listContainer.addEventListener('click', (e) => {
    e.target.tagName === "LI" ? (e.target.classList.toggle("checked"),
         saveData())
: e.target.tagName === "SPAN" ?( e.target.parentElement.remove(), 
        saveData()): undefined
})

let saveData = () => {
    localStorage.setItem("data",listContainer.innerHTML)
}
let displayData = () => {
         listContainer.innerHTML=localStorage.getItem('data')
}
     displayData()