angular.module('movieDeathsApp')
.directive('headerDirective', function(){

  return{
    restrict: 'E',
    template: '<div class="header">Deaths Per Minute</div>',
    link: function(scope, element, attrs){
      element.css({"font-color": "red"})
      return
    },

  }




})
