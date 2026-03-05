(() => {
  const refs = {
    // Додати атрибут data-modal-open на кнопку відкриття
    openModalBtn: document.querySelector('[data-modal-open]'),
    // Додати атрибут data-modal-close на кнопку закриття
    closeModalBtn: document.querySelector('[data-modal-close]'),
    // Додати атрибут data-modal на бекдроп модалки
    modal: document.querySelector('[data-modal]'),
    modalContent: document.querySelector('[data-modal-content]'),
  };

  refs.openModalBtn.addEventListener('click', toggleModal);
  refs.closeModalBtn.addEventListener('click', toggleModal);

  function toggleModal() {
    const rect = refs.openModalBtn.getBoundingClientRect();
    const xPercent = ((rect.left + rect.width / 2) / window.innerWidth) * 100;
    const yPercent = ((rect.top + rect.height / 2) / window.innerHeight) * 100;

    refs.modalContent.style.setProperty('--order-btn-x', `${xPercent}%`);
    refs.modalContent.style.setProperty('--order-btn-y', `${yPercent}%`);

    // is-open це клас який буде додаватися/забиратися на бекдроп при натисканні на кнопки
    refs.modal.classList.toggle('is-open');
  }
})();
