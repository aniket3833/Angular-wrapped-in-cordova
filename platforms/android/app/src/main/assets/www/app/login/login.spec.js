describe('Login', function () {

    beforeEach(angular.mock.module('myApp'));

    var $controller, $rootScope, httpBackend;

    beforeEach(inject(function (_$controller_, _$rootScope_) {
        $rootScope = _$rootScope_;
        $controller = _$controller_;
    }));

    describe('Testing Login flow', function () {

        beforeEach(inject(function($injector){
            httpBackend = $injector.get('$httpBackend');
            
            httpBackend.when('GET', 'app/login/login.html').respond("Loading Templates");
            httpBackend.when('GET', 'app/model/users.json').respond({ success: true, message: "Logged In Successfully" });
            httpBackend.flush();
        }));
    
        afterEach(function () {
            httpBackend.verifyNoOutstandingExpectation();
            httpBackend.verifyNoOutstandingRequest();
        });

        it('should be able to login', function () {
            var $scope = $rootScope.$new();
            var controller = $controller('loginController', { $scope: $scope });
            console.log("Controller", controller);
            var user = {
                id: 'admin',
                password: 'admin'
            }
            $scope.login(user);
        });
    })
})