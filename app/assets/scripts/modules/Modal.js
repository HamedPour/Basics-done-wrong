import $ from "jquery";


class Modal {
  constructor(){
    this.openModalButton = $(".open-modal");
    this.modal = $(".modal");
    this.closeModalButton = $(".modal__close");
    this.events();
    this.openModal();
    this.closeModal();
  }

  //Event handler method
  events(){
    //clicking on the open modal button
    this.openModalButton.click(this.openModal.bind(this));
    //clicking on the CLOSE modal "X"
    this.closeModalButton.click(this.closeModal.bind(this));
    //pushing the keyboard esc key
    $(document).keyup(this.keyPressHandler.bind(this));
  }

  //Method to open the modal
  openModal(){
    this.modal.addClass("modal--is-visible");
    return false;

  }

  //Method to close the modal
  closeModal(){
    this.modal.removeClass("modal--is-visible");
  }

  // Handling Keybaord pressing to escape
  keyPressHandler(e){
    if (e.keyCode ==27) {
      this.closeModal();
    }
  }

}

export default Modal;
