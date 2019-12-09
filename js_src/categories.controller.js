(function (){
	'use strict';

	angular.module('MenuApp')
	.controller('CategoriesController', CategoriesController);

	CategoriesController.$inject = ['categories'];
	function CategoriesController(categories) {
		var catList = this;
		console.log(categories);
		catList.categories = categories.data;
	}
}());