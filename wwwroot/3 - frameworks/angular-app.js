/// <reference path="../../typings/tsd.d.ts" />
var AppHeaderComponent = (function () {
    function AppHeaderComponent() {
        this.template = "<div>My Angular App</div>";
    }
    AppHeaderComponent.createInstance = function () { return new AppHeaderComponent(); };
    return AppHeaderComponent;
})();
var AppNavigationComponent = (function () {
    function AppNavigationComponent() {
        this.template = "<div>Navigation</div>";
    }
    AppNavigationComponent.createInstance = function () { return new AppNavigationComponent(); };
    return AppNavigationComponent;
})();
var HomeComponent = (function () {
    function HomeComponent() {
        this.template = "<div>My Angular App</div>";
    }
    HomeComponent.createInstance = function () { return new HomeComponent(); };
    return HomeComponent;
})();
var AboutComponent = (function () {
    function AboutComponent() {
        this.template = "<div>My Angular App</div>";
    }
    AboutComponent.createInstance = function () { return new AboutComponent(); };
    return AboutComponent;
})();
angular.module("app", ["ngRoute"])
    .directive("appHeader", [AppHeaderComponent.createInstance])
    .directive("appNavigation", [AppNavigationComponent.createInstance])
    .directive("home", [HomeComponent.createInstance])
    .directive("about", [AboutComponent.createInstance])
    .config(["$routeProvider", function ($routeProvider) {
        $routeProvider
            .when("/", { templateUrl: "views/home.html" })
            .when("/about", { templateUrl: "views/about.html" })
            .otherwise("/");
    }]);
