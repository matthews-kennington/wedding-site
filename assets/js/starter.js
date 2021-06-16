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
import "../../node_modules/bootstrap/js/dist/collapse.js";
import "../../node_modules/bootstrap/js/dist/scrollspy.js";

const tokenId = "eyJhbGciOiJFUzI1NiIsInR5cCI6IkpXVCIsImtpZCI6IlRWWTJZU0hUMk0ifQ.eyJpc3MiOiIzNFdVS1FCWFhIIiwiaWF0IjoxNjIzODQ4MzEwLCJleHAiOjE2NTUzMzc2MDAsIm9yaWdpbiI6IndlZGRpbmcubWF0dGhld3Mta2VubmluZ3Rvbi5jb20ifQ.WqERpuk9Ol5SZsEodrDas4FLRItWD9U1DWxIHwK14Beq3IYM6-p0JXDtoYX5xIth6xTGfW5YQBPvk4OmYR8Yjw";

var heroVideo = document.getElementById("hero-video");

var heroVideoPromise = heroVideo.play();

if (heroVideoPromise !== undefined) {
  heroVideoPromise.catch(function (error) {
    heroVideo.remove();
  });
}

mapkit.init({
  authorizationCallback: function(done) {
      done(tokenID);
  }
});

var map = new mapkit.Map("map");

var crownePlaza = new mapkit.CoordinateRegion(
  new mapkit.Coordinate(53.796570, -1.557678)
);

var busStation = new mapkit.CoordinateRegion(
  new mapkit.Coordinate(53.797183, -1.535897)
);

var trainStation = new mapkit.CoordinateRegion(
  new mapkit.Coordinate(53.794379, -1.548459)
);

var airport = new mapkit.CoordinateRegion(
  new mapkit.Coordinate(53.869003, -1.659751)
);

var crownePlazaAnnotation = new MarkerAnnotation(crownePlaza, {
  color: "#202e52",
  title: "Crowne Plaza",
  subtitle: "Leeds",
  selected: true
});

var busStationAnnotation = new MarkerAnnotation(busStation, {
  title: "Bus Station",
  subtitle: "Leeds"
});

var trainStationAnnotation = new MarkerAnnotation(trainStation, {
  title: "Train Station",
  subtitle: "Leeds"
});

var airportAnnotation = new MarkerAnnotation(airport, {
  title: "Airport",
  subtitle: "Leeds Bradford LBA"
});

map.region = crownePlaza;
map.showItems([
  crownePlazaAnnotation,
  busStationAnnotation,
  trainStationAnnotation,
  airportAnnotation
]);
