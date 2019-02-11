app.service('MouvementService',["$http","base_url",function($http,base_url){
    this.AccepterMouvement=function(token,idmouvement){
        return $http.post(base_url+"BanqueAdmin/Accepter",{Token :token.chain});
    };
    this.ListerMouvementNC=function(token){
        return $http.post(base_url+"BanqueAdmin/ListeMouvementNC",{Token :token.chain});
    };
    this.confirmerMouvement = function(token,idM){
        return $http.post(base_url+"BanqueAdmin/Confirmer",{Token :token.chain , idM :idM});
    }
}]);