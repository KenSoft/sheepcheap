angular.module('starter.services', [])
.factory('$localstorage', ['$window',
  function($window) {
    return {
      set: function(key, value) {
        $window.localStorage[key] = value;
      },
      get: function(key, defaultValue) {
        if(!$window.localStorage[key] && defaultValue) {
          $window.localStorage[key] = defaultValue;
        }
        return $window.localStorage[key] || defaultValue;
      },
      setObject: function(key, value) {
        $window.localStorage[key] = JSON.stringify(value);
      },
      getObject: function(key) {
        return JSON.parse($window.localStorage[key] || '{}');
      },
      getAll: function() {
        return $window.localStorage;
      },
      clear: function() {
        $window.localStorage.clear();
      }
    };
  }
])
.factory('Parse', function ($http) {
    var app_id = 'syN64QMWju6KQhFZYxbgIvMNfMgKq2DkVb6cHYEi';
    var api_key = 'HEVdhYLuFSEWHC86GbMVQyPkWziTKGmgwJ2ioF9C';
    console.log("Factory");
    return {
        searchHot : function(q,callback){
          console.log(q);
            $http({
                 params: {
                    where: {barcode:q}
                },
            method: 'GET',
                url:'https://api.parse.com/1/classes/hotDeal',
                headers:
                {
                    'X-Parse-Application-Id': app_id,
                    'X-Parse-REST-API-Key': api_key,
                    'Content-Type': 'application/json'
                }
            })
            .success(function(data) {
                console.log(data);
                callback(data);
            });
        },
         searchTel : function(q,callback){
                        console.log(q);
            $http({
            method: 'GET',
            url:'http://sheepcheap.cloudapp.net:3000/api/products?filter[where][barcode]='+q+''
                //?where='+encodeURIComponent('{"store":"Big-C","productName" : { "\$regex" : ".*'+q+'.*" } }')
            })
            .success(function(data) {
                console.log(data);
                callback(data);
            });
          // console.log(q);
          //   $http({
          //        params: {
          //   where: {barcode:q}
          //       },
          //   method: 'GET',
          //       url:'https://api.parse.com/1/classes/products',
          //       headers:
          //       {
          //           'X-Parse-Application-Id': app_id,
          //           'X-Parse-REST-API-Key': api_key,
          //           'Content-Type': 'application/json'
          //       }
          //   })
          //   .success(function(data) {
          //       console.log(data);
          //       callback(data);
          //   });
        },
        getBigC : function(q,callback){
            console.log(q);
            $http({
            method: 'GET',
            url:'http://sheepcheap.cloudapp.net:3000/api/products?filter[where][barcode]='+q+'&filter[where][store]=Big-C'
                //?where='+encodeURIComponent('{"store":"Big-C","productName" : { "\$regex" : ".*'+q+'.*" } }')
            })
            .success(function(data) {
                console.log(data);
                callback(data);
            });

          // console.log(q);
          //   $http({
          //        params: {
          //   where: {barcode:q,store:"Big-C"}
          //       },
          //   method: 'GET',
          //       url:'https://api.parse.com/1/classes/products',
          //       headers:
          //       {
          //           'X-Parse-Application-Id': app_id,
          //           'X-Parse-REST-API-Key': api_key,
          //           'Content-Type': 'application/json'
          //       }
          //   })
          //   .success(function(data) {
          //       console.log(data);
          //       callback(data);
          //   });
        },
        editWish : function(data,userId,x,callback){
        $http({method: 'PUT', url: 'https://api.parse.com/1/classes/'+userId+'/'+data.objectId , 
            data:{
               quantity:x
            },
            headers:  {
            "X-Parse-Application-Id"    : "syN64QMWju6KQhFZYxbgIvMNfMgKq2DkVb6cHYEi",
            "X-Parse-REST-API-Key"      : "HEVdhYLuFSEWHC86GbMVQyPkWziTKGmgwJ2ioF9C",
            "Content-Type"              : "application/json"
            }

        }).
        success(function(data, status, headers, config) {
        //
        callback(data);
        }).
        error(function(data, status, headers, config) {
            // called asynchronously if an error occurs
            // or server returns response with an error status.
            console.log(data);
            alert("Error");
        });
        },
        deleteWish : function(data,userId,callback){
        $http({method: 'DELETE', url: 'https://api.parse.com/1/classes/'+userId+'/'+data.objectId , headers:  {
            "X-Parse-Application-Id"    : "syN64QMWju6KQhFZYxbgIvMNfMgKq2DkVb6cHYEi",
            "X-Parse-REST-API-Key"      : "HEVdhYLuFSEWHC86GbMVQyPkWziTKGmgwJ2ioF9C"
        }}).
        success(function(data, status, headers, config) {
            // this callback will be called asynchronously
            // when the response is available
   
            console.log(data);
            callback(data);
        }).
            error(function(data, status, headers, config) {
            // called asynchronously if an error occurs
            // or server returns response with an error status.
            console.log(data);
        });

          // console.log(q);
          //   $http({
          //        params: {
          //   where: {barcode:q,store:"Tesco Lotus"}
          //       },
          //   method: 'GET',
          //       url:'https://api.parse.com/1/classes/products',
          //       headers:
          //       {
          //           'X-Parse-Application-Id': app_id,
          //           'X-Parse-REST-API-Key': api_key,
          //           'Content-Type': 'application/json'
          //       }
          //   })
          //   .success(function(data) {
          //       console.log(data);
          //       callback(data);
          //   });
        },
        getLotus : function(q,callback){
            console.log(q);
            $http({
            method: 'GET',
            url:'http://sheepcheap.cloudapp.net:3000/api/products?filter[where][barcode]='+q+'&filter[where][store]=Tesco Lotus'
                //?where='+encodeURIComponent('{"store":"Big-C","productName" : { "\$regex" : ".*'+q+'.*" } }')
            })
            .success(function(data) {
                console.log(data);
                callback(data);
            });
          // console.log(q);
          //   $http({
          //        params: {
          //   where: {barcode:q,store:"Tesco Lotus"}
          //       },
          //   method: 'GET',
          //       url:'https://api.parse.com/1/classes/products',
          //       headers:
          //       {
          //           'X-Parse-Application-Id': app_id,
          //           'X-Parse-REST-API-Key': api_key,
          //           'Content-Type': 'application/json'
          //       }
          //   })
          //   .success(function(data) {
          //       console.log(data);
          //       callback(data);
          //   });
        },
           searchName : function(q,callback){
            console.log(q);
            $http({
            method: 'GET',
            url:'http://sheepcheap.cloudapp.net:3000/api/products?filter[where][productName][like]=%25'+q+'%25'
                //?where='+encodeURIComponent('{"store":"Big-C","productName" : { "\$regex" : ".*'+q+'.*" } }')
            })
            .success(function(data) {
                console.log(data);
                callback(data);
            });
        },
        login : function(data,callback){
            console.log('GetAll');
            $http({
                params: {
                    username:data.username,
                    password:data.password
                },
                method: 'GET',
                url:'https://api.parse.com/1/login',
                headers:
                {
                    'X-Parse-Application-Id': app_id,
                    'X-Parse-REST-API-Key': api_key,
                    'Content-Type': 'application/json'
                }
            })
            .success(function(data) {
                console.log(data);
                console.log('success');
                callback(data);
            })
            .error(function(data){
                console.log('error'+data);
            });
        },
        register : function(data,callback){

    //      console.log(q);
            $http({

                method: 'POST',
                url:'https://api.parse.com/1/users',
                headers:
                {
                    'X-Parse-Application-Id': app_id,
                    'X-Parse-REST-API-Key': api_key,
                    'Content-Type': 'application/json'
                },
                data: {
                    username:data.username,
                    password:data.password,
                    email:data.email
                }
            })
            .success(function(data) {
                console.log(data);
                callback(data);
            });
        },
        addToWish : function(data,quantityRaw,userId,callback){
            var quantity=parseInt(quantityRaw.quantity);
    //      console.log(q);
            $http({

                method: 'POST',
                url:'https://api.parse.com/1/classes/'+userId,
                headers:
                {
                    'X-Parse-Application-Id': app_id,
                    'X-Parse-REST-API-Key': api_key,
                    'Content-Type': 'application/json'
                },
                data: {
                    barcode:data,
                    quantity:quantity
                }
            })
            .success(function(data) {
                console.log(data);
                callback(data);
            });
        },
        getWish : function(userId,callback){
          console.log("GetAll");
            $http({
                method: 'GET',
                url:'https://api.parse.com/1/classes/'+userId,
                headers:
                {
                    'X-Parse-Application-Id': app_id,
                    'X-Parse-REST-API-Key': api_key,
                    'Content-Type': 'application/json'
                }
            })
            .success(function(data) {
                console.log(data);
                console.log("success");
                callback(data);
            })
            .error(function(data){
                console.log("error");
            });
        },
        getAll : function(callback){
          console.log("GetAll");
            $http({
                method: 'GET',
                url:'http://sheepcheap.cloudapp.net:3000/api/products'
            })
            .success(function(data) {
                console.log(data);
                console.log("success");
                callback(data);
            })
            .error(function(data){
                console.log("error");
            });
          }
    };
});