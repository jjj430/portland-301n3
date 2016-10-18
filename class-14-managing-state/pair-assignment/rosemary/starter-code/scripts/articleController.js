(function(module) {
  var articlesController = {};

  Article.createTable();  // Ensure the database table is properly initialized

  articlesController.index = function(ctx, next) {
    articleView.index(ctx.articles);
  };

  // COMMENT: What does this method do?  What is it's execution path? 
  // This method is being called when user is looking at a specific article, middleware
  articlesController.loadById = function(ctx, next) { //finds article by id, middleware
    var articleData = function(article) {  //pass it an article, attaches to ctx (context)
      ctx.articles = article;
      next();
    };

    Article.findWhere('id', ctx.params.id, articleData);  
    //take 3 parameters: id user request, matches id from article, then runs articleData
  };

  // COMMENT: What does this method do?  What is it's execution path?
  // execution path: looks for author, attaches to ctx
  articlesController.loadByAuthor = function(ctx, next) {
    var authorData = function(articlesByAuthor) {
      ctx.articles = articlesByAuthor;
      next();
    };

    Article.findWhere('author', ctx.params.authorName.replace('+', ' '), authorData);
  };

  // COMMENT: What does this method do?  What is it's execution path?  
  //goes to route.js
  //looks for specific category, attaches to ctx
  articlesController.loadByCategory = function(ctx, next) {  
    var categoryData = function(articlesInCategory) {
      ctx.articles = articlesInCategory;
      next();
    };

    Article.findWhere('category', ctx.params.categoryName, categoryData);  
  };

  // COMMENT: What does this method do?  What is it's execution path?  
  // called when at root, loads all articles
  articlesController.loadAll = function(ctx, next) {
    var articleData = function(allArticles) {
      ctx.articles = Article.all;
      next();
    };

    if (Article.all.length) {
      ctx.articles = Article.all;
      next();  // route.js line 3
    } else {
      Article.fetchAll(articleData);  //line 73 of article.js
    }
  };


  module.articlesController = articlesController;
})(window);
