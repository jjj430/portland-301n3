
// Create the routes that are controlled by the controller
page.base('/album');
page('/', '/photos/0');

// Explain parameters and how the parameter :page gets passed to the function imageView.photos.
// Then imageView becomes our controller.
page('/photos/:page', imageView.photos);

// Wildcard.
page('*', imageView.notfound);

// Starts it all.
page();
