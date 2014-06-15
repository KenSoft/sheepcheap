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

.controller('FriendDetailCtrl', function($scope, $stateParams,Parse,$rootScope) {
   console.log($rootScope.sessionId);
  if($rootScope.sessionId!=null){
    $scope.view = 'login';
  }
$scope.loginLink2 = function(){
  $scope.data = {}
    $ionicPopup.show({
        templateUrl:"templates/popup.html",
        title: 'Login',
        subTitle: 'Please Login',
        scope: $scope,
        buttons: [
          { text: 'Cancel', onTap: function(e) { return true; } },
          {
            text: '<b>Login</b>',
            type: 'button-assertive',
            onTap: function(e) {
            
      Parse.login($scope.data,function(data){
      console.log(data);
      $rootScope.sessionId=data.sessionToken;
      $rootScope.userId=data.objectId;
      $scope.view = 'login';

    });
    return true;
            }
          },
        ]
      }).then(function(res) {
        console.log('Tapped!', res);
      }, function(err) {
        console.log('Err:', err);
      }, function(popup) {
        // If you need to access the popup directly, do it in the notify method
        // This is also where you can programatically close the popup:
        // popup.close();
      });
}
$scope.registerLink2 = function(){
$scope.data = {}
    $ionicPopup.show({
        templateUrl:"templates/popup2.html",
        title: 'Register',
        subTitle: 'Please Register',
        scope: $scope,
        buttons: [
          { text: 'Cancel', onTap: function(e) { return true; } },
          {
            text: '<b>Register</b>',
            type: 'button-balanced',
            onTap: function(e) {
            
    Parse.register($scope.data,function(data){
      console.log(data);
      
    });
    Parse.login($scope.data,function(data){
      console.log(data);
      $rootScope.sessionId=data.sessionToken;
      $rootScope.userId=data.objectId;
      $scope.view = 'login';

    });
    return true;
            }
          },
        ]
      }).then(function(res) {
        console.log('Tapped!', res);
      }, function(err) {
        console.log('Err:', err);
      }, function(popup) {
        // If you need to access the popup directly, do it in the notify method
        // This is also where you can programatically close the popup:
        // popup.close();
      });
}
$scope.addToWish = function(data){
console.log(data);
    Parse.addToWish(data,$rootScope.userId,function(data){
      console.log(data);
    });
}
    $scope.friends = [];
    console.log($stateParams.friendId);
    Parse.searchTel($stateParams.friendId,function(data){
    console.log(data);
    $scope.friends = data.results;
  });
})
.controller('PlaylistDetailCtrl', function($scope, $stateParams,Parse,$rootScope) {
   console.log($rootScope.sessionId);
  if($rootScope.sessionId!=null){
    $scope.view = 'login';
  }
$scope.loginLink2 = function(){
  $scope.data = {}
    $ionicPopup.show({
        templateUrl:"templates/popup.html",
        title: 'Login',
        subTitle: 'Please Login',
        scope: $scope,
        buttons: [
          { text: 'Cancel', onTap: function(e) { return true; } },
          {
            text: '<b>Login</b>',
            type: 'button-assertive',
            onTap: function(e) {
            
      Parse.login($scope.data,function(data){
      console.log(data);
      $rootScope.sessionId=data.sessionToken;
      $rootScope.userId=data.objectId;
      $scope.view = 'login';

    });
    return true;
            }
          },
        ]
      }).then(function(res) {
        console.log('Tapped!', res);
      }, function(err) {
        console.log('Err:', err);
      }, function(popup) {
        // If you need to access the popup directly, do it in the notify method
        // This is also where you can programatically close the popup:
        // popup.close();
      });
}
$scope.registerLink2 = function(){
$scope.data = {}
    $ionicPopup.show({
        templateUrl:"templates/popup2.html",
        title: 'Register',
        subTitle: 'Please Register',
        scope: $scope,
        buttons: [
          { text: 'Cancel', onTap: function(e) { return true; } },
          {
            text: '<b>Register</b>',
            type: 'button-balanced',
            onTap: function(e) {
            
    Parse.register($scope.data,function(data){
      console.log(data);
      
    });
    Parse.login($scope.data,function(data){
      console.log(data);
      $rootScope.sessionId=data.sessionToken;
      $rootScope.userId=data.objectId;
      $scope.view = 'login';

    });
    return true;
            }
          },
        ]
      }).then(function(res) {
        console.log('Tapped!', res);
      }, function(err) {
        console.log('Err:', err);
      }, function(popup) {
        // If you need to access the popup directly, do it in the notify method
        // This is also where you can programatically close the popup:
        // popup.close();
      });
}
$scope.addToWish = function(data){
console.log(data);
    Parse.addToWish(data,$rootScope.userId,function(data){
      console.log(data);
    });
}
      $scope.friends = [];
  console.log($stateParams.friendId);
    Parse.searchTel($stateParams.friendId,function(data){
    console.log(data);
    $scope.friends = data.results;

  });
})
.controller('HomeCtrl', function($scope,$http,Parse,$rootScope,$ionicPopup) {
    console.log($rootScope.sessionId);
  if($rootScope.sessionId!=null){
    $scope.view = 'login';
  }
  /*$scope.playlists = [
    { productName: 'Namthip Drinking Water 500ml',price :'7 Baht',store:'Tops',promoString:'Buy 1 Get 1', id: 1 },
  ];*/
$scope.loginLink = function(){
  $scope.data = {}
    $ionicPopup.show({
        templateUrl:"templates/popup.html",
        title: 'Login',
        subTitle: 'Please Login',
        scope: $scope,
        buttons: [
          { text: 'Cancel', onTap: function(e) { return true; } },
          {
            text: '<b>Login</b>',
            type: 'button-assertive',
            onTap: function(e) {
            
      Parse.login($scope.data,function(data){
      console.log(data);
      $rootScope.sessionId=data.sessionToken;
      $rootScope.userId=data.objectId;
      $scope.view = 'login';

    });
    return true;
            }
          },
        ]
      }).then(function(res) {
        console.log('Tapped!', res);
      }, function(err) {
        console.log('Err:', err);
      }, function(popup) {
        // If you need to access the popup directly, do it in the notify method
        // This is also where you can programatically close the popup:
        // popup.close();
      });
      
}
$scope.registerLink = function(){
 $scope.data = {}
    $ionicPopup.show({
        templateUrl:"templates/popup2.html",
        title: 'Register',
        subTitle: 'Please Register',
        scope: $scope,
        buttons: [
          { text: 'Cancel', onTap: function(e) { return true; } },
          {
            text: '<b>Register</b>',
            type: 'button-balanced',
            onTap: function(e) {
            
    Parse.register($scope.data,function(data){
      console.log(data);
      
    });
    Parse.login($scope.data,function(data){
      console.log(data);
      $rootScope.sessionId=data.sessionToken;
      $rootScope.userId=data.objectId;
      $scope.view = 'login';

    });
    return true;
            }
          },
        ]
      }).then(function(res) {
        console.log('Tapped!', res);
      }, function(err) {
        console.log('Err:', err);
      }, function(popup) {
        // If you need to access the popup directly, do it in the notify method
        // This is also where you can programatically close the popup:
        // popup.close();
      });
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
.controller('AccountCtrl', function($scope,$rootScope,Parse) {
  console.log($rootScope.sessionId);
  if($rootScope.sessionId!=null){
    $scope.view = 'login';
  }
$scope.loginLink2 = function(){
  $scope.data = {}
    $ionicPopup.show({
        templateUrl:"templates/popup.html",
        title: 'Login',
        subTitle: 'Please Login',
        scope: $scope,
        buttons: [
          { text: 'Cancel', onTap: function(e) { return true; } },
          {
            text: '<b>Login</b>',
            type: 'button-assertive',
            onTap: function(e) {
            
      Parse.login($scope.data,function(data){
      console.log(data);
      $rootScope.sessionId=data.sessionToken;
      $rootScope.userId=data.objectId;
      $scope.view = 'login';

    });
    return true;
            }
          },
        ]
      }).then(function(res) {
        console.log('Tapped!', res);
      }, function(err) {
        console.log('Err:', err);
      }, function(popup) {
        // If you need to access the popup directly, do it in the notify method
        // This is also where you can programatically close the popup:
        // popup.close();
      });
}
$scope.registerLink2 = function(){
$scope.data = {}
    $ionicPopup.show({
        templateUrl:"templates/popup2.html",
        title: 'Register',
        subTitle: 'Please Register',
        scope: $scope,
        buttons: [
          { text: 'Cancel', onTap: function(e) { return true; } },
          {
            text: '<b>Register</b>',
            type: 'button-balanced',
            onTap: function(e) {
            
    Parse.register($scope.data,function(data){
      console.log(data);
      
    });
    Parse.login($scope.data,function(data){
      console.log(data);
      $rootScope.sessionId=data.sessionToken;
      $rootScope.userId=data.objectId;
      $scope.view = 'login';

    });
    return true;
            }
          },
        ]
      }).then(function(res) {
        console.log('Tapped!', res);
      }, function(err) {
        console.log('Err:', err);
      }, function(popup) {
        // If you need to access the popup directly, do it in the notify method
        // This is also where you can programatically close the popup:
        // popup.close();
      });
}

 $scope.friends = [];
  console.log("Working");
  Parse.getWish($rootScope.userId,function(data){
    console.log(data);
    $scope.friends = data.results;
  });
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
