(function(module) {
  var repoView = {};
  /* TODO: Let's compile our new template!
       Save the result of invoking Handlebars in this 'repoCompiler' variable
       that we will pass to the append method below. */
  var source = $('#repo-template').html();
  var repoCompiler = Handlebars.compile(source);  // Finish the Handlebars method here!

  repoView.renderRepos = function() {
    $('#about ul').empty().append(
      reposObj.withTheAttribute('name')  // TODO: experiment changing this attribute!
      .map(repoCompiler)
    );
  };
  reposObj.requestRepos(repoView.renderRepos);
/* TODO: Call the function that loads (or 'requests') our repo data.
    Pass in some view function as a higher order callback, so our repos
    will render after the data is loaded. */

})(window);
