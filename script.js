const container = document.getElementById('container');
const text = document.getElementById('text');

const totalTime = 8500;
const setTime = (totalTime / 5) * 2;
const constTime = totalTime / 5;

takeAnime();

function takeAnime() {
  text.innerText = 'Animation using JavaScript';
  container.className = '';

  setTimeout(() => {
    text.innerText = 'Achieved with HTML, JavaScript & CSS';

    setTimeout(() => {
        // Push outwards
      text.innerText = 'Circular rotation';
      container.className = '';
    }, constTime);
  }, setTime);
}
// Set interval time to 8,5 seconds
setInterval(takeAnime, totalTime);