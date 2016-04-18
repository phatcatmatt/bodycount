angular.module('movieDeathsApp')
    .directive('allDataDirective', function() {

            return {
                restirict: 'E',
                template: '<div></div>',
                controller: function($scope) {

                    if ($scope.dataset) {
                      console.log("cool beans")
                        svg.selectAll(".allClass")
                            .data($scope.dataset)
                            .exit()
                            .remove();
                          }




                        $scope.dataset = []
                        for (var i = 0; i < $scope.myMovies.length; i++) {
                            $scope.dataset.push($scope.myMovies[i].Body_Count)
                        }
                        var w = 300;
                        var h = 300;
                        var padding = 2;


                        var svg = d3.select("body").append("svg")
                            .attr("width", w)
                            .attr("height", h);

                        function colorPicker(v) {
                            if (v > 99) {
                                return "#ff0033"
                            } else if (v <= 99) {
                                return "#666666"
                            }
                        }

                        svg.selectAll("rect")
                            .attr("class", "allClass")
                            .data($scope.dataset)
                            .enter()
                            .append("rect")
                            .attr({
                                x: function(d, i) {
                                    return i * (w / $scope.dataset.length)
                                },
                                y: function(d) {
                                    return h - (d)
                                },
                                width: w / $scope.dataset.length - padding,
                                height: function(d) {
                                    return (d)
                                },
                                fill: function(d) {
                                    return colorPicker(d)
                                }
                            })

                        svg.selectAll("text")
                            .attr("class", "allClass")
                            .data($scope.dataset)
                            .enter()
                            .append("text")
                            .text(function(d) {
                                return d
                            })
                            .attr({
                                "text-anchor": "middle",
                                x: function(d, i) {
                                    return i * (w / $scope.dataset.length) + (w / $scope.dataset.length - padding) / 2
                                },
                                y: function(d) {
                                    return h - (d) + 14
                                },
                                "font-family": "sans-serif",
                                "font-size": 12,
                                "fill": "#ffffff"
                            })

                    }



                }



            })
