// STEP #1 Create IIFE
(function(module) {


  // STEP #2 Create object that holds our function.
  var imageView = {};

  // STEP #3 Create pagination mechanisms
  var perPage = 6
    , prev = document.querySelector('#prev')
    , next = document.querySelector('#next');


  // STEP #4 Create function that looks for context
  imageView.photos = function(ctx) {
    // Context
    //
    // 1. Routes are passed Context objects,
    // 2. page.js has a single "Context" object
    // 3. We can attach data to the context object and pass it around.
    //    You do that with the params object within context.


    var page = ~~ctx.params.page; // Takes the parameters from URL
    var from = page * perPage; // In our array, we take the number of pages multiply it by the number we are at.
    var to = from + perPage; // from there plus amount per page
    console.log('showing page %s : %s..%s', page, from, to);
    var photos = images.slice(from, to); // Slice from 2*6=12 to 12+6=18

    imageView.display(photos); // pass your array of 6 photos to this function. MOVE ON TO STEP #5

    imageView.adjustPager(page); // STEP #6 - Adjust pager.
  };

  imageView.notfound = function() {
    document.querySelector('p')
      .textContent = 'not found';
  };

  // STEP #5 - Create img element and display it in the DOM
  imageView.display = function(photos) {
    // Grab the element with the id photos
    var el = document.querySelector('#photos');
    el.innerHTML = '';

    // For each of the photos create an img tag and add it to the element above (i.e. el)
    photos.forEach(function(photo){
      var img = document.createElement('img');
      img.src = photo;
      el.appendChild(img);
    });
  };

  // STEP #6 Create function to adjust the pager to see if there are
  // any more photos.
  imageView.adjustPager =  function(page) {
    if (page) {
      prev.style.display = 'inline-block';
      prev.setAttribute('href', '/album/photos/' + (page - 1));
    } else {
      prev.style.display = 'none';
    }

    next.setAttribute('href', '/album/photos/' + (page + 1));
  };

  // Array of images
  var images = [
      'http://upload.wikimedia.org/wikipedia/en/7/76/Grim_Fandango_artwork.jpg'
    , 'http://www.xblafans.com/wp-content/uploads//2011/08/Grim-Fandango1.jpg'
    , 'https://www.fillmurray.com/200/300'
    , 'http://gamejunkienz.files.wordpress.com/2012/02/grimfandango.jpg'
    , 'http://onlyhdwallpapers.com/wallpaper/video_games_grim_fandango_lucas_arts_desktop_1024x768_wallpaper-305343.jpg'
    , 'http://lparchive.org/Grim-Fandango-(Screenshot)/Update%207/02176.gif'
    , 'http://bulk2.destructoid.com/ul/128679-GrimFandangoActionFigures.jpg'
    , 'http://www.gamasutra.com/features/20061103/grimfandango02.jpg'
    , 'http://metavideogame.files.wordpress.com/2011/05/grimhof_03_1081459316.jpg'
    , 'http://3.bp.blogspot.com/_zBnIHQUy4r4/SpxdDw1Z8tI/AAAAAAAABJM/FoCWfc8imnc/s400/GrimFandango1024x768.jpg'
    , 'http://www.deviantart.com/download/184571597/grim_fandango_by_domigorgon-d31w0ct.jpg'
    , 'http://vgboxart.com/boxes/PC/29535-grim-fandango.png?t=1243105773'
    , 'http://kastatic.com/i2/games/1/3/13230/10.png'
    , 'http://www.thunderboltgames.com/s/img600/grimfandango.jpg'
    , 'http://i2.listal.com/image/1425291/936full-grim-fandango-artwork.jpg'
    , 'http://www.xblafans.com/wp-content/uploads//2011/08/Grim-Fandango1.jpg'
    , 'http://media.giantbomb.com/uploads/0/1371/190604-grimfandango106_super.jpg'
    , 'http://gamejunkienz.files.wordpress.com/2012/02/grimfandango.jpg'
    , 'http://onlyhdwallpapers.com/wallpaper/video_games_grim_fandango_lucas_arts_desktop_1024x768_wallpaper-305343.jpg'
    , 'http://lparchive.org/Grim-Fandango-(Screenshot)/Update%207/02176.gif'
    , 'http://bulk2.destructoid.com/ul/128679-GrimFandangoActionFigures.jpg'
    , 'http://www.gamasutra.com/features/20061103/grimfandango02.jpg'
    , 'http://metavideogame.files.wordpress.com/2011/05/grimhof_03_1081459316.jpg'
    , 'http://3.bp.blogspot.com/_zBnIHQUy4r4/SpxdDw1Z8tI/AAAAAAAABJM/FoCWfc8imnc/s400/GrimFandango1024x768.jpg'
    , 'http://www.deviantart.com/download/184571597/grim_fandango_by_domigorgon-d31w0ct.jpg'
    , 'http://vgboxart.com/boxes/PC/29535-grim-fandango.png?t=1243105773'
    , 'http://kastatic.com/i2/games/1/3/13230/10.png'
    , 'http://www.thunderboltgames.com/s/img600/grimfandango.jpg'
    , 'http://i2.listal.com/image/1425291/936full-grim-fandango-artwork.jpg'
    , 'http://www.xblafans.com/wp-content/uploads//2011/08/Grim-Fandango1.jpg'
    , 'http://media.giantbomb.com/uploads/0/1371/190604-grimfandango106_super.jpg'
    , 'http://gamejunkienz.files.wordpress.com/2012/02/grimfandango.jpg'
    , 'http://onlyhdwallpapers.com/wallpaper/video_games_grim_fandango_lucas_arts_desktop_1024x768_wallpaper-305343.jpg'
    , 'http://lparchive.org/Grim-Fandango-(Screenshot)/Update%207/02176.gif'
    , 'http://bulk2.destructoid.com/ul/128679-GrimFandangoActionFigures.jpg'
    , 'http://www.gamasutra.com/features/20061103/grimfandango02.jpg'
    , 'http://metavideogame.files.wordpress.com/2011/05/grimhof_03_1081459316.jpg'
    , 'http://3.bp.blogspot.com/_zBnIHQUy4r4/SpxdDw1Z8tI/AAAAAAAABJM/FoCWfc8imnc/s400/GrimFandango1024x768.jpg'
    , 'http://www.deviantart.com/download/184571597/grim_fandango_by_domigorgon-d31w0ct.jpg'
    , 'http://vgboxart.com/boxes/PC/29535-grim-fandango.png?t=1243105773'
    , 'http://kastatic.com/i2/games/1/3/13230/10.png'
    , 'http://www.thunderboltgames.com/s/img600/grimfandango.jpg'
    , 'http://i2.listal.com/image/1425291/936full-grim-fandango-artwork.jpg'
  ];


  // Expose the object
  module.imageView = imageView;

})(window);