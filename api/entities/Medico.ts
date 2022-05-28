import Sexo from "./Enums/Sexo";

export class Medico {
    private sexo:Sexo;
    private nome:string;
    private dataNascimento:Date;
    private cfp:string;
    private cpf:string;
    
    private setCfp(cfp: string){
        this.cfp=cfp;
    }
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
    
    public getCfp(){
        return this.cfp;
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