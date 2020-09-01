const ul = document.querySelector('ul');
const count = 4;
const totalCounts = ul.children.length + count;

for (i = ul.children.length; i < totalCounts; i++) {
    const li = document.createElement('li');
    li.classList.add('new-item')
    li.textContent = `item ${i + 1}`;
    ul.appendChild(li);
}