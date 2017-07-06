import Modal from "./modules/Modal";
import MobileMenu from "./modules/MobileMenu";
import MySection from "./modules/MySection";
import RevealOnScroll from "./modules/RevealOnScroll";
import $ from "jquery";


var modal = new Modal();
var mobileMenu = new MobileMenu();
var mySection = new MySection();

new RevealOnScroll($(".topics"), "90%");
new RevealOnScroll($(".my"), "70%");
new RevealOnScroll($(".footer"), "95%");
