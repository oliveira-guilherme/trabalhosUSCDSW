app.controller("AlunosAtivosInativosController", ["$scope","$http", function($scope,$http){
	 	 
    $scope.$watch('$viewContentLoaded', function(){
        $scope.createChartComparativoAlunos();
    });
    
    $scope.createChartComparativoAlunos = function(){
        var json = { acao: "alunosAtivosInativos" };
        
        $http({
            method: 'GET',
            url: "fontes/buscaInformacoesDashboard.php",
            params: json
        }).then(function successCallback(response) {
            dados = response.data;
            
            Highcharts.chart('chartComparativoAlunos', {
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
                    name: 'Alunos',
                    data: dados
                }]
            });
            
        }, function errorCallback(response) {
        });

    }

}]);