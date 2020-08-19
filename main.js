const button = document.querySelector('.action--js');

console.log(button)

button.addEventListener('mouseenter', () => {
  const heading = document.querySelector('.article__heading--js');
  heading.innerHTML = 'We are from Moby word';
}) ;

button.addEventListener('click', () => {
  const heading = document.querySelector('.article__heading--js');
  heading.innerHTML = 'We left our world';
  console.log(heading.classList.contains('article__heading'));
}) ;

const hamburger = document.querySelector('.hamburger--js')

hamburger.addEventListener('click', () => {
  const nav = document.querySelector('.navigation--js');
  nav.classList.toggle('navigation--open')
})

