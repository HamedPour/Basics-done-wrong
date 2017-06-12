import $ from "jquery";

class MobileMenu {
  constructor(){
    this.mobileMenu = $(".site-header__mobile-menu");
    this.menuContent = $(".site-header__menu-content");
    this.events();
  }

// Events handling
events(){
  this.mobileMenu.click(this.toggleMenu.bind(this));
}

// Open the mobile menu
toggleMenu(){
  this.menuContent.toggleClass("site-header__menu-content--is-visible");
  this.mobileMenu.toggleClass("site-header__mobile-menu--close-x");
}


}

export default MobileMenu;
