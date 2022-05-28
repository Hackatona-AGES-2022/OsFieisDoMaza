import {Endereco} from './Endereco'

class Instituicao {
    
    private nome:string;
    private endereco: Endereco;

    public getEndereco()
    {
        return this.endereco;
    }

    public setEndereco(endereco: Endereco) {
        this.endereco = endereco;
    }

    
    private setNome(nome: string){
        this.nome = nome;
    }
    public getNome(){
        return(this.nome)
    }
    
}