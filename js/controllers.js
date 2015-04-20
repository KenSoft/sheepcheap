angular.module('starter.controllers', [])

.controller('DashCtrl', function ($scope) {
})

.controller('FriendsCtrl', function ($scope, $http, Parse, $rootScope) {

    $scope.view = 'loading';
    $scope.friends = [];
    $scope.searchBox = $rootScope.keyword;
    console.log("Working");
    if ($rootScope.keyword != "") {
        Parse.searchName($rootScope.keyword, function (data) {
            console.log(data);
            $scope.friends = data;
            $scope.view = 'loading';
        })
    }
    // Is a number

    $scope.btn_search = function (searchBox, callback) {
        $scope.view = 'load';
        console.log(searchBox);
        $rootScope.keyword = searchBox;
        Parse.searchName(searchBox, function (data) {
            console.log(data);
            $scope.friends = data;
            $scope.view = 'loading';
        })

    }
    $scope.getAll = function () {
        $scope.view = 'load';
        Parse.getAll(function (data) {
            console.log(data);
            $scope.friends = data;
            $scope.view = 'loading';
        })

    }

})

.controller('FriendDetailCtrl', function ($scope, $stateParams, Parse, $rootScope, $ionicPopup, $localstorage) {
    console.log($rootScope.sessionId);
    if ($localstorage.get('password') != null && $localstorage.get('username') != null) {

        $scope.data = {}
        $scope.data.username = $localstorage.get('username');
        $scope.data.password = $localstorage.get('password');
        Parse.login($scope.data, function (data) {
            console.log(data);
            $rootScope.sessionId = data.sessionToken;
            $rootScope.userId = data.objectId;
            $rootScope.username = data.username;
            $scope.view = 'login';
        });
    }
    if ($rootScope.sessionId != null) {
        $scope.view = 'login';
    }
    $scope.loginLink2 = function () {
        $scope.data = {}
        $ionicPopup.show({
            templateUrl: "templates/popup.html",
            title: 'Login',
            subTitle: 'Please Login',
            scope: $scope,
            buttons: [
              { text: 'Cancel', onTap: function (e) { return true; } },
              {
                  text: '<b>Login</b>',
                  type: 'button-assertive',
                  onTap: function (e) {
                      $localstorage.set('username', $scope.data.username);
                      $localstorage.set('password', $scope.data.password);

                      Parse.login($scope.data, function (data) {
                          console.log(data);
                          $rootScope.sessionId = data.sessionToken;
                          $rootScope.userId = data.objectId;
                          $rootScope.username = data.username;
                          $scope.view = 'login';
                      });
                      $ionicPopup.show({
                          title: 'Success',
                          subTitle: 'Logged In',
                          scope: $scope,
                          buttons: [
                            { text: 'OK', type: 'button-assertive', onTap: function (e) { return true; } }
                          ]
                      })
                      return true;
                  }
              },
            ]
        }).then(function (res) {
            console.log('Tapped!', res);
        }, function (err) {
            console.log('Err:', err);
        }, function (popup) {
            // If you need to access the popup directly, do it in the notify method
            // This is also where you can programatically close the popup:
            // popup.close();
        });
    }
    $scope.registerLink2 = function () {
        $scope.data = {}
        $ionicPopup.show({
            templateUrl: "templates/popup2.html",
            title: 'Register',
            subTitle: 'Please Register',
            scope: $scope,
            buttons: [
              { text: 'Cancel', onTap: function (e) { return true; } },
              {
                  text: '<b>Register</b>',
                  type: 'button-balanced',
                  onTap: function (e) {

                      Parse.register($scope.data, function (data) {
                          console.log(data);

                      });
                      $localstorage.set('username', $scope.data.username);
                      $localstorage.set('password', $scope.data.password);

                      Parse.login($scope.data, function (data) {
                          console.log(data);
                          $rootScope.sessionId = data.sessionToken;
                          $rootScope.username = data.username;
                          $rootScope.userId = data.objectId;
                          $scope.view = 'login';

                      });
                      $ionicPopup.show({
                          title: 'Success',
                          subTitle: 'Registered and Logged In',
                          scope: $scope,
                          buttons: [
                            { text: 'OK', type: 'button-assertive', onTap: function (e) { return true; } }
                          ]
                      })
                      return true;
                  }
              },
            ]
        }).then(function (res) {
            console.log('Tapped!', res);
        }, function (err) {
            console.log('Err:', err);
        }, function (popup) {
            // If you need to access the popup directly, do it in the notify method
            // This is also where you can programatically close the popup:
            // popup.close();
        });
    }
    $scope.addToWish = function () {
        $scope.quantity = {}
        $ionicPopup.show({
            templateUrl: "templates/popup3.html",
            title: 'Add To Wishlist',
            subTitle: 'Please type quantity',
            scope: $scope,
            buttons: [
              { text: 'Cancel', onTap: function (e) { return true; } },
              {
                  text: '<b>OK</b>',
                  type: 'button-assertive',
                  onTap: function (e) {
                      console.log($scope.quantity);
                      console.log($stateParams.friendId);
                      Parse.addToWish($stateParams.friendId, $scope.quantity, $rootScope.userId, function (data) {
                          console.log($stateParams.friendId);


                          $ionicPopup.show({
                              title: 'Success',
                              subTitle: 'Success, Product Added to Wishlist',
                              scope: $scope,
                              buttons: [
                                { text: 'OK', type: 'button-assertive', onTap: function (e) { return true; } }
                              ]
                          })








                      });



                      return true;
                  }
              },
            ]
        }).then(function (res) {
            console.log('Tapped!', res);
        }, function (err) {
            console.log('Err:', err);
        }, function (popup) {
            // If you need to access the popup directly, do it in the notify method
            // This is also where you can programatically close the popup:
            // popup.close();
        });


    };
    //   $scope.friends = [];
    //   console.log($stateParams.friendId);
    //   Parse.searchTel($stateParams.friendId,function(data){
    //   console.log(data);
    //   $scope.friends = data;
    // });
    // $scope.BigC=[];
    // $scope.Lotus=[];
    // Parse.getLotus($stateParams.friendId,function(data){
    //     $scope.Lotus=data;


    // })
    // Parse.getBigC($stateParams.friendId,function(data){
    // $scope.BigC=data;
    // })  

    $scope.load = 'loading';
    Parse.getBigC($stateParams.friendId, function (data) {
        $scope.BigC = data;
        $scope.load = 'load';

    });

    Parse.getLotus($stateParams.friendId, function (data) {
        $scope.Lotus = data;
        $scope.load = 'load';
    });
    $scope.load = 'load';

})
.controller('PlaylistDetailCtrl', function ($scope, $stateParams, Parse, $rootScope, $ionicPopup, $localstorage) {
    console.log($rootScope.sessionId);
    if ($localstorage.get('password') != null && $localstorage.get('username') != null) {

        $scope.data = {}
        $scope.data.username = $localstorage.get('username');
        $scope.data.password = $localstorage.get('password');
        Parse.login($scope.data, function (data) {
            console.log(data);
            $rootScope.sessionId = data.sessionToken;
            $rootScope.userId = data.objectId;
            $rootScope.username = data.username;
            $scope.view = 'login';
        });
    }
    if ($rootScope.sessionId != null) {
        $scope.view = 'login';
    }
    $scope.friends = [];
    console.log($stateParams.friendId);
    Parse.searchTel($stateParams.friendId, function (data) {
        console.log(data);
        $scope.friends = data;
    });
    $scope.loginLink2 = function () {
        $scope.data = {}
        $ionicPopup.show({
            templateUrl: "templates/popup.html",
            title: 'Login',
            subTitle: 'Please Login',
            scope: $scope,
            buttons: [
              { text: 'Cancel', onTap: function (e) { return true; } },
              {
                  text: '<b>Login</b>',
                  type: 'button-assertive',
                  onTap: function (e) {
                      $localstorage.set('username', $scope.data.username);
                      $localstorage.set('password', $scope.data.password);

                      Parse.login($scope.data, function (data) {
                          console.log(data);
                          $rootScope.sessionId = data.sessionToken;
                          $rootScope.userId = data.objectId;
                          $rootScope.username = data.username;
                          $scope.view = 'login';
                      });
                      $ionicPopup.show({
                          title: 'Success',
                          subTitle: 'Logged In',
                          scope: $scope,
                          buttons: [
                            { text: 'OK', type: 'button-assertive', onTap: function (e) { return true; } }
                          ]
                      })
                      return true;
                  }
              },
            ]
        }).then(function (res) {
            console.log('Tapped!', res);
        }, function (err) {
            console.log('Err:', err);
        }, function (popup) {
            // If you need to access the popup directly, do it in the notify method
            // This is also where you can programatically close the popup:
            // popup.close();
        });
    }
    $scope.registerLink2 = function () {
        $scope.data = {}
        $ionicPopup.show({
            templateUrl: "templates/popup2.html",
            title: 'Register',
            subTitle: 'Please Register',
            scope: $scope,
            buttons: [
              { text: 'Cancel', onTap: function (e) { return true; } },
              {
                  text: '<b>Register</b>',
                  type: 'button-balanced',
                  onTap: function (e) {

                      Parse.register($scope.data, function (data) {
                          console.log(data);

                      });
                      $localstorage.set('username', $scope.data.username);
                      $localstorage.set('password', $scope.data.password);

                      Parse.login($scope.data, function (data) {
                          console.log(data);
                          $rootScope.sessionId = data.sessionToken;
                          $rootScope.username = data.username;
                          $rootScope.userId = data.objectId;
                          $scope.view = 'login';

                      });
                      $ionicPopup.show({
                          title: 'Success',
                          subTitle: 'Registered and Logged In',
                          scope: $scope,
                          buttons: [
                            { text: 'OK', type: 'button-assertive', onTap: function (e) { return true; } }
                          ]
                      })
                      return true;
                  }
              },
            ]
        }).then(function (res) {
            console.log('Tapped!', res);
        }, function (err) {
            console.log('Err:', err);
        }, function (popup) {
            // If you need to access the popup directly, do it in the notify method
            // This is also where you can programatically close the popup:
            // popup.close();
        });
    }
    $scope.addToWish = function (data) {
        $scope.quantity = {}
        $ionicPopup.show({
            templateUrl: "templates/popup3.html",
            title: 'Add To Wishlist',
            subTitle: 'Please type quantity',
            scope: $scope,
            buttons: [
              { text: 'Cancel', onTap: function (e) { return true; } },
              {
                  text: '<b>OK</b>',
                  type: 'button-assertive',
                  onTap: function (e) {
                      console.log($scope.quantity);
                      console.log(data);
                      Parse.addToWish(data, $scope.quantity, $rootScope.userId, function (data) {
                          console.log(data);
                      });



                      return true;
                  }
              },
            ]
        }).then(function (res) {
            console.log('Tapped!', res);
        }, function (err) {
            console.log('Err:', err);
        }, function (popup) {
            // If you need to access the popup directly, do it in the notify method
            // This is also where you can programatically close the popup:
            // popup.close();
        });


    };
})
.controller('HomeCtrl', function ($scope, $http, Parse, $rootScope, $ionicPopup, $localstorage) {
    console.log($rootScope.sessionId);
    if ($localstorage.get('password') != null && $localstorage.get('username') != null) {

        $scope.data = {}
        $scope.data.username = $localstorage.get('username');
        $scope.data.password = $localstorage.get('password');
        Parse.login($scope.data, function (data) {
            console.log(data);
            $rootScope.sessionId = data.sessionToken;
            $rootScope.userId = data.objectId;
            $rootScope.username = data.username;
            $scope.view = 'login';
        });
    }
    if ($rootScope.sessionId != null) {
        $scope.view = 'login';
    }
    /*$scope.playlists = [
      { productName: 'Namthip Drinking Water 500ml',price :'7 Baht',store:'Tops',promoString:'Buy 1 Get 1', id: 1 },
    ];*/
    $scope.loginLink = function () {
        $scope.data = {}
        $ionicPopup.show({
            templateUrl: "templates/popup.html",
            title: 'Login',
            subTitle: 'Please Login',
            scope: $scope,
            buttons: [
              { text: 'Cancel', onTap: function (e) { return true; } },
              {
                  text: '<b>Login</b>',
                  type: 'button-assertive',
                  onTap: function (e) {
                      $localstorage.set('username', $scope.data.username);
                      $localstorage.set('password', $scope.data.password);

                      Parse.login($scope.data, function (data) {
                          console.log(data);
                          $rootScope.sessionId = data.sessionToken;
                          $rootScope.userId = data.objectId;
                          $rootScope.username = data.username;
                          $scope.view = 'login';
                      });
                      $ionicPopup.show({
                          title: 'Success',
                          subTitle: 'Logged In',
                          scope: $scope,
                          buttons: [
                            { text: 'OK', type: 'button-assertive', onTap: function (e) { return true; } }
                          ]
                      })
                      return true;
                  }
              },
            ]
        }).then(function (res) {
            console.log('Tapped!', res);
        }, function (err) {
            console.log('Err:', err);
        }, function (popup) {
            // If you need to access the popup directly, do it in the notify method
            // This is also where you can programatically close the popup:
            // popup.close();
        });

    }
    $scope.logoutLink = function () {
        $rootScope.sessionId = null;
        $rootScope.userId = null;
        $rootScope.username = null;
        $localstorage.set('username', null);
        $localstorage.set('password', null);
        $scope.view = '';
        $ionicPopup.show({
            title: 'Logout',
            subTitle: 'Logged Out',
            scope: $scope,
            buttons: [
              { text: 'OK', type: 'button-assertive', onTap: function (e) { return true; } }
            ]
        })
    }
    $scope.registerLink = function () {
        $scope.data = {}
        $ionicPopup.show({
            templateUrl: "templates/popup2.html",
            title: 'Register',
            subTitle: 'Please Register',
            scope: $scope,
            buttons: [
              { text: 'Cancel', onTap: function (e) { return true; } },
              {
                  text: '<b>Register</b>',
                  type: 'button-balanced',
                  onTap: function (e) {

                      Parse.register($scope.data, function (data) {
                          console.log(data);

                      });
                      $localstorage.set('username', $scope.data.username);
                      $localstorage.set('password', $scope.data.password);

                      Parse.login($scope.data, function (data) {
                          console.log(data);
                          $rootScope.sessionId = data.sessionToken;
                          $rootScope.username = data.username;
                          $rootScope.userId = data.objectId;
                          $scope.view = 'login';

                      });
                      $ionicPopup.show({
                          title: 'Success',
                          subTitle: 'Registered and Logged In',
                          scope: $scope,
                          buttons: [
                            { text: 'OK', type: 'button-assertive', onTap: function (e) { return true; } }
                          ]
                      })
                      return true;
                  }
              },
            ]
        }).then(function (res) {
            console.log('Tapped!', res);
        }, function (err) {
            console.log('Err:', err);
        }, function (popup) {
            // If you need to access the popup directly, do it in the notify method
            // This is also where you can programatically close the popup:
            // popup.close();
        });
    }
    // $scope.friends = [];
    //  console.log("Working");
    //  Parse.getAll(function(data){
    //    console.log(data);
    //    $scope.products = data;
    //    $scope.load = 'loading';
    //  });
})

