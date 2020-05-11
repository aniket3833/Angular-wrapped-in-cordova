appX.config(['$routeProvider', function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'app/login/login.html',
        controller: 'loginController'
      })
      .when('/home', {
        templateUrl: 'app/home/home.html',
        controller: 'headerController'
      })
      .otherwise({
        redirectTo: '/'
      })
  }]);