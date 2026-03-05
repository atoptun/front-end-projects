(() => {
  const refs = {
    openMobileMenuBtn: document.querySelector('[data-mobile-menu-open]'),
    closeMobileMenuBtn: document.querySelector('[data-mobile-menu-close]'),
    MobileMenu: document.querySelector('[data-mobile-menu]'),
  };

  refs.openMobileMenuBtn.addEventListener('click', toggleMobileMenu);
  refs.closeMobileMenuBtn.addEventListener('click', toggleMobileMenu);

  function toggleMobileMenu() {
    refs.MobileMenu.classList.toggle('is-open');
  }
})();
