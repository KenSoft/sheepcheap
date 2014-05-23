angular.module('starter.services', [])

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
                 params: {
            where: {barcode:q}
                },
            method: 'GET',
                url:'https://api.parse.com/1/classes/products',
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
           searchName : function(q,callback){
            console.log(q);
            $http({
            method: 'GET',
                url:'https://api.parse.com/1/classes/products?where='+encodeURIComponent('{"productName" : { "\$regex" : ".*'+q+'.*" } }'),
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
        getAll : function(callback){
          console.log("GetAll");
            $http({
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
                console.log("success");
                callback(data);
            })
            .error(function(data){
                console.log("error");
            });

        }
    };

});
