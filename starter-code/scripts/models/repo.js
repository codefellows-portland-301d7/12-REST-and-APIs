(function(module) {
  var reposObj = {};

  reposObj.allRepos = [];

  reposObj.requestRepos = function() { //add callback into function
    /* TODO: FIRST How would you like to fetch your repos? Someone say AJAX?!
      Do not forget to call the callback! */
    $.ajax({
      url: 'https://api.github.com/users/SmithingChick/repos',
      headers: {Authorization:'token ' + key},
      success: function(repoData) {
        // callback(repoData);
        var repoTest = repoData;
        console.log(repoTest);
      }
    });
  };

  reposObj.withTheAttribute = function(myAttr) {
    return reposObj.allRepos.filter(function(aRepo) {
      return aRepo[myAttr];
    });
  };

  module.reposObj = reposObj;
})(window);
