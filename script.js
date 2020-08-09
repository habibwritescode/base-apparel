const button = document.querySelector('button')
const input = document.querySelector('input')
const errorIcon = document.querySelector('.error-icon')
const errorMessage = document.querySelector('.error-message')


const listener = (e) => {
    e.preventDefault()
    let email = input.value
    let regex = /^[^@\s]+@[^@\s\.]+\.[^@\.\s]+$/
    let isMatched = regex.test(email)
    if (isMatched) {
        input.value = ''
    }
    else if (input.value === '' || !isMatched) {
        errorIcon.style.display = 'block'
        errorMessage.style.display = 'block'
    }
}


// Remove error message when input is empty and user taps/clicks on any other part of the page
button.addEventListener('click', listener)

input.addEventListener('blur', function removeError() {
    errorIcon.style.display = 'none'
    errorMessage.style.display = 'none'
})