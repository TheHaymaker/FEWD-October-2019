document.querySelector('input[type=checkbox]').addEventListener('change', (e) => {
  console.log(e)
})


document.querySelector('input[type=email]').addEventListener('change', (e) => {
  console.log(e)
})


document.querySelector('input[type=email]').addEventListener('keyup', (e) => {
  console.log(e.target.validity.valid)
})

document.querySelector('input[type=email]').addEventListener('input', (e) => {
  if(e.target.validity.typeMismatch) {
    e.target.setCustomValidity(`The ${e.target.value} needs an @`)
  } else {
    
  }
})

document.querySelector('form').addEventListener('submit', (e) => {
 e.preventDefault()
})


// native input validation


// customize native input validation
// using Regular Expressions
// pattern attribute

// input-level validation

// onKeyPress
// onBlur

// validation strategies


// form-level validation
// onSubmit
// manually submitting via AJAX
// perform validation before we submit
// event.target.submit()
