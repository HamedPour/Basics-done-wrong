import $ from "jquery";


class Modal {
  constructor(){
    this.openModalButton = $(".open-modal");
    this.modal = $(".modal");
    this.closeModalButton = $(".modal__close");
    this.events();
  }

  //Event handler method
  events(){
    //clicking on the open modal button
    this.openModalButton.click(this.openModal.bind(this));
    //clicking on the CLOSE modal "X"
    this.closeModalButton.click(this.closeModal.bind(this));
    //pushing the keyboard esc key
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



}

export default Modal;
