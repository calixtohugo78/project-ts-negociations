import { domInjector } from "../decorators/dom-injector.js";
import { logExecuteTime } from "../decorators/log-execute-time.js";
import { logInspect } from "../decorators/log-inspect.js";
import { DayOfWeek } from "../enums/day-of-week.js";
import { Negociation } from "../models/negociation.js";
import { Negotiations } from "../models/negotiations.js";
import { MensageView } from "../views/mensage-view.js";
import { NegotiationsView } from "../views/negociations-view.js";

export class NegociationController {

    @domInjector("#data")
    private _inputDate: HTMLInputElement;
    @domInjector("#quantidade")
    private _inputQtd: HTMLInputElement;
    @domInjector("#valor")
    private _inputValue: HTMLInputElement;

    private negociations: Negotiations = new Negotiations();
    private negociationsView = new NegotiationsView('#negociationsView');
    private mensageView = new MensageView('#mensagemView');

    constructor() {
        this.negociationsView.update(this.negociations);
    }

    @logExecuteTime()
    @logInspect()
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