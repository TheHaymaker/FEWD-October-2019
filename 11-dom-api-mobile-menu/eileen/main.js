
// grab a ref to the button
let button = document.querySelector('button');

// grab ref to the body tag
let mobile = document.querySelector('.mobile');

// add a listener to my button
button.addEventListener('click', function(){
  // change the background color
  // body.style.backgroundColor = 'blue'
  // if blue make red
  if (mobile.classList.contains('shown')) {
    mobile.classList.remove('shown')
  } else {
    // if red make shown
    mobile.classList.add('shown')
  }
})

document.querySelector('.close-btn').addEventListener('click', function(){
  // change the background color
  // body.style.backgroundColor = 'blue'
  // if blue make red
  if (mobile.classList.contains('shown')) {
    mobile.classList.remove('shown')
  } else {
    // if red make shown
    mobile.classList.add('shown')
  }
})





// querySelector

// querySelectorAll

// classList.add

// classList.remove

// EVENTS

  // addEventListener
    // "click"

    // console.log("Hello.");

    // Array.from(document.querySelectorAll('*')).forEach(function(node) {
    //   node.addEventListener('click', (event) => {
    //     console.count('onCapture')
    //   }, true);

    // })

    // Array.from(document.querySelectorAll('*')).forEach(node => {
    //   node.addEventListener('click', (event) => {
    //     event.stopPropagation()
    //     console.count('onBubble')
    //   });

    // })
