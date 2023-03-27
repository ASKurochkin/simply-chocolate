(() => {
  // modal-explore
    const refs = {
      openModalBtn: document.querySelector("[data-modal-open]"),
      closeModalBtn: document.querySelector("[data-modal-close]"),
      modal: document.querySelector("[data-modal]"),
    };
  
    refs.openModalBtn.addEventListener("click", toggleModal);
    refs.closeModalBtn.addEventListener("click", toggleModal);
  
    function toggleModal() {
      refs.modal.classList.toggle("is-hidden");
  };
  // modal-review
      const refsr = {
      openModalBtn: document.querySelector("[data-modal-rev-open]"),
      closeModalBtn: document.querySelector("[data-modal-rev-close]"),
      modal: document.querySelector("[data-modal-rev]"),
    };
  
    refsr.openModalBtn.addEventListener("click", toggleModal);
    refsr.closeModalBtn.addEventListener("click", toggleModal);
  
    function toggleModal() {
      refsr.modal.classList.toggle("is-hidden");
  }  
   // modal-buy-now
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
  // modal-thank-you
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
  // modal-feedback
      const refsfb = {
      openModalBtn: document.querySelector("[data-modal-fb-open]"),
      closeModalBtn: document.querySelector("[data-modal-fb-close]"),
      modal: document.querySelector("[data-modal-fb]"),
    };
  
    refsfb.openModalBtn.addEventListener("click", toggleModal);
    refsfb.closeModalBtn.addEventListener("click", toggleModal);
  
    function toggleModal() {
      refsfb.modal.classList.toggle("is-hidden");
  }  
  })();