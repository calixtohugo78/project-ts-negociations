var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { domInjector } from "../decorators/dom-injector.js";
import { logExecuteTime } from "../decorators/log-execute-time.js";
import { logInspect } from "../decorators/log-inspect.js";
import { DayOfWeek } from "../enums/day-of-week.js";
import { Negociation } from "../models/negociation.js";
import { Negotiations } from "../models/negotiations.js";
import { NegociationsService } from "../services/negociations-service.js";
import { print } from "../utils/print.js";
import { MensageView } from "../views/mensage-view.js";
import { NegotiationsView } from "../views/negociations-view.js";
export class NegociationController {
    constructor() {
        this.negociations = new Negotiations();
        this.negociationsView = new NegotiationsView('#negociationsView');
        this.mensageView = new MensageView('#mensagemView');
        this.negociationService = new NegociationsService();
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
        print(negociation, this.negociations);
        this.clearForm();
        this.attView();
    }
    importData() {
        this.negociationService
            .getNegociationsOfDay()
            .then(negociationOfToday => {
            return negociationOfToday.filter(item => {
                return !this.negociations
                    .list()
                    .some(negociation => negociation.isEqual(item));
            });
        })
            .then(negociationToday => {
            for (let item of negociationToday) {
                this.negociations.add(item);
            }
            this.negociationsView.update(this.negociations);
        });
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
__decorate([
    domInjector("#data")
], NegociationController.prototype, "_inputDate", void 0);
__decorate([
    domInjector("#quantidade")
], NegociationController.prototype, "_inputQtd", void 0);
__decorate([
    domInjector("#valor")
], NegociationController.prototype, "_inputValue", void 0);
__decorate([
    logExecuteTime(),
    logInspect()
], NegociationController.prototype, "add", null);
//# sourceMappingURL=negociation-controller.js.map