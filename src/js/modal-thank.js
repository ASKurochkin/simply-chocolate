(() => {
      const refsty = {
      openModalBtn: document.querySelector("[data-modal-ty-open]"),
      closeModalBtn: document.querySelector("[data-modal-ty-close]"),
      modal: document.querySelector("[data-modal-ty]"),
    };
  
    refsty.openModalBtn.addEventListener("click", toggleModal);
    refsty.closeModalBtn.addEventListener("click", toggleModal);
  
    function toggleModal() {
      refsty.modal.classList.toggle("is-hidden");
  }    
  })();