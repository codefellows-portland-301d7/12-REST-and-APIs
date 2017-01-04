(function(module) {
  var repoView = {};
  /* TODO: done Let's compile our new template!
       Save the result of invoking Handlebars in this 'repoCompiler' variable
       that we will pass to the append method below. */

  var repoCompiler = function(currentValue){
    var source = $('#repo-template').html();
    var template = Handlebars.compile(source);
    var html = template(currentValue);
    // $('#repo-template').append(html); // append happens in renderRepos
    return html; // so it can be appended in renderRepos
  };  // Finish the Handlebars method here!

  repoView.renderRepos = function() {
    console.log('inside renderrepos ', reposObj.withTheAttribute('name'));
    $('#about ul').empty().append(
      reposObj.withTheAttribute('language')  // TODO done: experiment changing this attribute!
      .map(repoCompiler)
        // function (currentValue){
        // console.log('cv', currentValue);
        // var source = $('#repo-template').html();
        // var template = Handlebars.compile(source);
        // var html = template(reposObj);
      // })
    );
    console.log('inside renderRepos, after append to #about ul');
  };
/* TODO: done Call the function that loads (or 'requests') our repo data.
    Pass in some view function as a higher order callback, so our repos
    will render after the data is loaded. */

  reposObj.requestRepos(repoView.renderRepos);
  // repoCompiler();
  // renderRepos();
  module.repoView = repoView;
})(window);
