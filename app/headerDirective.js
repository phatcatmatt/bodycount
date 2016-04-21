angular.module('movieDeathsApp')
.directive('headerDirective', function(){

  return{
    restrict: 'E',
    template: '<div class="header"><h1>Deaths Per Minute</h1></div>',
    link: function(scope, element, attrs){
      element.find('h1').css({'color': '#c12e2e',
       'font-size': '5vh',
        'padding': '1vh',
        'display': 'flex',
        'justify-content': 'center'
      });
    }

  }

})
