const meuMenu = document.querySelectorAll('.menu-item');

meuMenu.forEach(item => {
    item.addEventListener('mouseover', () => {
        item.style.fontWeight = 'bold';
        item.style.backgroundColor = 'green';
    });

    item.addEventListener('mouseout', () => {
        item.style.fontWeight = 'normal';
        item.style.backgroundColor = '';
    });
});