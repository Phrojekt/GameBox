const SelectGameMenu = document.querySelector(".ScreenModal");

const buttonA = document.querySelector('.Button_A');
buttonA.addEventListener('click', () => {
    if(SelectGameMenu.classList.contains('active')) {
        const selectedLink = document.querySelector('li a.selected');
        if (selectedLink) {
            window.open(selectedLink.href, '_self');
        }
    }
});

