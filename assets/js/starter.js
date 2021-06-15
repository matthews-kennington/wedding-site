// Importing JavaScript
//
// You have two choices for including Bootstrap's JS files—the whole thing,
// or just the bits that you need.


// Import just what we need

// If you're importing tooltips or popovers, be sure to include our Popper.js dependency
import "../../node_modules/@popperjs/core/dist/umd/popper.min.js";

// Import the required DOM management plugins first
import "../../node_modules/bootstrap/js/dist/dom/data.js";
import "../../node_modules/bootstrap/js/dist/dom/event-handler.js";
import "../../node_modules/bootstrap/js/dist/dom/manipulator.js";
import "../../node_modules/bootstrap/js/dist/dom/selector-engine.js";
import "../../node_modules/bootstrap/js/dist/base-component.js";

// Then your specific components
// import "../../node_modules/bootstrap/js/dist/modal.js";

var heroVideo = document.getElementById("hero-video");

var heroVideoPromise = heroVideo.play();

if (heroVideoPromise !== undefined) {
  heroVideoPromise.catch(function (error) {
    heroVideo.remove();
  });
}
