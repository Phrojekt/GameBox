const Modal = {
    open(){document.querySelector('.ScreenModal').classList.add('active')}
}

window.addEventListener("load", function() {
    const selectedItem = document.getElementById('game1')
    selectedItem.classList.add('selected');
});