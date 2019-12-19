var planets = [
  'earth',
  'mars',
  'jupiter',
  'saturn'
];

// Handler when the DOM is fully loaded
document.addEventListener("DOMContentLoaded", function(){

  // grab a reference to the body
  var body = document.querySelector('body');
 
  // grab a reference to the select box
  var selectBox = document.querySelector('#planet-name');

  // [1] - programmatically create option elements
  // [2] - add them to your selectbox

  
  // we need to listen for some event
  selectBox.addEventListener('change', function(event) {
    var capturedValue = event.target.value.toLowerCase().trim();

    console.log(capturedValue);

    if(capturedValue === 'mars') {
      body.style.backgroundImage = "url('./mars.jpg')";
      // body.classList.add('mars');
    } else if(capturedValue === 'saturn') {
      body.style.backgroundImage = "url('./saturn.jpg')";
    } else if(capturedValue === 'jupiter') {
      body.style.backgroundImage = "url('./jupiter.jpg')";
    } else {
      body.style.backgroundImage = "url('./404.jpg')";
    }

  });
  
  selectBox.dispatchEvent(new Event('change'));

});
