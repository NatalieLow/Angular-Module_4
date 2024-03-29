(function () {
	'use strict';

	angular.module('data')
	.constant('ApiBasePath', 'https://davids-restaurant.herokuapp.com')
	.service('MenuDataService' , MenuDataService);

	MenuDataService.$inject = ['$http', 'ApiBasePath']
	function MenuDataService($http, ApiBasePath) {
		var service = this;

		service.getAllCategories = function(){
			var response = $http({
				method: "GET",
				url: (ApiBasePath + "/categories.json")
			});
			return response;
		};

		service.getItemsForCategory = function(categoryShortName){
			var response = $http({
				method: "GET",
				url: (ApiBasePath + "/menu_items.json?category=" + 
					categoryShortName)
				// params: {
				// 	category: categoryShortName
				// }
			});
			return response;
		};
	}

})();