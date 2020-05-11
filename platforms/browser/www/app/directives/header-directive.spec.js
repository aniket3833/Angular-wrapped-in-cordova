var element, userService, httpBackend, $rootScope, $compile;

describe('Header Directive', function () {

    beforeEach(angular.mock.module('myApp'));
    // beforeEach(angular.mock.module('./header-directive.html'));    

    beforeEach(inject(function ($injector) {
        userService = $injector.get('userService');
        httpBackend = $injector.get('$httpBackend');

        httpBackend.when('GET', 'app/directives/header-directive.html').respond("Loading Templates");
        httpBackend.when('GET', 'app/login/login.html').respond("Loading Templates");

        httpBackend.flush();
    }));

    beforeEach(inject(function (_$compile_, _$rootScope_) {
        $compile = _$compile_;
        $rootScope = _$rootScope_.$new();
    }));

    beforeEach(inject(function () {
        $rootScope.decorator = { btnLabels: ['Logout'] };
        $rootScope.header = "Home";
        element = getCompileElement();
    }));

    it('should create a DOM with template text correctly', function () {
        expect(element.html()).toContain("Logout");
        expect(element.html()).toContain("Home");
    });

    /*it('should be able to logout', function () {
        $rootScope.$digest();
        var anchor = element.find('a')[0];
        anchor.click();
        expect(userService.getAuthState()).toBe(false);
    })*/

})

function getCompileElement() {
    var ele = angular.element('<div><header-directive property="decorator" logout="doLogout()" header="Home"></header-directive><div>');
    var compiledEle = $compile(ele)($rootScope);
    // var compiledEle = $compile('<header-directive property="decorator" logout="doLogout()" header="Home"></header-directive>')($rootScope);
    console.log("Templates: ", compiledEle.html());
    $rootScope.$digest();
    return compiledEle;
}