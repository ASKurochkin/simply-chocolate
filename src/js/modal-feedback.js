(() => {
  const refsfb = {
    openModalBtn: document.querySelector('[data-modal-fb-open]'),
    closeModalBtn: document.querySelector('[data-modal-fb-close]'),
    modal: document.querySelector('[data-modal-fb]'),
  };

  refsfb.openModalBtn.addEventListener('click', toggleModal);
  refsfb.closeModalBtn.addEventListener('click', toggleModal);

  function toggleModal() {
    refsfb.modal.classList.toggle('is-hidden');
  }
})();
