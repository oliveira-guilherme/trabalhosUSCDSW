app.controller("OrientadoresAtivosInativosController", ["$scope","$http", function($scope,$http){

	 	 
    $scope.$watch('$viewContentLoaded', function(){
        $scope.createChartComparativoOrientadores();
    });
    
    $scope.createChartComparativoOrientadores = function(){
        var json = { acao: "orientadoresAtivosInativos" };

        $http({
                    method: 'GET',
                    url: "fontes/buscaInformacoesDashboard.php",
                    params: json
                }).then(function successCallback(response) {
                    dados = response.data
                    Highcharts.chart('chartComparativoOrientadores', {
                        chart: {
                            type: 'pie',
                            options3d: {
                                enabled: true,
                                alpha: 45,
                                beta: 0
                            }
                        },
                        title: {
                            text: ''
                        },
                        tooltip: {
                            pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
                        },
                        plotOptions: {
                            pie: {
                                allowPointSelect: true,
                                cursor: 'pointer',
                                depth: 35,
                                dataLabels: {
                                    enabled: true,
                                    format: '{point.name}'
                                }
                            }
                        },
                        series: [{
                            type: 'pie',
                            name: 'Orientadores',
                            data: dados
                        }]
                    });
            }, function errorCallback(response) {
        });
    }

}]);