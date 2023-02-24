const modal = document.querySelector('.ScreenModal');
const openGuessModal = document.querySelector('#game1');
const GuessModal = document.querySelector('.game1Modal');

const ScreenModal_ON = () => {

    const selectedItem = document.getElementById('game1');

    if(modal.classList.contains('active')) {
        modal.classList.remove('active')
        const selected = document.querySelector('.selected')
        selected.classList.remove('selected');

    } else {
        modal.classList.add('active')
        selectedItem.classList.add('selected');
        GuessModal.classList.remove('active');
    }
}

openGuessModal.addEventListener('click', function(event) {
  event.preventDefault();
  GuessModal.classList.add('active');
  ScreenModal_ON();
});