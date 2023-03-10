const SelectGameMenu = document.querySelector(".ScreenModal");

const buttonA = document.querySelector('.Button_A');
buttonA.addEventListener('click', () => {
    if(SelectGameMenu.classList.contains('active')) {
        const selectedLink = document.querySelector('li a.selected');
        if (selectedLink) {
            selectedLink.click();
        }
    }
});

const ButtonUP = document.querySelector('.Button_UP');
const ButtonDown = document.querySelector('.Button_DOWN');
const ButtonRIGHT = document.querySelector('.Button_RIGHT');
const ButtonLEFT = document.querySelector('.Button_LEFT');

function DPAD(event) {
    const modal = document.querySelector('.ScreenModal');
    if(event.target === ButtonDown) {
        if (modal.classList.contains('active')) {
            const actualItem = document.querySelector('.selected');
            const nextItem = actualItem.parentElement.nextElementSibling.firstChild;
            if (nextItem) {
                actualItem.classList.remove('selected');
                nextItem.classList.add('selected');
            }
        } else {
            
        }
    } else if (event.target === ButtonUP) {
        if( modal.classList.contains('active')) {
            const actualItem = document.querySelector('.selected');
            const previousItem = actualItem.parentElement.previousElementSibling.firstChild;
            if(previousItem) {
                actualItem.classList.remove('selected');
                previousItem.classList.add('selected');
            } 
        }
        else {
            
        }
    }
}

const ButtonsContainer = document.querySelector('.Buttons_Container');
ButtonsContainer.addEventListener('click', DPAD);


