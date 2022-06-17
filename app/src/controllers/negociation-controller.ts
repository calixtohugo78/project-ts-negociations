import { logExecuteTime } from "../decorators/log-execute-time.js";
import { DayOfWeek } from "../enums/day-of-week.js";
import { Negociation } from "../models/negociation.js";
import { Negotiations } from "../models/negotiations.js";
import { MensageView } from "../views/mensage-view.js";
import { NegotiationsView } from "../views/negociations-view.js";

export class NegociationController {

    private _inputDate: HTMLInputElement;
    private _inputQtd: HTMLInputElement;
    private _inputValue: HTMLInputElement;
    private negociations: Negotiations = new Negotiations();
    private negociationsView = new NegotiationsView('#negociationsView', true);
    private mensageView = new MensageView('#mensagemView');

    constructor() {
        this._inputDate = document.querySelector('#data') as HTMLInputElement;
        this._inputQtd = document.querySelector('#quantidade') as HTMLInputElement;
        this._inputValue = document.querySelector('#valor') as HTMLInputElement;

        this.negociationsView.update(this.negociations);
    }

    @logExecuteTime()
    public add(): void {

        const negociation = Negociation.createFrom(
            this._inputDate.value,
            this._inputQtd.value,
            this._inputValue.value
        );

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

    private isBusinessDay(date: number): boolean {

        return date > DayOfWeek.SUNDAY
            && date < DayOfWeek.SATURDAY;

    }

    private clearForm(): void {

        this._inputDate.value = "";
        this._inputQtd.value = "1";
        this._inputValue.value = "0.0"

        this._inputDate.focus();

    }

    private attView(): void {

        this.mensageView.update('Negociação adicionada com sucesso!')

        this.negociationsView.update(this.negociations);

    }

}