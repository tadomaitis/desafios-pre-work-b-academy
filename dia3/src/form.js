// Exercicio 1

const form = document.querySelector('[data-js=form]')

const nameInput = document.querySelector('[data-js=name]')
nameInput.addEventListener('keyup', () => handleTyping(nameInput.value))

const handleTyping = (inputValue) => {
  const reservedWords = ['do', 'da', 'de', 'dos']
  const words = inputValue.split(' ')
  const transformedWords = words.map(word => {
    if (word === '') return
    if (reservedWords.includes(word.toLowerCase())) {
      return word.toLowerCase()
    } else {
      return word[0].toUpperCase() + word.slice(1).toLowerCase()
    }
  })
  nameInput.value = transformedWords.join(' ')
}

// Exercicio 2

const select = document.createElement('select')
select.setAttribute('multiple', 'multiple')

const colors = ['blue', 'red', 'green', 'yellow', 'purple']

const createOptionOnSelect = (color) => {
  const currentColor = document.createElement('option')
  currentColor.setAttribute('value', color)
  currentColor.innerHTML = color
  select.appendChild(currentColor)
}

colors.forEach(color => createOptionOnSelect(color))

form.appendChild(select)

const divsHolder = document.createElement('div')
const body = document.querySelector('body')
body.appendChild(divsHolder)

for (let i = 1; i <=5; i++) {
  const coloredDiv = document.createElement('div')
  divsHolder.appendChild(coloredDiv)
}

const coloredDiv = [...divsHolder.children]
console.log(coloredDiv)

select.addEventListener('change', (e) => {
  const divs = ([...e.target.options].map(el => ({
    value: el.value,
    selected: el.selected
  })))
  divs.forEach(item => {
    if (item.selected) {
      coloredDiv[divs.indexOf(item)].classList.add('show',item.value)
    } else {
      coloredDiv[divs.indexOf(item)].classList.remove('show')
    }
  })
  }
)

