// Negociation[] == Array<Negociation>
export class Negotiations {
    constructor() {
        this.negociations = [];
    }
    add(negociation) {
        this.negociations.push(negociation);
    }
    list() {
        return this.negociations;
    }
}
