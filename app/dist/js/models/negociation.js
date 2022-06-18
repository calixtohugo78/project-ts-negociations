export class Negociation {
    constructor(_date, quantity, value) {
        this._date = _date;
        this.quantity = quantity;
        this.value = value;
    }
    get date() {
        const defDate = new Date(this._date.getTime());
        return defDate;
    }
    get volume() {
        return this.quantity * this.value;
    }
    static createFrom(dateStr, quantityStr, valueStr) {
        const expReg = /-/g;
        const formatDate = new Date(dateStr.replace(expReg, ','));
        const formatQtd = parseInt(quantityStr);
        const formatValue = parseFloat(valueStr);
        return new Negociation(formatDate, formatQtd, formatValue);
    }
    forText() {
        return `
            Negociation Info:

            - Date: ${this._date}
            - Quantity: ${this.quantity}
            - Value: ${this.value}
        `;
    }
    isEqual(negociation) {
        return this._date.getDate() === negociation._date.getDate()
            && this._date.getMonth() === negociation._date.getMonth()
            && this._date.getFullYear() === negociation._date.getFullYear();
    }
}
//# sourceMappingURL=negociation.js.map