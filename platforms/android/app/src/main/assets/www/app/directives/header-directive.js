appX.directive('headerDirective', function(){
    return {
        replace: true,
        restrict: 'E',
        templateUrl: 'app/directives/header-directive.html',
        scope: {
            logout: "&",
            property: "=",
            header: "@"
        },
        /*link: ['userService', function(scope, userService) {
            scope.decorator.status = userService.getAuthState();
        }]*/
    }
})