(function(){	
	angular.module('jpApp', ['ngRoute', 'ngAnimate','pagesContr'])
		
		.controller('jpController',function($scope){
			$scope.pageClass = 'home';
		})
		
		.config(function($routeProvider) {
			$routeProvider
				.when('/', {
					templateUrl: 'partials/home.html',
					controller: 'homeController'
				})		
				.when('/about', {
					templateUrl: 'partials/about.html',
					controller: 'aboutController'
				})		
				.when('/itizone', {
					templateUrl: 'partials/itizone.html',
					controller: 'itizoneController'
				})		
				.when('/clients', {
					templateUrl: 'partials/clients.html',
					controller: 'clientsController'
				})		
				.when('/blogs', {
					templateUrl: 'partials/blogs.html',
					controller: 'blogsController'
				})		
				.when('/contacts', {
					templateUrl: 'partials/contacts.html',
					controller: 'contactsController'
				})
				.when('/sitemap', {
					templateUrl: 'partials/sitemap.html',
					controller: 'sitemapController'
				});
	});

})();