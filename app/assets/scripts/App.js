import Modal from "./modules/Modal";
import MobileMenu from "./modules/MobileMenu";
import MySection from "./modules/MySection";
import RevealOnScroll from "./modules/RevealOnScroll";
import Carousel from "./modules/Carousel";
import $ from "jquery";


var modal = new Modal();
var mobileMenu = new MobileMenu();
var mySection = new MySection();

// =============================================================================
new RevealOnScroll($(".topics"), "90%");
new RevealOnScroll($(".my"), "85%");
new RevealOnScroll($(".footer"), "95%");

// =============================================================================
var mySlidesBio = new Carousel("mySlidesBio");
var mySlidesEdu = new Carousel("mySlidesEdu");
var mySlidesExp = new Carousel("mySlidesExp");
var mySlidesTravel = new Carousel("mySlidesTravel");
mySlidesBio.next(6000);
mySlidesEdu.next(7500);
mySlidesExp.next(8800);
mySlidesTravel.next(10000);
