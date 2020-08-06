const button = document.querySelector('button')
const input = document.querySelector('input')
const error = document.querySelector('.error')

const listener = (e) => {
    e.preventDefault()
    let email = input.value
    let regex = /^[^@\s]+@[^@\s\.]+\.[^@\.\s]+$/
    let isMatched = regex.test(email)
    if (isMatched) {
        input.value = ''
    }
    else if (input.value === '' || !isMatched) {
        error.style.display = 'block'
    }
}


// Remove error message when input is empty and user taps/clicks on any other part of the page
button.addEventListener('click', listener)

input.addEventListener('blur', function removeError() {
    error.style.display = 'none'
})