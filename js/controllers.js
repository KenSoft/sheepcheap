angular.module('starter.controllers', [])

.controller('DashCtrl', function($scope) {
})

.controller('FriendsCtrl', function($scope,$http,Parse) {
      $scope.friends = [];
  console.log("Working");

  // Is a number

    $scope.btn_search = function(searchBox,callback){
        console.log(searchBox);
            if (!isNaN(parseInt(searchBox[0]))) {
  Parse.searchTel(searchBox,function(data){
    console.log(data);
    $scope.friends = data.results;
  });

}
else{
      Parse.searchName(searchBox,function(data){
    console.log(data);
    $scope.friends = data.results;
})
}

}

})

.controller('FriendDetailCtrl', function($scope, $stateParams,Parse) {
      $scope.friends = [];
  console.log($stateParams.friendId);
    Parse.searchTel($stateParams.friendId,function(data){
    console.log(data);
    $scope.friends = data.results;
  });
})
.controller('PlaylistDetailCtrl', function($scope, $stateParams,Parse) {
      $scope.friends = [];
  console.log($stateParams.friendId);
    Parse.searchTel($stateParams.friendId,function(data){
    console.log(data);
    $scope.friends = data.results;
  });
})
.controller('HomeCtrl', function($scope,$http,Parse,$rootScope) {
    console.log($rootScope.sessionId);
  if($rootScope.sessionId!=null){
    $scope.view = 'login';
  }
  /*$scope.playlists = [
    { productName: 'Namthip Drinking Water 500ml',price :'7 Baht',store:'Tops',promoString:'Buy 1 Get 1', id: 1 },
  ];*/
$scope.loginLink = function(){
window.location="/#/login";
}
$scope.registerLink = function(){
window.location="/#/register";
}
 $scope.friends = [];
  console.log("Working");
  Parse.getAll(function(data){
    console.log(data);
    $scope.friends = data.results;
  });
})

.controller('PlaylistCtrl', function($scope, $stateParams) {
})
.controller('AccountCtrl', function($scope,$rootScope) {
  console.log($rootScope.sessionId);
  if($rootScope.sessionId!=null){
    $scope.view = 'login';
  }
$scope.loginLink2 = function(){
window.location="/#/login";
}
$scope.registerLink2 = function(){
window.location="/#/register";
}
})
.controller('LoginCtrl', function($scope,$rootScope,Parse) {
    $scope.login = function(input){
    Parse.login(input,function(data){
      console.log(data);
      $rootScope.sessionId=data.sessionToken;
      $rootScope.userId=data.objectId;
      window.location="/#/tab/dash";

    });
}})
.controller('RegisterCtrl', function($scope,Parse) {
    $scope.register = function(input){
    Parse.register(input,function(data){
      console.log(data);
      window.location="/#/login";

    });
  };
});
