// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'starter.controllers' is found in controllers.js
angular.module('M.O.B', ['ionic', 'M.O.B.controllers'])

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    if (window.cordova && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
    }
    if (window.StatusBar) {
      // org.apache.cordova.statusbar required
      StatusBar.styleDefault();
    }
  });
})

.config(function($stateProvider, $urlRouterProvider) {
  $stateProvider

  .state('app', {
    url: "/app",
    abstract: true,
    templateUrl: "templates/menu.html",
    controller: 'AppCtrl'
  })

 

  
    .state('app.posts', {
      url: "/posts",
      views: {
        'menuContent': {
          templateUrl: "templates/posts.html",
          controller: 'PostsCtrl'
        }
      }
    })

    .state('app.post', {
      url: "/post/:postId",
      views: {
        'menuContent': {
          templateUrl: "templates/post.html",
          controller: 'PostCtrl'
        }
      }
    })

    .state('app.eldersonduty', {
      url: "/eldersonduty",
      views: {
        'menuContent': {
          templateUrl: "templates/eldersonduty.html",
          controller: 'EldersCtrl'
        }
      }
    })

    .state('app.sabbathschool', {
      url: "/sabbathschool",
      views: {
        'menuContent': {
          templateUrl: "templates/sabbathschool.html",
          controller: 'SabbathschoolCtrl'
        }
      }
    })




    .state('app.aboutus', {
      url: "/aboutus",
      views: {
        'menuContent': {
          templateUrl: "templates/aboutus.html",
          controller: 'AboutusCtrl'
        }
      }
    })

    .state('app.notifications', {
      url: "/notifications",
      views: {
        'menuContent': {
          templateUrl: "templates/notifications.html",
          controller: 'NotificationsCtrl'
        }
      }
    })

    .state('app.contactus', {
      url: "/contactus",
      views: {
        'menuContent': {
          templateUrl: "templates/contactus.html",
          controller: 'ContactusCtrl'
        }
      }
    })

    .state('app.videolib', {
      url: "/videolib",
      views: {
        'menuContent': {
          templateUrl: "templates/videolib.html",
          controller: 'VideolibCtrl'
        }
      }
    })


  // if none of the above states are matched, use this as the fallback
  $urlRouterProvider.otherwise('/app/posts');
});
