(function(module) {
  var reposObj = {};

  reposObj.allRepos = [];

  reposObj.requestRepos = function(callback) {

    /* TODO: done How would you like to fetch your repos? Someone say AJAX?!
      Do not forget to call the callback! */
    $.ajax('https://api.github.com/user/repos', {
      method: 'GET', // usually default
      //headers: {Authorization: 'token ' + githubToken}, // this or parameters version
      data: {access_token: githubToken}, // parameters version, developer.github.com/v3/
      success: function(response) {
        reposObj.allRepos = response;
        console.log('allRepos ', reposObj.allRepos);
      },
      error: function(response) {
        console.log('ooops', response);
      }
    });
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
