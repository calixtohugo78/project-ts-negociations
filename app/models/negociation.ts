export class Negociation {

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

}