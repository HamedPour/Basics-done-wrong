import $ from 'jquery';

class MySection {
  constructor(){
    this.bioButton = $("#bioButton");
    this.eduButton = $("#eduButton");
    this.expButton = $("#expButton");
    this.travelButton = $("#travelButton");
    // =================================================================
    this.bioSection = $("#my-bio");
    this.eduSection = $("#my-edu");
    this.expSection = $("#my-exp");
    this.travelSection = $("#my-travels");

    // =================================================================

    this.events();
    this.toggleVisiableBio();
    // this.toggleVisiableEdu();
    // this.toggleVisiableExp();
    // this.toggleVisiableTravel();
  }

  events() {
    this.bioButton.click(this.toggleVisiableBio.bind(this));
    this.eduButton.click(this.toggleVisiableEdu.bind(this));
    this.expButton.click(this.toggleVisiableExp.bind(this));
    this.travelButton.click(this.toggleVisiableTravel.bind(this));
  }

// My-Section visiablity toggle
  toggleVisiableBio(){
    this.bioSection.toggleClass("my--is-visible");
    this.bioButton.toggleClass("btn--active");
  }
  toggleVisiableEdu(){
    this.eduSection.toggleClass("my--is-visible");
    this.eduButton.toggleClass("btn--active");
  }
  toggleVisiableExp(){
    this.expSection.toggleClass("my--is-visible");
    this.expButton.toggleClass("btn--active");
  }
  toggleVisiableTravel(){
    this.travelSection.toggleClass("my--is-visible");
    this.travelButton.toggleClass("btn--active");
  }


}


export default MySection;
