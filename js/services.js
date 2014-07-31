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
        getBigC : function(q,callback){
          console.log(q);
            $http({
                 params: {
            where: {barcode:q,store:"Big-C"}
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
        getLotus : function(q,callback){
          console.log(q);
            $http({
                 params: {
            where: {barcode:q,store:"Tesco Lotus"}
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
                url:'https://api.parse.com/1/classes/products?where='+encodeURIComponent('{"store":"Big-C","productName" : { "\$regex" : ".*'+q+'.*" } }'),
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
                    email:data.email,
                    firstName:data.first,
                    lastName:data.last
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
                    barcode:data.barcode,
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
                console.log("success");
                callback(data);
            })
            .error(function(data){
                console.log("error");
            });
        }
    };
});