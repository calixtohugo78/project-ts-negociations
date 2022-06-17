import { DayOfWeek } from "../enums/day-of-week.js";
import { Negociation } from "../models/negociation.js";
import { Negotiations } from "../models/negotiations.js";
import { MensageView } from "../views/mensage-view.js";
import { NegotiationsView } from "../views/negociations-view.js";
export class NegociationController {
    constructor() {
        this.negociations = new Negotiations();
        this.negociationsView = new NegotiationsView('#negociationsView', true);
        this.mensageView = new MensageView('#mensagemView');
        this._inputDate = document.querySelector('#data');
        this._inputQtd = document.querySelector('#quantidade');
        this._inputValue = document.querySelector('#valor');
        this.negociationsView.update(this.negociations);
    }
    add() {
        const negociation = Negociation.createFrom(this._inputDate.value, this._inputQtd.value, this._inputValue.value);
        const dayWeek = negociation.date.getDay();
        if (!this.isBusinessDay(dayWeek)) {
            this.mensageView
                .update("Somente negociações em dias úteis são permitidas!");
            return;
        }
        this.negociations.add(negociation);
        this.clearForm();
        this.attView();
    }
    isBusinessDay(date) {
        return date > DayOfWeek.SUNDAY
            && date < DayOfWeek.SATURDAY;
    }
    clearForm() {
        this._inputDate.value = "";
        this._inputQtd.value = "1";
        this._inputValue.value = "0.0";
        this._inputDate.focus();
    }
    attView() {
        this.mensageView.update('Negociação adicionada com sucesso!');
        this.negociationsView.update(this.negociations);
    }
}
