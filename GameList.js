const modal = document.querySelector('.ScreenModal');

const ScreenModal_ON = () => {

    const selectedItem = document.getElementById('game1');

    if(modal.classList.contains('active')) {
        modal.classList.remove('active')
        const selected = document.querySelector('.selected')
        selected.classList.remove('selected');

    } else {
        modal.classList.add('active')
        selectedItem.classList.add('selected');
    }
}
