import Uf from '../enums/Uf'
export class Endereco{
    
    private cidade: string;
    private uf: Uf;
    private bairro: string;
    private cep: string;
    private rua: string;

    public getCidade(){
        return this.cidade;
    }

    public setCidade(cidade: string) {
        this.cidade = cidade;
    }

    public getUf(): Uf {
        return this.uf;
    }

    public setUf(uf: Uf) {
        this.uf = uf;
    }

    public getBairro(): string {
        return this.bairro;
    }

    public setBairro(bairro: string) {
        this.bairro = bairro;
    }

    public getCep(): string {
        return this.cep;
    }

    public setCep(cep: string) {
        this.cep = cep;
    }

    public getRua(): string {
        return this.rua;
    }

    public setRua(rua: string) {
        this.rua = rua;
    }

}
