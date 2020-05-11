describe('UserService', function(){
    var httpBackend, userService;

    beforeEach(angular.mock.module('myApp'));

    beforeEach(inject(function($injector){
        httpBackend = $injector.get('$httpBackend');
        userService = $injector.get('userService');

        httpBackend.when('GET', 'app/login/login.html').respond("Loading Templates");
        httpBackend.when('GET', 'app/model/users.json').respond({success: true, message: "Logged In Successfully"});

        httpBackend.flush();
    }));

    afterEach(function(){
        httpBackend.verifyNoOutstandingExpectation();
        httpBackend.verifyNoOutstandingRequest();
    });

    it('should be able to login using service', function(){
        var user = {
            email: "admin@gmail.com",
            password: "admin"
        }
        //httpBackend.expectGET('app/model/users.json').respond({success: true, message: "Logged In Successfully"});
        userService.getUser(user).then(
            function(data){
                if(data.success) {
                    expect(data).toEqual({success: true, message: "Logged In Successfully"});
                } else {
                    expect(data).toEqual({success: false, message: "Username or password is incorrect"});
                }
                
            }
        );
        httpBackend.flush();
    });

    it('Authenticate User', function(){
        var status = userService.getAuthState();
        if(status){
            expect(status).toBe(true);
        }
    });

    it('User is not Authenticate', function(){
        userService.clearCookie();
        expect(userService.getAuthState()).not.toBe(true);
    });
});