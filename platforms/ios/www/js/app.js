// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
var proposal = angular.module('starter', ['ionic', 'ui.router'])

proposal.config(function($stateProvider, $urlRouterProvider) {
 
  $stateProvider
    .state('list', {
      url: '/',
      templateUrl: 'list.html',
      controller: 'ListCtrl'
    })
    
    .state('profile', {
      url: '/movie/:movieid',
      templateUrl: 'profile.html',
      controller: 'ProfileCtrl'
    })
    
    .state('view', {
      url: '/movie/:movieid',
      templateUrl: 'view.html',
      controller: 'ViewCtrl'
    })
    
    .state('protfolio', {
      url: '/movie/:movieid',
      templateUrl: 'protfolio.html',
      controller: 'ProtfolioCtrl'
    })
    
    .state('contact', {
      url: '/movie/:movieid',
      templateUrl: 'contact.html',
      controller: 'ContactCtrl'
    });
 
  $urlRouterProvider.otherwise("/");
 
});

proposal.controller('ListCtrl', function($scope, $state) {
  $scope.changePage = function(){
    $state.go('view', {movieid: 1});
  }
  $scope.changeProfile = function(){
    $state.go('profile', {movieid: 2});
  }
  $scope.changeProtfolio = function(){
    $state.go('protfolio', {movieid: 3});
  }
   $scope.changeContact = function(){
    $state.go('contact', {movieid: 3});
  }
  
});

proposal.controller('ProfileCtrl', function($scope, $stateParams, $ionicHistory) {
  console.log($stateParams.movieid);
  $scope.goBack = function(){
    $ionicHistory.goBack();
  }    
});

proposal.controller('ViewCtrl', function($scope, $stateParams, $ionicHistory) {
  console.log($stateParams.movieid);
  $scope.goBack = function(){
    $ionicHistory.goBack();
  }    
});

proposal.controller('ProtfolioCtrl', function($scope, $stateParams, $ionicHistory) {
  console.log($stateParams.movieid);
  
  $scope.sendFeedback= function() {
        if(window.plugins && window.plugins.emailComposer) {
            window.plugins.emailComposer.showEmailComposerWithCallback(function(result) {
                console.log("Response -> " + result);
            }, 
            "Feedback for your App", // Subject
            "",                      // Body
            ["rox.shahid@gmail.com"],    // To
            null,                    // CC
            null,                    // BCC
            false,                   // isHTML
            null,                    // Attachments
            null);                   // Attachment Data
        }
    }
});

proposal.controller('ContactCtrl', function($scope, $stateParams, $ionicHistory) {
  console.log($stateParams.movieid);
  $scope.goBack = function(){
    $ionicHistory.goBack();
  }    
});

