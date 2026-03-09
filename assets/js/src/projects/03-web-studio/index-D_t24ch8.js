import "../../../../modulepreload-polyfill-COaX8i6R.js";
(() => {
  const refs = {
    // Додати атрибут data-modal-open на кнопку відкриття
    openModalBtn: document.querySelector("[data-modal-open]"),
    // Додати атрибут data-modal-close на кнопку закриття
    closeModalBtn: document.querySelector("[data-modal-close]"),
    // Додати атрибут data-modal на бекдроп модалки
    modal: document.querySelector("[data-modal]"),
    modalContent: document.querySelector("[data-modal-content]")
  };
  refs.openModalBtn.addEventListener("click", toggleModal);
  refs.closeModalBtn.addEventListener("click", toggleModal);
  function toggleModal() {
    const rect = refs.openModalBtn.getBoundingClientRect();
    const xPercent = (rect.left + rect.width / 2) / window.innerWidth * 100;
    const yPercent = (rect.top + rect.height / 2) / window.innerHeight * 100;
    refs.modalContent.style.setProperty("--order-btn-x", `${xPercent}%`);
    refs.modalContent.style.setProperty("--order-btn-y", `${yPercent}%`);
    refs.modal.classList.toggle("is-open");
  }
})();
(() => {
  const refs = {
    openMobileMenuBtn: document.querySelector("[data-mobile-menu-open]"),
    closeMobileMenuBtn: document.querySelector("[data-mobile-menu-close]"),
    MobileMenu: document.querySelector("[data-mobile-menu]")
  };
  refs.openMobileMenuBtn.addEventListener("click", toggleMobileMenu);
  refs.closeMobileMenuBtn.addEventListener("click", toggleMobileMenu);
  function toggleMobileMenu() {
    refs.MobileMenu.classList.toggle("is-open");
  }
})();
//# sourceMappingURL=index-D_t24ch8.js.map
