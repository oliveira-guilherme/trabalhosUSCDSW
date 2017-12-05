<?php
class DadosDashboard{
    private $conexao;
    public function __construct() {
        require("ConexaoBanco.php");
        $this->conexao = new ConexaoBanco();
    }
    
    public function getDadosAlunosAtivosInativos(){
        $requisicao="SELECT ativo, COUNT(1) AS qtde FROM Aluno GROUP BY ativo ORDER BY ativo";
        return $this->conexao->requisitar($requisicao);
    }
    
    public function getOrientadoresAlunosAtivosInativos(){
        $requisicao="SELECT ativo, COUNT(1) AS qtde FROM Orientador GROUP BY ativo ORDER BY ativo";
        return $this->conexao->requisitar($requisicao);
    }
    
    public function getAlunosPorPublicacao(){
        $requisicao="
SELECT
	C.nome,
	COUNT(1) AS qtde
FROM
	Publicacao A
INNER JOIN
	PublicacaoAluno B
ON
	B.idPublicacao=A.idPublicacao
INNER JOIN
	Aluno C
ON
	C.idAluno = B.idAluno
GROUP BY
	C.nome
";
        return $this->conexao->requisitar($requisicao);
    }
    
    public function getOrientadoresPorPublicacao(){
        $requisicao="
SELECT
	C.nome,
	COUNT(1) AS qtde
FROM
	Publicacao A
INNER JOIN
	PublicacaoOrientador B
ON
	B.idPublicacao=A.idPublicacao
INNER JOIN
	Orientador C
ON
	C.idOrientador = B.idOrientador
GROUP BY
	C.nome
";
        return $this->conexao->requisitar($requisicao);
    }
}

