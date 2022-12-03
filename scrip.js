const out = document.querySelector('.out')
const hopper = document.querySelector('.hopper')
const over = document.querySelector('.over')
const pi = document.querySelector('.pi')

const open = function () {
  hopper.classList.remove('hopper')
}
out.addEventListener('click', open)
