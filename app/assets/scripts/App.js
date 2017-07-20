import Modal from "./modules/Modal";
import MobileMenu from "./modules/MobileMenu";
import RevealOnScroll from "./modules/RevealOnScroll";
import Carousel from "./modules/Carousel";
import changeSection from "./modules/Tabs";
import $ from "jquery";


var modal = new Modal();
var mobileMenu = new MobileMenu();
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
// =============================================================================
//Will have to come back and clean this up into a proper Class - be less of a scrublord!
$("#bioButton").click(function(){
  changeSection(event, 'my-bio')
})
$("#eduButton").click(function(){
  changeSection(event, 'my-edu')
})
$("#expButton").click(function(){
  changeSection(event, 'my-exp')
})
$("#travelButton").click(function(){
  changeSection(event, 'my-travels')
})
// =============================================================================
