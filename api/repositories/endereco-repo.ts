import {Endereco} from '../entities/Endereco'
export namespace EnderecoRepo{
    
    export async function find(id:string): Promise< Endereco | null> {
        const foundEndereco: Endereco | null = await Endereco.findOne({id})
        return foundEndereco;
    }
    export async function createEndereco(endereco:Endereco) {
        try{
            //tenta criar
            return createdEndereco;
        }
        catch(error){
        // nao deu certo
            return null
        }
    }
}