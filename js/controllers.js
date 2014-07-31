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

.controller('FriendDetailCtrl', function($scope, $stateParams,Parse,$rootScope,$ionicPopup) {
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
    $scope.quantity = {}
    $ionicPopup.show({
        templateUrl:"templates/popup3.html",
        title: 'Add To Wishlist',
        subTitle: 'Please type quantity',
        scope: $scope,
        buttons: [
          { text: 'Cancel', onTap: function(e) { return true; } },
          {
            text: '<b>OK</b>',
            type: 'button-assertive',
            onTap: function(e) {
            console.log($scope.quantity);
   console.log(data);
    Parse.addToWish(data,$scope.quantity,$rootScope.userId,function(data){
      console.log(data);
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


 } ;
    $scope.friends = [];
    console.log($stateParams.friendId);
    Parse.searchTel($stateParams.friendId,function(data){
    console.log(data);
    $scope.friends = data.results;
  });
})
.controller('PlaylistDetailCtrl', function($scope, $stateParams,Parse,$rootScope,$ionicPopup) {
   console.log($rootScope.sessionId);
  if($rootScope.sessionId!=null){
    $scope.view = 'login';
  }
       $scope.friends = [];
  console.log($stateParams.friendId);
      Parse.searchTel($stateParams.friendId,function(data){
    console.log(data);
    $scope.friends = data.results;
    });
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
    $scope.quantity = {}
    $ionicPopup.show({
        templateUrl:"templates/popup3.html",
        title: 'Add To Wishlist',
        subTitle: 'Please type quantity',
        scope: $scope,
        buttons: [
          { text: 'Cancel', onTap: function(e) { return true; } },
          {
            text: '<b>OK</b>',
            type: 'button-assertive',
            onTap: function(e) {
            console.log($scope.quantity);
   console.log(data);
    Parse.addToWish(data,$scope.quantity,$rootScope.userId,function(data){
      console.log(data);
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


 } ;
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
.controller('AccountCtrl', function($scope,$rootScope,Parse,$ionicPopup) {
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






  $scope.wishlist = [];
  $scope.wishlistSummary = {
    bigc: 0,
    lotus: 0
  };
  console.log("Working");
  Parse.getWish($rootScope.userId,function(data){
    console.log(data);
    $scope.wishlist = data.results;

    for(var i=0;i<$scope.wishlist.length;i++){
      $scope.getPrice($scope.wishlist[i]);
    }

  });




  $scope.getPrice = function(wish){
    $scope.getBigcPrice(wish);
    $scope.getLotusPrice(wish);
  };

  $scope.getBigcPrice = function(wish){
    //price 
    //name
    //wish.bigcPrice = wish.quantity * 10;
    Parse.getBigC(wish.barcode,function(data){
      wish.bigcPrice=data.results[0].price;
      wish.bigcProductName=data.results[0].productName;

      $scope.wishlistSummary.bigc += wish.bigcPrice * wish.quantity;
     
    });
  };

  $scope.getLotusPrice = function(wish){
    //price 
    //name
    Parse.getLotus(wish.barcode,function(data){
      wish.lotusPrice=data.results[0].price;
      wish.lotusProductName=data.results[0].productName;

      $scope.wishlistSummary.lotus += wish.lotusPrice * wish.quantity;
    });
  };





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
