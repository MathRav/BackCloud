
app.service('BankService',["$http","base_url",function($http,base_url){
    this.InsertBanque=function(token,name,Configs,devise){
            var Banque={
                Token:token,
                params:Configs,
                devise:devise,
                nom:name
            };
            return $http.post(base_url+"BanqueAdmin/Creation",Banque);
    };
    this.modifBanque=function(token,id,name,Configs,devise){
        var Banque={
            idB : id,
            Token:token,
            params:Configs,
            devise:devise,
            nom:name
        };
        return $http.post(base_url+"BanqueAdmin/Modification",Banque);
    };
    this.ListerBanques=function(token){
        return $http.post(base_url+"BanqueAdmin/ListeBanque",{Token :token.chain});
    };
}]);