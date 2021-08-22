// Exercicio 1
const form = document.querySelector('[data-js=form]')

const nameInput = document.querySelector('[data-js=name]')

nameInput.addEventListener('input', () => handleTyping(nameInput.value))

const reservedWords = ['do', 'da', 'de', 'dos', 'das']

const handleTyping = (inputValue) => {
  const words = inputValue.split(' ')

    const transformedWords = words.map(word => {
      return reservedWords.includes(word.toLowerCase())
        ? word.toLowerCase()
        : capitalize(word)
      }).join(' ')
  nameInput.value = transformedWords
}

function capitalize (word) {
  return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase()
}

// Exercicio 2

const select = document.createElement('select')
select.setAttribute('multiple', 'multiple')
form.appendChild(select)

const colors = ['blue', 'red', 'green', 'yellow', 'purple']

const createOptionOnSelect = (color) => {
  const currentColor = document.createElement('option')
  currentColor.setAttribute('value', color)
  currentColor.innerHTML = color
  select.appendChild(currentColor)
}

colors.forEach(color => createOptionOnSelect(color))

const divsHolder = document.createElement('div')
divsHolder.classList.add('divsHolder')
form.after(divsHolder)

for (let i = 1; i <=5; i++) {
  const coloredDiv = document.createElement('div')
  divsHolder.appendChild(coloredDiv)
}

const coloredDiv = [...divsHolder.children]

select.addEventListener('change', (e) => {
  const divs = ([...e.target.options].map(el => ({
    value: el.value,
    selected: el.selected
  })))
  divs.forEach(item => {
    if (item.selected) {
      coloredDiv[divs.indexOf(item)].classList.add('show',item.value)
      return
    }
    coloredDiv[divs.indexOf(item)].classList.remove('show')
  })
  }
)

