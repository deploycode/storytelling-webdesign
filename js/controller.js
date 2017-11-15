angular.module("myApp", [])

.controller("myController", function($scope){
  $scope.newComentario={};
  $scope.points = [
    {
      name: "Bogotá",
      location: "s1"
    },
    {
      name: "Lechonería mcgordo",
      location: "s2"
    },
    {
      name: "Restaurante en Quetame",
      location: "s5"
    },
    {
      name: "Tequendema Vacalay",
      location: "s10"
    }
  ]
  $scope.vars = [
    {
      name: "clima",
      value: "soleado",
      icon: "fa-sun-o"
    },
    {
      name: "tiempo estimado de viaje",
      value: "02:00:00",
      icon: "fa-clock-o"
    },
    {
      name: "distancia estimada",
      value: "2km",
      icon: "fa-minus"
    },
    {
      name: "tráfico",
      value: "bueno",
      icon: "fa-exclamation-triangle"
    },

  ];
  $scope.addComentario = function(){
    $scope.comentarios.push($scope.newComentario);
    $scope.newComentario={};
  }
});
