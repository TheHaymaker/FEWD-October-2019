var form = document.querySelector("#submit-email");

form.addEventListener("submit", event => {
  event.preventDefault();

  // grab the input with the email
  var emailInput = event.target[0];
  var emailValue = emailInput.value;

  // grab the alert div
  var alertArea = document.querySelector(".alert");

  // check if the value of that input is valid
  if (emailValue) {
    alertArea.innerText = `Thanks. Check the inbox of ${emailValue} for a confirmation message.`;
    alertArea.className = "alert confirm";
  } else {
    alertArea.innerText = `You need to enter an email.`;
    alertArea.className = "alert reject";
  }
  // if it is valid, let user know that the form was submitted
  // if it was not valid, we show the user a helpful message
});
