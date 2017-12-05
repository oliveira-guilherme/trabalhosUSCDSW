app.controller("IndicadorController", ["$scope","$http", function($scope,$http){

    /**
     * Indicador 5 - Valores
     * @type {number}
     */
    $scope.indicadorTotalAlunos = 5000;
    $scope.indicadorTotalOrientadores = 500;
    $scope.indicadorTotalCursos = 100;
    $scope.indicadorTotalPublicacoes = 1000;


    /**
     * $viewContentLoaded
     * Acionado quando o conteúdo é carregado
     */
	 	 
    $scope.$watch('$viewContentLoaded', function(){
		$scope.alunosPorPublicacao =  'view/alunosPorPublicacao.html';
		$scope.alunosAtivosInativos =  'view/alunosAtivosInativos.html';
		$scope.orientadoresPorPublicacao =  'view/orientadoresPorPublicacao.html';
		$scope.orientadoresAtivosInativos =  'view/orientadoresAtivosInativos.html';
        $scope.loadIndicadorTotalizador();
    });

    $scope.loadIndicadorTotalizador = function(){

        $http({
            method: 'GET',
            url: API_URL + "api/instituicao/indicador?idInstituicao=" + Sessao.instituicao.idInstituicao
        }).then(function successCallback(response) {
            var data = response.data;
            $scope.indicadorTotalCursos = data.totalCursos;
            $scope.indicadorTotalAlunos = data.totalAlunos;
            $scope.indicadorTotalOrientadores = data.totalOrientadores;
            $scope.indicadorTotalPublicacoes = data.totalPublicacoes;

        }, function errorCallback(response) {
        });

    };

}]);