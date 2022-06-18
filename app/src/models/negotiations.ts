import { ModelInterface } from "../interfaces/model-interface.js";
import { Negociation } from "./negociation.js";

// Negociation[] == Array<Negociation>

export class Negotiations implements ModelInterface<Negotiations>
{

    private negociations: Array<Negociation> = [];

    public add(negociation: Negociation) {
        
        this.negociations.push(negociation)

    }

    public list(): ReadonlyArray<Negociation> {

        return this.negociations;

    }

    public forText(): string {
        return JSON.stringify(this.negociations, null, 2)
    }

    public isEqual(obj: Negotiations): boolean {
        return JSON.stringify(this.negociations) === JSON.stringify(obj.list())
    }

}