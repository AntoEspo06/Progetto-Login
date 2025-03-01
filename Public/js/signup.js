const signupPasswordField = document.getElementById('signupPassword') 
const signupEmailField = document.getElementById('signupEmail') 
const signupConfirmPasswordField = document.getElementById('signupConfirmPassword') 
const toggleSignupPassword = document.getElementById('toggleSignupPassword') 
const toggleSignupConfirmPassword = document.getElementById('toggleSignupConfirmPassword') 
const confirmPasswordMessage = document.getElementById('confirmPasswordMessage') 
const signupButton = document.querySelector('button[type="submit"]') 
const signupForm = document.getElementById('signupForm') 
const errorMessage = document.getElementById('errorMessage') 

signupForm.addEventListener("submit", async (event) => {
    event.preventDefault() 

    const email = signupEmailField.value 
    const password = signupPasswordField.value 
    const confirmPassword = signupConfirmPasswordField.value 

    if (password !== confirmPassword) {
        confirmPasswordMessage.style.display = "block" 
        signupPasswordField.classList.add("input-error") 
        signupConfirmPasswordField.classList.add("input-error") 
        return 
    } else {
        confirmPasswordMessage.style.display = "none" 
        signupPasswordField.classList.remove("input-error") 
        signupConfirmPasswordField.classList.remove("input-error") 
    }

    try {
    const emailCheckResponse = await fetch(`/check-email?email=${encodeURIComponent(email)}`) 
    const emailCheckResult = await emailCheckResponse.json() 

    if (!emailCheckResponse.ok || emailCheckResult.exists) {
        errorMessage.style.display = "inline-block" 
        signupEmailField.classList.add("input-error") 
        return  // Stop the form submission if email is invalid
    } else {
        errorMessage.style.display = "none" 
        signupEmailField.classList.remove("input-error") 
    }
} catch (error) {
    console.error("Error checking email:", error) 
    toastr.error("Error checking email. Please try again.") 
    return 
}
}) 

// Email input event listener to clear error state
signupEmailField.addEventListener('input', () => {
    signupEmailField.classList.remove('input-error') 
    errorMessage.style.display = "none" 
}) 

// Remove error when passwords match while typing
function handlePasswordInput() {
    if (signupPasswordField.value === signupConfirmPasswordField.value) {
        confirmPasswordMessage.style.display = "none" 
        signupPasswordField.classList.remove("input-error") 
        signupConfirmPasswordField.classList.remove("input-error") 
    }
}

signupPasswordField.addEventListener("input", handlePasswordInput) 
signupConfirmPasswordField.addEventListener("input", handlePasswordInput) 

// Toggle password visibility
toggleSignupPassword.addEventListener('click', () => 
    togglePasswordVisibility(signupPasswordField, toggleSignupPassword)
) 
toggleSignupConfirmPassword.addEventListener('click', () => 
    togglePasswordVisibility(signupConfirmPasswordField, toggleSignupConfirmPassword)
) 
