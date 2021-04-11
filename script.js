'use strict';
const open = document.querySelectorAll('.show-modal')
const close = document.querySelector('.close-modal')
const modal = document.querySelector('.modal')
const overlay = document.querySelector('.overlay')

const openModal = function () {
    overlay.classList.remove('hidden')
    modal.classList.remove('hidden')
}
const closeModal = function(){
    overlay.classList.add('hidden')
    modal.classList.add('hidden')
}

for (let index = 0; index < open.length; index++) {
    open[index].addEventListener('click', openModal)
}
close.addEventListener('click',closeModal)
overlay.addEventListener('click', closeModal)

document.addEventListener('keydown', function (e) {
    if(e.key === 'Escape' && !modal.classList.contains('hidden')){
        closeModal();
    }
}) 