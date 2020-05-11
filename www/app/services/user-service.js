appX.service('userService', ['$http', '$cookies', function($http, $cookies){

    var request = {
        method: 'GET',
        url: 'app/model/users.json',
    }

    this.getUser = function(user) {
        
        return $http(request)
                .then(function(response){
                    if(user.email == response.data.email && user.password == response.data.password){
                        $cookies.put('user', JSON.stringify(response));
                        response = {success: true, message: "Logged In Successfully"};
                    } else {
                        response = {success: false, message: "Username or password is incorrect"};
                    }
                    return response;
                }, function(error){
                    console.log(error);
                });
    }

    this.getAuthState = function() {
        var status = $cookies.get('user');
        if(status) {
            return true;
        } else{
            return false;
        }
    }

    this.clearCookie = function() {
        $cookies.remove('user');
    }

}]);