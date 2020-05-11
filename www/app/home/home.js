appX.controller('headerController',
  [
    '$scope',
    '$location',
    'userService',
    function ($scope, $location, service) {
      $scope.decorator = {
        status: service.getAuthState(),
        btnLabels: ['Logout'],
      }

      $scope.doLogout = function () {
        service.clearCookie();
        $location.path('/');
      }

      document.addEventListener("backbutton", function (e) {
        e.preventDefault();
      }, false);
    }
  ]
)