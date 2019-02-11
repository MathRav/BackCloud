app.service('ClientService',["$http","base_url",function($http,base_url){
    this.Cloturer=function(token,idclient){
        return $http.post(base_url+"Banque/Cloturer",{token:token,idclient:idclient});
    };
    this.ListerClients=function(token){
        return $http.get(base_url+"Banque/ListeClients?Token="+token.chain);
    };
}]);