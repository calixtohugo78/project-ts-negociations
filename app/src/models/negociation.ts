import { ModelInterface } from "../interfaces/model-interface.js";

export class Negociation implements ModelInterface<Negociation>{

    constructor(
        private _date: Date,
        public readonly quantity: number,
        public readonly value: number
    ) { }

    get date(): Date {
        const defDate = new Date(this._date.getTime())
        return defDate;
    }

    get volume(): number {
        return this.quantity * this.value
    }

    public static createFrom(dateStr: string, quantityStr: string, valueStr: string): Negociation {

        const expReg = /-/g;

        const formatDate = new Date(dateStr.replace(expReg, ','));
        const formatQtd = parseInt(quantityStr);
        const formatValue = parseFloat(valueStr)

        return new Negociation(
            formatDate,
            formatQtd,
            formatValue
        );

    }

    public forText(): string {
        return `
            Negociation Info:

            - Date: ${this._date}
            - Quantity: ${this.quantity}
            - Value: ${this.value}
        `
    }

    public isEqual(negociation: Negociation): boolean {

        return this._date.getDate() === negociation._date.getDate()
            && this._date.getMonth() === negociation._date.getMonth()
            && this._date.getFullYear() === negociation._date.getFullYear();

    }

}