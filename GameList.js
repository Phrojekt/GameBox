const modal = document.querySelector('.ScreenModal');

const Modal = () => {
    if(modal.classList.contains('active')) {
        modal.classList.remove('active')
    } else {
        modal.classList.add('active')
        const selectedItem = document.getElementById('game1')
        selectedItem.classList.add('selected');
    }

}