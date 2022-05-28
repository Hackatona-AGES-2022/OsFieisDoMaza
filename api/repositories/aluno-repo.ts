import {Aluno} from '../entities/Aluno' 
import Sexo from '../entities/Enums/Sexo';
export class AlunoRepo {
    
    export async function findAluno(id: string): Promise<Aluno | null>{
        const foundAluno: Aluno | null = await Aluno.findOne({id});
        return foundAluno;
    }
    export async function createAluno(cpf:string,nome:string,sexo:Sexo,dataNascimento:Date) {
        try{
            //tenta criar
            return createdDomain;
        }
        catch(error){
        // nao deu certo
            return null
        }
    }
    export async function findAllAluno(): Promise<Aluno[] | null>{
        const foundAlunos: Aluno[] | null = await Aluno.findAll();
    return foundAlunos;
    }

}