.controller('PlaylistCtrl', function ($scope, $stateParams) {
})
.controller('AccountCtrl', function ($scope, $rootScope, Parse, $ionicPopup, $localstorage) {
    console.log($rootScope.sessionId);
    if ($localstorage.get('password') != null && $localstorage.get('username') != null) {

        $scope.data = {}
        $scope.data.username = $localstorage.get('username');
        $scope.data.password = $localstorage.get('password');
        Parse.login($scope.data, function (data) {
            console.log(data);
            $rootScope.sessionId = data.sessionToken;
            $rootScope.userId = data.objectId;
            $rootScope.username = data.username;
            $scope.view = 'login';
            Parse.getWish($rootScope.userId, function (data) {
                console.log(data);
                $scope.wishlist = data.results;

                for (var i = 0; i < $scope.wishlist.length; i++) {
                    $scope.getPrice($scope.wishlist[i]);
                }

            });
        });
    }
    if ($rootScope.sessionId != null) {
        $scope.view = 'login';
    }
    $scope.btn_edit = function (data) {
        $scope.quantity = {};
        $ionicPopup.show({
            templateUrl: "templates/popup3.html",
            title: 'Add To Wishlist',
            subTitle: 'Please type quantity',
            scope: $scope,
            buttons: [
              { text: 'Cancel', onTap: function (e) { return true; } },
              {
                  text: '<b>OK</b>',
                  type: 'button-assertive',
                  onTap: function (e) {
                      console.log($scope.quantity);
                      console.log(data);
                      Parse.editWish(data, $rootScope.userId, parseInt($scope.quantity.quantity), function (data) {
                          console.log(data);

                          Parse.getWish($rootScope.userId, function (data) {
                              console.log(data);
                              $scope.wishlist = data.results;

                              $scope.wishlist = [];
                              $scope.wishlistSummary.bigc = 0;
                              $scope.wishlistSummary.lotus = 0;
                              console.log("Working");
                              Parse.getWish($rootScope.userId, function (data) {
                                  console.log(data);
                                  $scope.wishlist = data.results;

                                  for (var i = 0; i < $scope.wishlist.length; i++) {
                                      $scope.getPrice($scope.wishlist[i]);
                                  }

                              });
                          });




                      });
                      $ionicPopup.show({
                          title: 'Success',
                          subTitle: 'Success, Product Quantity Changed',
                          scope: $scope,
                          buttons: [
                            { text: 'OK', type: 'button-assertive', onTap: function (e) { return true; } }
                          ]
                      })
                  }
              }]
        })
    }
    $scope.btn_delete = function (data) {
        $ionicPopup.show({

            title: 'Confirm',
            subTitle: 'Do you want to delete ' + data.bigcProductName + ' from wishlist?',
            scope: $scope,
            rootScope: $rootScope,
            buttons: [
              { text: 'Cancel', onTap: function (e) { return true; } },
              {
                  text: '<b>Delete</b>',
                  type: 'button-assertive',
                  onTap: function (e) {

                      Parse.deleteWish(data, $rootScope.userId, function (data) {
                          Parse.getWish($rootScope.userId, function (data) {
                              console.log(data);
                              $scope.wishlist = data.results;

                              $scope.wishlist = [];
                              $scope.wishlistSummary.bigc = 0;
                              $scope.wishlistSummary.lotus = 0;
                              console.log("Working");
                              Parse.getWish($rootScope.userId, function (data) {
                                  console.log(data);
                                  $scope.wishlist = data.results;

                                  for (var i = 0; i < $scope.wishlist.length; i++) {
                                      $scope.getPrice($scope.wishlist[i]);
                                  }

                              });
                          });
                      });
                      $ionicPopup.show({
                          title: 'Deleted',
                          subTitle: 'Success, Product Removed to Wishlist',
                          scope: $scope,
                          buttons: [
                            { text: 'OK', type: 'button-assertive', onTap: function (e) { return true; } }
                          ]
                      })
                      return true;
                  }
              }

            ]
        });
    }

    $scope.loginLink2 = function () {
        $scope.data = {}
        $ionicPopup.show({
            templateUrl: "templates/popup.html",
            title: 'Login',
            subTitle: 'Please Login',
            scope: $scope,
            buttons: [
              { text: 'Cancel', onTap: function (e) { return true; } },
              {
                  text: '<b>Login</b>',
                  type: 'button-assertive',
                  onTap: function (e) {
                      $localstorage.set('username', $scope.data.username);
                      $localstorage.set('password', $scope.data.password);
                      Parse.login($scope.data, function (data) {
                          console.log(data);
                          $rootScope.sessionId = data.sessionToken;
                          $rootScope.userId = data.objectId;
                          $rootScope.username = data.username;
                          $scope.view = 'login';
                          $scope.wishlist = [];
                          $scope.wishlistSummary = {
                              bigc: 0,
                              lotus: 0
                          };
                          console.log("Working");
                          Parse.getWish($rootScope.userId, function (data) {
                              console.log(data);
                              $scope.wishlist = data.results;

                              for (var i = 0; i < $scope.wishlist.length; i++) {
                                  $scope.getPrice($scope.wishlist[i]);
                              }

                          });
                      });
                      $ionicPopup.show({
                          title: 'Success',
                          subTitle: 'Logged In',
                          scope: $scope,
                          buttons: [
                            { text: 'OK', type: 'button-assertive', onTap: function (e) { return true; } }
                          ]
                      })
                      return true;
                  }
              },
            ]
        }).then(function (res) {
            console.log('Tapped!', res);
        }, function (err) {
            console.log('Err:', err);
        }, function (popup) {
            // If you need to access the popup directly, do it in the notify method
            // This is also where you can programatically close the popup:
            // popup.close();
        });
    }
    $scope.registerLink2 = function () {
        $scope.data = {}
        $ionicPopup.show({
            templateUrl: "templates/popup2.html",
            title: 'Register',
            subTitle: 'Please Register',
            scope: $scope,
            buttons: [
              { text: 'Cancel', onTap: function (e) { return true; } },
              {
                  text: '<b>Register</b>',
                  type: 'button-balanced',
                  onTap: function (e) {

                      Parse.register($scope.data, function (data) {
                          console.log(data);

                      });
                      $localstorage.set('username', $scope.data.username);
                      $localstorage.set('password', $scope.data.password);
                      Parse.login($scope.data, function (data) {
                          console.log(data);
                          $rootScope.username = data.username;
                          $rootScope.sessionId = data.sessionToken;
                          $rootScope.userId = data.objectId;
                          $scope.view = 'login';
                          $scope.wishlist = [];
                          $scope.wishlistSummary = {
                              bigc: 0,
                              lotus: 0
                          };
                          console.log("Working");
                          Parse.getWish($rootScope.userId, function (data) {
                              console.log(data);
                              $scope.wishlist = data.results;

                              for (var i = 0; i < $scope.wishlist.length; i++) {
                                  $scope.getPrice($scope.wishlist[i]);
                              }

                          });
                      });
                      $ionicPopup.show({
                          title: 'Success',
                          subTitle: 'Registered and Logged In',
                          scope: $scope,
                          buttons: [
                            { text: 'OK', type: 'button-assertive', onTap: function (e) { return true; } }
                          ]
                      })
                      return true;
                  }
              },
            ]
        }).then(function (res) {
            console.log('Tapped!', res);
        }, function (err) {
            console.log('Err:', err);
        }, function (popup) {
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
    Parse.getWish($rootScope.userId, function (data) {
        console.log(data);
        $scope.wishlist = data.results;

        for (var i = 0; i < $scope.wishlist.length; i++) {
            $scope.getPrice($scope.wishlist[i]);
        }

    });




    $scope.getPrice = function (wish) {
        $scope.getBigcPrice(wish);
        $scope.getLotusPrice(wish);
    };

    $scope.getBigcPrice = function (wish) {
        //price 
        //name
        //wish.bigcPrice = wish.quantity * 10;
        Parse.getBigC(wish.barcode, function (data) {
            wish.bigcPrice = data[0].price;
            wish.bigcProductName = data[0].productName;
            wish.bigcImage = data[0].imageURL;
            $scope.wishlistSummary.bigc += wish.bigcPrice * wish.quantity;

        });
    };

    $scope.getLotusPrice = function (wish) {
        //price 
        //name
        Parse.getLotus(wish.barcode, function (data) {
            wish.lotusPrice = data[0].price;
            wish.lotusProductName = data[0].productName;
            wish.lotusImage = data[0].imageURL;
            $scope.wishlistSummary.lotus += wish.lotusPrice * wish.quantity;
        });
    };

    $scope.heightlightBigc = function (wish) {
        if (wish.bigcPrice && wish.lotusPrice) {
            if (wish.bigcPrice < wish.lotusPrice) {
                return "font-size:20px;color:#0F0;";
            }
        }
        return "font-size:20px;";
    };

    $scope.heightlightLotus = function (wish) {
        if (wish.bigcPrice && wish.lotusPrice) {
            if (wish.bigcPrice > wish.lotusPrice) {
                return "font-size:20px;color:#0F0;";
            }
        }
        return "font-size:20px;";
    };



})
.controller('LoginCtrl', function ($scope, $rootScope, Parse) {
    $scope.login = function (input) {
        Parse.login(input, function (data) {
            console.log(data);
            $rootScope.sessionId = data.sessionToken;
            $rootScope.userId = data.objectId;
            window.location = "/#/tab/dash";

        });
    }
})
.controller('RegisterCtrl', function ($scope, Parse) {
    $scope.register = function (input) {
        Parse.register(input, function (data) {
            console.log(data);
            window.location = "/#/login";

        });
    };
});
