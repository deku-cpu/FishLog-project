const counterEl = document.querySelector('#counter');
const cards = document.querySelectorAll('.card');

if (counterEl) {
    counterEl.textContent = cards.length;
}

const viewToggle = document.querySelector('#view-toggle');
const journal = document.querySelector('.cards');

if (viewToggle && journal) {
    viewToggle.addEventListener('click', () => {
        journal.classList.toggle('cards--compact');

        if (journal.classList.contains('cards--compact')) {
            viewToggle.textContent = 'Обычный вид';
        } else {
            viewToggle.textContent = 'Компактный вид';
        }
    });
}