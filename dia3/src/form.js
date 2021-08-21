const nameInput = document.querySelector('[data-js=name]')
nameInput.addEventListener('keyup', () => handleTyping(nameInput.value))

const handleTyping = (inputValue) => {
  const reservedWords = ['do', 'da', 'de', 'dos']
  const words = inputValue.split(' ')
  console.log(words)
  const transformedWords = words.map(word => {
    if (word === '') return
    console.log(word)
    if (reservedWords.includes(word.toLowerCase())) {
      return word.toLowerCase()
    } else {
      return word[0].toUpperCase() + word.slice(1).toLowerCase()
    }
  })
  nameInput.value = transformedWords.join(' ')
}
