import {Medico} from "../entities/Medico";

export interface MedicoRepository{
    create(inputMedico: Medico): Promise<Medico>;
    upsert(medicoToUpdate: Medico): Promise<Medico>;
    delete(medicoToDelete: Medico): Promise<Medico>;
    findOne(medicoId: string): Promise<Medico>;
    fineAny(criteria: string): Promise<Medico>;
    updateAgenda(agenda: Array<Horario>): Array<Horario>;
}