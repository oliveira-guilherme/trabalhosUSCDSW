app.controller("AlunosPorPublicacaoController", ["$scope","$http", function($scope,$http){

    $scope.$watch('$viewContentLoaded', function(){
        $scope.createChartRankAlunosPublicacao();
    });
    
    $scope.createChartRankAlunosPublicacao = function(){
        var json = { acao: "alunosPorPublicacao" };
        
        $http({
            method: 'GET',
            url: "fontes/buscaInformacoesDashboard.php",
            params: json
        }).then(function successCallback(response) {
            dados = response.data;
            
            Highcharts.chart('chartRankAlunosPublicacao', {
                chart: {
                    type: 'column'
                },
                title: {
                    text: ''
                },
                plotOptions: {
                    column: {
                        depth: 25,
                        borderWidth: 0
                    }
                },
                xAxis: {
                    categories: dados.nomes
                },
                yAxis: {
                    title: {
                        text: null
                    }
                },
                series: [{
                    name: 'Publicações',
                    data: dados.qtde
                }]
            });
        }, function errorCallback(response) {
        });
    };

}]);