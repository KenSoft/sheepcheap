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
.controller('HomeCtrl', function($scope,$http,Parse) {
  /*$scope.playlists = [
    { productName: 'Namthip Drinking Water 500ml',price :'7 Baht',store:'Tops',promoString:'Buy 1 Get 1', id: 1 },
  ];*/

 $scope.friends = [];
  console.log("Working");
  Parse.getAll(function(data){
    console.log(data);
    $scope.friends = data.results;
  });
})

.controller('PlaylistCtrl', function($scope, $stateParams) {
})
.controller('AccountCtrl', function($scope) {
})
.controller('LoginCtrl', function($scope,$rootScope) {
})
.controller('RegisterCtrl', function($scope) {
});
