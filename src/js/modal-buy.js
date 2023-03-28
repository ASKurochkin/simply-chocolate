(() => {
      const refsbn = {
      openModalBtn: document.querySelector("[data-modal-bn-open]"),
      closeModalBtn: document.querySelector("[data-modal-bn-close]"),
      modal: document.querySelector("[data-modal-bn]"),
    };
  
    refsbn.openModalBtn.addEventListener("click", toggleModal);
    refsbn.closeModalBtn.addEventListener("click", toggleModal);
  
    function toggleModal() {
      refsbn.modal.classList.toggle("is-hidden");
  }  
  })();