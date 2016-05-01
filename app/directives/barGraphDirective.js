angular.module('movieDeathsApp')
    .directive('barGraphDirective', function() {

            return {
                restrict: 'E',
                template: '<div class="d3Container"><svg id="directiveChart"></svg></div>',
                controller: function($scope, $state) {

                  var w = 300;
                  var h = 300;
                  var padding = 2;
                  $scope.dataset = []
                  for (var i = 0; i < $scope.myMovies.length; i++) {
                      $scope.dataset.push($scope.myMovies[i])
                  }

                  var svg = d3.select("#directiveChart")
                      .attr("width", w)
                      .attr("height", h);


                  function colorPicker(v) {
                      if (v >= 1) {
                          return "#c12e2e"
                      } else if (v < 1) {
                          return "#9e9e9e"
                      }
                  }

                  var xScale = d3.scale.linear()
                    .domain([
                      0,
                      ($scope.dataset.length)
                    ])
                    .range([0, w]);


                    var yScale = d3.scale.linear()
                    .domain([
                      0, d3.max($scope.dataset, function(d){return d.deathsPerMinute})
                    ])
                    .range([h, 0])

                    svg.selectAll("rect")
                        .attr("class", "allClass")
                        .data($scope.dataset)
                        .enter()
                        .append("rect")
                        .attr({
                            x: function(d, i) {
                                return xScale(i)
                            },
                            y: function(d) {
                                return yScale(d.deathsPerMinute)
                            },
                            width: w / $scope.dataset.length - padding,
                            height: function(d) {
                                return h-yScale(d.deathsPerMinute)
                            },
                            fill: function(d) {
                                return colorPicker(d.deathsPerMinute)
                            }
                        })

                    svg.selectAll("text")
                        .attr("class", "allClass")
                        .data($scope.dataset)
                        .enter()
                        .append("text")
                        .text(function(d) {
                            return d.deathsPerMinute
                        })
                        .attr({
                            "text-anchor": "middle",
                            x: function(d, i) {
                                return i * (w / $scope.dataset.length) + (w / $scope.dataset.length - padding) / 2
                            },
                            y: function(d) {
                              if((h - yScale(d.deathsPerMinute)) < 20){
                                return h - 18
                              } else {
                                return (yScale(d.deathsPerMinute)) + 16
                              }
                            },
                            "font-family": "Lato",
                            "font-size": 14,
                            "fill": "#000"
                        })


                }
              }




            })
