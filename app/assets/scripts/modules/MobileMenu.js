import $ from "jquery";

class MobileMenu {
  constructor(){
    this.mobileMenu = $(".site-header__mobile-menu");
    this.menuContent = $(".site-header__menu-content");
    this.events();
  }

// Events handling
events(){
  this.mobileMenu.click(this.openMenu.bind(this);
}

// Open the mobile menu
openMenu(){
  this.menuContent.toggleClass("site-header__menu-content--is-visible");
}


}

export default MobileMenu;
