function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

function createBoxes(amount) {
  const boxes = document.getElementById('boxes');

  let size = 30;
  for (let i = 0; i < amount; i++) {
    const box = document.createElement('div');
    box.style.backgroundColor = getRandomHexColor();
    box.style.height = `${size}px`;
    box.style.width = `${size}px`;
    boxes.appendChild(box);
    size += 10;
  }
}

const create = document.querySelector('button[data-create]');
create.addEventListener('click', () => {
  let amount = document.querySelector('input').value;
  createBoxes(amount);
});

function destroyBoxes() {
  const boxes = document.getElementById('boxes');
  boxes.innerHTML = '';
}

const destroy = document.querySelector('button[data-destroy]');
destroy.addEventListener('click', () => {
  destroyBoxes();
});
