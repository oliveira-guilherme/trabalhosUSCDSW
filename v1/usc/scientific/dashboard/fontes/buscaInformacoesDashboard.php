<?php
    require("DadosDashboard.php");
    $dados = new DadosDashboard();
    $json=array();
    switch($_GET['acao']){
        case "alunosAtivosInativos":
            $retorno=$dados->getDadosAlunosAtivosInativos();
            while($linha = $retorno->fetch_assoc()) {
                if($linha["ativo"]=="S")
                    $json[]=array("Ativos", (int)$linha['qtde']);
                else
                    $json[]=array("Inativos", (int)$linha['qtde']);
            }
            break;
        case "orientadoresAtivosInativos":
            $retorno=$dados->getOrientadoresAlunosAtivosInativos();
            while($linha = $retorno->fetch_assoc()) {
                if($linha["ativo"]=="S")
                    $json[]=array("Ativos", (int)$linha['qtde']);
                else
                    $json[]=array("Inativos", (int)$linha['qtde']);
            }
            break;
        case "alunosPorPublicacao":
            $retorno=$dados->getAlunosPorPublicacao();
            while($linha = $retorno->fetch_assoc()) {
                $json["nomes"][]=$linha["nome"];
                $json["qtde"][]=(int)$linha["qtde"];
            }
            break;
            
        case "orientadoresPorPublicacao":
            $retorno=$dados->getOrientadoresPorPublicacao();
            while($linha = $retorno->fetch_assoc()) {
                $json["nomes"][]=$linha["nome"];
                $json["qtde"][]=(int)$linha["qtde"];
            }
            break;
    }    
    
    echo json_encode($json);
    