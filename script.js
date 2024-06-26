document.querySelector('.signup-form').addEventListener('submit', (event) => {
    event.preventDefault()

    const email = document.querySelector('.email-input').value.trim()

    let isValid = true

    clearError()

    if (!isValidEmail(email)) {
        showError()
        isValid = false
    }

    if (isValid) {
        showSuccess(email)
    }
})

document.querySelector('.dismiss-btn').addEventListener('click', () => {
    const signupCard = document.querySelector('.signup-card')
    const successCard = document.querySelector('.success-card')
    const emailInput = document.querySelector('.email-input')

    emailInput.value = ""
    signupCard.style.display = "flex"
    successCard.style.display = "none"
})

function clearError() {
    const emailInput = document.querySelector('.email-input')
    const errorMsg = document.getElementById('input-error-msg')
    
    emailInput.classList.remove('form-input-error')
    errorMsg.hidden = true
}

function showError() {
    const emailInput = document.querySelector('.email-input')
    const errorMsg = document.getElementById('input-error-msg')
    
    emailInput.classList.add('form-input-error')
    errorMsg.hidden = false
}

function isValidEmail(email) {
    // Simple email validation regex
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
}

function showSuccess(email) {
    const signupCard = document.querySelector('.signup-card')
    const successCard = document.querySelector('.success-card')
    const userEmailText = document.querySelector('.user-email-text')

    signupCard.style.display = "none"
    successCard.style.display = "flex"
    userEmailText.textContent = email
}