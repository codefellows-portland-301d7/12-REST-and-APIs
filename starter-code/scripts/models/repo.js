(function(module) {
  var reposObj = {};

  reposObj.allRepos = [];

  reposObj.requestRepos = function(callback) {
    /* TODO: How would you like to fetch your repos? Someone say AJAX?!
      Do not forget to call the callback! */
    $.ajax({
      url: 'https://api.github.com/user/repos' +
     '?per_page=10' +
     '&sort=updated',
      type: 'GET',
      headers: {'Authorization': 'token ' +
      token },
      success: function (data){
        data.forEach( function (one) { reposObj.allRepos.push(one);
        });
        console.log(data);
        callback();
      },
      fail: function (data){
        console.log('fail!\n' + data);
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
