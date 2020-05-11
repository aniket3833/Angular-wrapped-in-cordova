appX.controller('loginController', 
    [
        '$log',
        '$scope',
        'userService',
        function($log, $scope, service) {
            $scope.response;
            $scope.login = function(user) {
                if(user && user.email && user.password){
                    service.getUser(user).then(function(resp, status){
                        $scope.response = resp;
                        if(resp.success) {
                            document.location.hash = "/home";
                        } else {
                            $log.info(resp.message);
                        }
                    }, function(error, status){
                        $log.error(error, status);
                    });
                } else {
                    $log.error("User ID or Password is missing");
                }
            }
        }
    ]
);