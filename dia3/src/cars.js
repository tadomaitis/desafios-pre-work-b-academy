const carsForm = document.querySelector('[data-js="cars-form"]')
const tableBody = document.querySelector('[data-js="tbody"]')
const imageInput = document.querySelector('[data-js="image-url"]')

carsForm.addEventListener('submit', (e) => {
  e.preventDefault()
  const carData = ([...e.target].map(row => row.value))
  const tableRow = document.createElement('tr')
  carData.forEach(column => {
    const columnValue = document.createElement('td')
    columnValue.textContent = column
    tableRow.appendChild(columnValue)
  })
  tableBody.appendChild(tableRow)
  carsForm.reset()
  imageInput.focus()
  }
)
