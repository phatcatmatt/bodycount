angular.module('movieDeathsApp')
.controller('mainCtrl', function($scope, mainSvc, $firebaseObject,
  $firebaseArray, $firebaseAuth, firebaseRoot){

  var ref = new Firebase(firebaseRoot + 'moviedata/');
  $scope.allMovies = $firebaseArray(ref)

// d3.select("body").append("svg").append("rect").attr("width", 50).attr("height",200).style("fill","red")
// d3.select('body').append('svg').attr("width",50).attr('height',50).append("circle").attr("cx",25).attr("cy",25).attr("r",25).style("fill", "purple")
//
// var w = 300;
// var h = 120;
// var padding = 2;
// var dataset = [5, 10, 13, 19, 21, 25, 11, 25, 22, 18, 7];
// var svg = d3.select("body").append("svg")
// .attr("wdith", w).attr("height", h)
//
// function colorpicker(v){
//   if(v<=20){
//     return "#666666";
//   }
//   else if (v>20){
//     return "#ff0033"
//   }
// }
//
// svg.selectAll("rect")
//   .data(dataset)
//   .enter()
//   .append("rect")
//     .attr({
//       x: function(d,i){return i * (w/dataset.length)},
//       y: function(d){return h - (d*4)},
//       width: w / dataset.length - padding,
//       height: function(d){return d*4},
//       fill: function(d){return colorpicker(d)}
//     })
//
//
// svg.selectAll("text")
// .data(dataset)
// .enter()
// .append("text")
// .text(function (d){return d; })
// .attr({
//   "text-anchor": "middle",
//   x: function(d,i) {return i * (w/ dataset.length)+(w/dataset.length - padding)/2},
//   y: function(d) {return h - (d*4) + 14},
//   "font-family": "sans-serif",
//   "font-size": 12,
//   "fill": "#ffffff",
// })







  $scope.myMovies = [];
  var dataset = [];

  $scope.startCounters = function(){
    $scope.myBodyCount = 0;
    $scope.deathsPerMinute = 0;
    $scope.totalMinutes = 0;
    $scope.countM = 0;
    $scope.countR = 0;
    $scope.countPG13 = 0;
    $scope.countPG = 0;
    $scope.countG = 0;
    $scope.countUnrated = 0;
    $scope.countX = 0;
    $scope.countApproved = 0;
    $scope.countGP = 0;
    $scope.totalMovies = 0;
    var dataset = [];

  }

  $scope.addMovie = function(movie){
    $scope.startCounters();
    $scope.myMovies.push($scope.allMovies[movie]);
    dataset.push($scope.allMovies[movie].Body_Count)

    for(var i = 0; i < $scope.myMovies.length; i++){
      $scope.myBodyCount += $scope.myMovies[i].Body_Count;
      $scope.totalMinutes += $scope.myMovies[i].Length_Minutes;

      if($scope.myMovies[i].MPAA_Rating === "M"){
        $scope.countM++
      }
      else if($scope.myMovies[i].MPAA_Rating === "R"){
        $scope.countR++
      }
      else if($scope.myMovies[i].MPAA_Rating === "PG-13"){
        $scope.countPG13++
      }
      else if($scope.myMovies[i].MPAA_Rating === "PG"){
        $scope.countPG++
      }
      else if($scope.myMovies[i].MPAA_Rating === "G"){
        $scope.countG++
      }
      else if($scope.myMovies[i].MPAA_Rating === "Unrated"){
        $scope.countUnrated++
      }
      else if($scope.myMovies[i].MPAA_Rating === "X"){
        $scope.countX++
      }
      else if($scope.myMovies[i].MPAA_Rating === "GP"){
        $scope.countGP++
      }
      else if($scope.myMovies[i].MPAA_Rating === "Approved"){
        $scope.countApproved++
      }

    }
    $scope.deathsPerMinute = Math.round(($scope.myBodyCount / $scope.totalMinutes) * 100) / 100
    $scope.totalMovies = $scope.myMovies.length;
    console.log(dataset)
    var w = 300;
    var h = 300;
    var padding = 2;


    var svg = d3.select("body").append("svg")
    .attr("width", w)
    .attr("height", h);

    function colorPicker(v){
      if (v > 99) {return "#ff0033"}
      else if (v <= 99) {return "#666666"}
    }

    svg.selectAll("rect")
      .data(dataset)
      .enter()
      .append("rect")
       .attr({
       x: function(d, i){return i * (w / dataset.length)},
       y: function(d){return h - (d)},
       width: w /dataset.length - padding,
       height: function(d) {return (d)},
       fill: function(d){return colorPicker(d)}
     })

     svg.selectAll("text")
     .data(dataset)
     .enter()
     .append("text")
     .text(function (d){return d})
     .attr({
       "text-anchor": "middle",
       x: function(d, i) {return i * (w / dataset.length)+ (w / dataset.length - padding) / 2},
       y: function(d) {return h - (d) + 14},
       "font-family": "sans-serif",
       "font-size": 12,
       "fill": "#ffffff"

     })



  }

  $scope.reset = function(){
    $scope.myMovies = [];
    $scope.startCounters();

  }


// for adding all movies to my list with button click

  // $scope.addAll = function(){
  //   $scope.myBodyCount = 0;
  //   $scope.totalMinutes = 0;
  //   $scope.countM = 0;
  //   $scope.countR = 0;
  //   $scope.countPG13 = 0;
  //   $scope.countPG = 0;
  //   $scope.countG = 0;
  //   $scope.countUnrated = 0;
  //   $scope.countX = 0;
  //   $scope.countApproved = 0;
  //   $scope.countGP = 0;
  //   $scope.totalMovies = 0;
  //   for (var i = 0; i < $scope.allMovies.length; i++) {
  //     $scope.myMovies.push($scope.allMovies[i])
  //   }
  //   for(var i = 0; i < $scope.myMovies.length; i++){
  //     $scope.myBodyCount += $scope.myMovies[i].Body_Count;
  //     $scope.totalMinutes += $scope.myMovies[i].Length_Minutes;
  //     if($scope.myMovies[i].MPAA_Rating === "M"){
  //       $scope.countM++
  //     }
  //     else if($scope.myMovies[i].MPAA_Rating === "R"){
  //       $scope.countR++
  //     }
  //     else if($scope.myMovies[i].MPAA_Rating === "PG-13"){
  //       $scope.countPG13++
  //     }
  //     else if($scope.myMovies[i].MPAA_Rating === "PG"){
  //       $scope.countPG++
  //     }
  //     else if($scope.myMovies[i].MPAA_Rating === "G"){
  //       $scope.countG++
  //     }
  //     else if($scope.myMovies[i].MPAA_Rating === "Unrated"){
  //       $scope.countUnrated++
  //     }
  //     else if($scope.myMovies[i].MPAA_Rating === "X"){
  //       $scope.countX++
  //     }
  //     else if($scope.myMovies[i].MPAA_Rating === "GP"){
  //       $scope.countGP++
  //       console.log($scope.myMovies[i].Film)
  //     }
  //     else if($scope.myMovies[i].MPAA_Rating === "Approved"){
  //       $scope.countApproved++
  //     }
  //   }
  //   $scope.deathsPerMinute = Math.round(($scope.myBodyCount / $scope.totalMinutes) * 100) / 100
  //   $scope.totalMovies = $scope.myMovies.length;
  // }





})
