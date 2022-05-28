import Sexo from "./Enums/Sexo";

class Aluno{
    private cpf: string;
    private nome: string;
    private dataNascimento: Date;
    private sexo: Sexo;

    private setCpf(cpf: string){
        this.cpf = cpf;
    }
    private setNome(nome: string){
        this.nome = nome;
    }
    private setDataNascimento(dataNascimento: Date){
        this.dataNascimento = dataNascimento;
    }
    private setSexo(sexo: Sexo){
        this.sexo = sexo;
    }
    
    public getCpf(){
        return(this.cpf)
    }
    public getNome(){
        return(this.nome)
    }
    
    public getDataNascimento(){
        return(this.dataNascimento)
    }
    public getSexo(){
        return(this.sexo)
    }
}
