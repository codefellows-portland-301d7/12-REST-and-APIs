(function(module) {
  var repoView = {};

  /* TODO: SECOND Let's compile our new template!
       Save the result of invoking Handlebars in this 'repoCompiler' variable
       that we will pass to the append method below. */
  var repoCompiler = function(repos, repoTemplateId) {
    var repoTemplate = Handlebars.complie($(repoTemplateId).text());

    repos.description = ;
    repos.language = ;
    repos.created = ;
    repos.lastUpdate = ;
    repos.watchers = ; //"{{#if watchers_count}} in index.html

  };  // Finish the Handlebars method here!

  repoView.renderRepos = function() {
    $('#about ul').empty().append(
      reposObj.withTheAttribute('name')  // TODO: experiment changing this attribute!
      .map(repoCompiler)
    );
  };
/* TODO: Call the function that loads (or 'requests') our repo data.
    Pass in some view function as a higher order callback, so our repos
    will render after the data is loaded. */

});
