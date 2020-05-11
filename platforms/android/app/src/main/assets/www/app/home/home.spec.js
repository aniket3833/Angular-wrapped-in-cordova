describe('Home', function () {

    beforeEach(angular.mock.module('myApp'));

    var $controller, $rootScope, httpBackend, service;

    beforeEach(inject(function (_$controller_, _$rootScope_) {
        $rootScope = _$rootScope_;
        $controller = _$controller_;
    }));

    describe('Testing Logout flow', function () {

        beforeEach(inject(function($injector){
            service = $injector.get('userService');
            httpBackend = $injector.get('$httpBackend');
            
            httpBackend.when('GET', 'app/home/home.html').respond("Loading Templates");
            httpBackend.when('GET', 'app/login/login.html').respond("Loading Templates");
            httpBackend.flush();
        }));
    
        afterEach(function () {
            httpBackend.verifyNoOutstandingExpectation();
            httpBackend.verifyNoOutstandingRequest();
        });

        it('should be able to logout', function () {
            var $scope = $rootScope.$new();
            var controller = $controller('headerController', { $scope: $scope });
            $scope.doLogout();
            expect(service.getAuthState()).not.toBe(true);
        })
    })
})