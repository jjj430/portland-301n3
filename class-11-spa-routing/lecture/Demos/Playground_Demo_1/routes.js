// If I want to create a route:

// //How to create a route
// page('/', 'album');
// page();

// If I don't necessarily want to create a route but launch a function instead:

// STEP #5 - Add function to route
page('/', function (e) {

  // Test the console.log
  console.log("it workssssss!");

  // We hide about and we display home
  $('#about').hide();
  $('#home').show();

  // We create an object called about (this is our controller) and call the display method.
  about.display();
});


// When we go to about, we want about to show and home to hide
page('/about', function(e) {

  $('#about').show();
  $('#home').hide();
  console.log('this is about');


});

page();

