(() => {
  const refsr = {
    openModalBtn: document.querySelector('[data-modal-rev-open]'),
    closeModalBtn: document.querySelector('[data-modal-rev-close]'),
    modal: document.querySelector('[data-modal-rev]'),
  };

  refsr.openModalBtn.addEventListener('click', toggleModal);
  refsr.closeModalBtn.addEventListener('click', toggleModal);

  function toggleModal() {
    refsr.modal.classList.toggle('is-hidden');
  }
})();
