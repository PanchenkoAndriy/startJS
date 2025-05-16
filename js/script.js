const modalButtons document.querySelectorAll('[data-modal-button]');
const modalClosebuttons document.querySelectorAll('[data-modal-close]');
const allModals document.querySelectorAll('[data-modal]');
// кнопки - Открыть Модалку
modalButtons.forEach(function (item) {
    item.addEventListener('click', function () {
        const modalid this.dataset.modalButton;
        const modal document.querySelector('#' + modalId);
        modal.classList.remove('hidden');
        modal.querySelector('.modal-window').addEventListener('click', function (e) {
            e.stopPropagation();
        });
    })
})