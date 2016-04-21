angular.module('movieDeathsApp')
    .directive('pieChartDirective', function() {

        return {
            restrict: 'E',
            template: '<div id="pieChart"></div>',
            controller: function($scope, $state) {

              var dataset = $scope.myMovies;

              var w = 300;
              var h = 300;
              var donutWidth = 60;
              var radius = Math.min(w, h) / 2;
              var legendRectSize = 18;
              var legendSpacing = 4;

              var color = d3.scale.ordinal()
                .range(['#c12e2e','#d6604d','#f4a582','#fddbc7','#e0e0e0','#bababa','#878787','#4d4d4d']);

              var svg = d3.select('#pieChart')
              .append('svg')
              .attr('width', w)
              .attr('height', h)
              .append('g')
              .attr('transform', 'translate(' + (w / 2) + ',' + (h / 2) + ')');

              var arc = d3.svg.arc()
              .innerRadius(radius - donutWidth)
              .outerRadius(radius)

              var pie = d3.layout.pie()
              .value(function(d){return d.Body_Count; })
              .sort(null);

              var path = svg.selectAll('path')
              .data(pie(dataset))
              .enter()
              .append('path')
              .attr('d', arc)
              .attr('fill', function(d, i){
                return color(d.data.Film);
              });


              var legend = svg.selectAll('.legend')
              .data(color.domain())
              .enter()
              .append('g')
              .attr('class', 'legend')
              .attr('transform', function(d, i){
                var height = legendRectSize + legendSpacing;
                var offset = height * color.domain().length / 2;
                var horz = -2 * legendRectSize - 20;
                var vert = i * height - offset;
                return 'translate(' + horz + ',' + vert + ')';
              });

              legend.append('rect')
              .attr('width', legendRectSize)
              .attr('height', legendRectSize)
              .style('fill', color)
              .style('stroke', color);

              legend.append('text')
              .attr('x', legendRectSize + legendSpacing)
              .attr('y', legendRectSize - legendSpacing)
              .text(function(d) {return d; })


            }
        }




    })
