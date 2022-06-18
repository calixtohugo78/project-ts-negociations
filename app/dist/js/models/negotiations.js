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
    forText() {
        return JSON.stringify(this.negociations, null, 2);
    }
    isEqual(obj) {
        return JSON.stringify(this.negociations) === JSON.stringify(obj.list());
    }
}
//# sourceMappingURL=negotiations.js.map