// In an IIFE we create our controller
(function(module) {

  var about = {};

  about.display = function() {
    $('a#about-id').click(function(e) {
      page('/about');

      // prevent Default because we want to stop the a tag from launching.
      e.preventDefault();
      e.stopImmediatePropagation();
    })
  };
  module.about = about;

})(window);




