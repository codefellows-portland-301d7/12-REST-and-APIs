(function(module) {
  var reposObj = {};

  reposObj.allRepos = [];

  reposObj.requestRepos = function(callback) {

    /* TODO: How would you like to fetch your repos? Someone say AJAX?!
      Do not forget to call the callback! */
    $.ajax('https://api.github.com/users/cmd-kvn/repos'), {
      method: 'GET', // usually default
      success: function(response) {
        reposObj.allRepos = response;
        console.log('allRepos ', reposObj.allRepos);
      },
      error: function(response) {
        console.log('ooops', response);
      }
    };
    console.log('finished ajax');
  };

  reposObj.withTheAttribute = function(myAttr) {
    return reposObj.allRepos.filter(function(aRepo) {
      return aRepo[myAttr];
    });
  };

  reposObj.requestRepos();
  module.reposObj = reposObj;
})(window);
