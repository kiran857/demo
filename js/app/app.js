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
				})
				.when('/sprinkler', {
					templateUrl: 'partials/sprinkler.html',
					controller: 'homeController'
				})
				.when('/hydrant', {
					templateUrl: 'partials/hydrant.html',
					controller: 'homeController'
				})
				.when('/fireextinguisher', {
					templateUrl: 'partials/fireextinguisher.html',
					controller: 'homeController'
				})
				.when('/public', {
					templateUrl: 'partials/preaction.html',
					controller: 'homeController'
				})
				.when('/preaction', {
					templateUrl: 'partials/preaction.html',
					controller: 'homeController'
				})
				.when('/cnglpg', {
					templateUrl: 'partials/cnglpg.html',
					controller: 'homeController'
				})



				.when('/intrusion', {
					templateUrl: 'partials/intrusion.html',
					controller: 'homeController'
				});
	});

})();