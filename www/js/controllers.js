angular.module('starter.controllers', [])

.controller('AppCtrl', function($scope) {
  // Form data for the login modal
      // $scope.loginData = {};

      // // Create the login modal that we will use later
      // $ionicModal.fromTemplateUrl('templates/login.html', {
      //   scope: $scope
      // }).then(function(modal) {
      //   $scope.modal = modal;
      // });

      // // Triggered in the login modal to close it
      // $scope.closeLogin = function() {
      //   $scope.modal.hide();
      // };

      // // Open the login modal
      // $scope.login = function() {
      //   $scope.modal.show();
      // };

      // // Perform the login action when the user submits the login form
      // $scope.doLogin = function() {
      //   console.log('Doing login', $scope.loginData);

      //   // Simulate a login delay. Remove this and replace with your login
      //   // code if using a login system
      //   $timeout(function() {
      //     $scope.closeLogin();
      //   }, 1000);
      // };
})


.controller('PostsCtrl', function($scope, $rootScope, $http) {

  $rootScope.posts = [];

  var myurl = "http://www.mobsdachurch.com/wp-json/wp/v2/posts";

  $http.get(myurl)
    .success(function(response) {
      angular.forEach(responce, function(child){
        $rootScope.posts.push(child);
      })
    });
  
  
})

.controller('PostCtrl', function($scope, $rootScope, $stateParams) {

  var id = $stateParams.postId;
  $scope.title = "";

  for (var i = 0; i < $rootScope.posts.length; i++) {
    $scope.title = $rootScope.posts[i].title;
  }
  
})

.controller('EldersCtrl', function($scope) {
  alert('hey');
  
  
})

.controller('NotificationsCtrl', function($scope) {
  alert('hey');
  
  
})

.controller('ContactusCtrl', function($scope) {
  alert('hey');
  

})

.controller('SabbathschoolCtrl', function($scope) {
  alert('happy Sabbath');
  

})

.controller('VideolibCtrl', function($scope) {
  
  

})

.controller('AboutusCtrl', function($scope) {
  alert('hey');
  
  
});


