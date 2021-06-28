const loader = document.querySelector('.loader');

function init() {
    setTimeout(() => {
	loader.style.display = 'none';
  }, 5000);
}

init();
