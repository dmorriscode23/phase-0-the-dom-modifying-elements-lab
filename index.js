const mainElement = document.getElementById('main');
if (mainElement) {
  mainElement.remove();
}

const newHeader = document.createElement('h1');

newHeader.id = 'victory';

const yourName = 'Davian Morris'; 
newHeader.textContent = `${yourName} is the champion`;
