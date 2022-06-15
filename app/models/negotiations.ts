import { Negociation } from "./negociation.js";

// Negociation[] == Array<Negociation>

export class Negotiations
{

    private negociations: Array<Negociation> = [];

    add(negociation: Negociation) {
        
        this.negociations.push(negociation)

    }

    list(): ReadonlyArray<Negociation> {

        return this.negociations;

    }

}