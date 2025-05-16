document.querySelectorAll('.dropdown').forEach(function (dropDownWrapper) {
    const dropDownBtn = dropDownWrapper.querySelector('.dropdown__button');
    console.log(dropDownBtn);
    const dropDownList = dropDownWrapper.querySelector('.dropdown__list');
    const dropDownListItems = dropDownWrapper.querySelectorAll('.dropdown__list-item');
    const dropDownInput = dropDownWrapper.querySelector('.dropdown__input-hidden');
    dropDownBtn.addEventListener('click', function () {
        dropDownList.classList.toggle('hidden');
        this.classList.add('dropdown__button-active');
    })
    dropDownListItems.forEach(function (listItem) {
        listItem.addEventListener('click', function (e) {
            e.stopPropagation();
            dropDownBtn.innerText = this.innerText;
            dropDownBtn.focus();
            dropDownInput.value = this.dataset.value;
            dropDownList.classList.add('hidden');
        });
    });
    /* document.querySelector(.dropdown__list).innerText = ` $ {this.innerText}`; */
    dropDownWrapper.addEventListener('click', function (e) {
        console.log('Document Click')
        if (e.target !== dropDownBtn) {
            dropDownBtn.classList.remove('dropdown__button-active');
            dropDownList.classList.add('hidden');
        }
    });
    dropDownWrapper.addEventListener('keydown', function (e) {
        if ( e.key === 'Tab' || e.key === 'Escape') {
            dropDownBtn.classList.remove('dropdown__button-active');
            dropDownList.classList.add('hidden');
        } 
    });
});
