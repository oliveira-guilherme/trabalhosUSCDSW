<?php

class ConexaoBanco {
    private $conexao;
    private $usuario='uscgep';
    private $senha='Temp123#';
    private $host='uscgep.mysql.dbaas.com.br';
    private $dbname='uscgep';
    public function __construct(){
        $this->conexao = new mysqli($this->host,$this->usuario,$this->senha,$this->dbname);
    }
    public function requisitar($sql) {
        $retorno=$this->conexao->query($sql);
        return $retorno;        
    }

}
