/// <reference path="../../typings/tsd.d.ts" />

class AppHeaderComponent {    
    template = "<div>My Angular App</div>";    
    static createInstance() { return new AppHeaderComponent() }
}

class AppNavigationComponent {
    template = "<div>Navigation</div>";
    static createInstance() { return new AppNavigationComponent() }
}

class HomeComponent {
    template = "<div>My Angular App</div>";
    static createInstance() { return new HomeComponent() }
}

class AboutComponent {
    template = "<div>My Angular App</div>";
    static createInstance() { return new AboutComponent() }
}

angular.module("app", ["ngRoute"])
    .directive("appHeader", [AppHeaderComponent.createInstance])
    .directive("appNavigation", [AppNavigationComponent.createInstance])
    .directive("home", [HomeComponent.createInstance])
    .directive("about", [AboutComponent.createInstance])
    .config(["$routeProvider", ($routeProvider: ng.route.IRouteProvider) => {
        $routeProvider
            .when("/", { templateUrl: "views/home.html" })
            .when("/about", { templateUrl: "views/about.html" })
            .otherwise("/");
    }]);