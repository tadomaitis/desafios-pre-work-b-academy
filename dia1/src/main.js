import './style.css'

const mainDiv = document.querySelector('[data-js="app"]')

mainDiv.innerHTML = `
  <h1>B. Academy</h1>
  <p>Boas vindas à semana de pré-work para o Bootcamp em React.js 😁</p>
`
const link = document.querySelector('[data-js="link"]')

link.addEventListener('click', () => {
  mainDiv.classList.toggle('hide')
})

