import { Negociation } from "./negociation.js";

// Negociation[] == Array<Negociation>

export class Negotiations
{

    private negociations: Array<Negociation> = [];

    public add(negociation: Negociation) {
        
        this.negociations.push(negociation)

    }

    public list(): ReadonlyArray<Negociation> {

        return this.negociations;

    }

}