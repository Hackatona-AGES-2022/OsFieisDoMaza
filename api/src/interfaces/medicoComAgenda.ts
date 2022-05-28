import {MedicoInput} from "./input/MedicoInput";
import {Horario} from "./utils/horario";

export interface MedicoComAgenda extends MedicoInput{
    agenda:Array<Horario>;
}