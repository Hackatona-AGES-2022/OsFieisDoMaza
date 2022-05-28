import {Medico} from '../entities/Medico'
export namespace MedicoRepo{
    export async function findMedico(id: string): Promise<Medico | null>{
        const foundMedico: Medico | null = await Medico.findOne({id});
        return foundMedico;
    }
    export async function createMedico(medico: Medico) {
        try{
            //tenta criar
            return createdMedico;
        }
        catch(error){
        // nao deu certo
            return null
        }
    }
    export async function findAllMedico(): Promise< Medico[] | null>{
        const foundMedicos: Medico[] | null = await Medico.findAll();
    return foundMedicos;
    }
}