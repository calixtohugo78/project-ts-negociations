import { Negociation } from "../models/negociation.js";
import { Negotiations } from "../models/negotiations.js";
import { MensageView } from "../views/mensage-view.js";
import { NegotiationsView } from "../views/negociations-view.js";

export class NegociationController 
{

    private _inputDate: HTMLInputElement;
    private _inputQtd: HTMLInputElement;
    private _inputValue: HTMLInputElement;
    private negociations: Negotiations = new Negotiations();
    private negociationsView = new NegotiationsView('#negociationsView');
    private mensageView = new MensageView('#mensagemView');

    constructor(){
        this._inputDate = document.querySelector('#data');
        this._inputQtd = document.querySelector('#quantidade');
        this._inputValue = document.querySelector('#valor');
        
        this.negociationsView.update(this.negociations);
    }

    add(): void {

        const negociation = this.createNegociation();

        this.negociations.add(negociation);

        this.mensageView.update('Negociação adicionada com sucesso!')

        this.negociationsView.update(this.negociations);

        this.clearForm();

    }

    createNegociation(): Negociation {

        const expReg = /-/g;

        const formatDate = new Date(this._inputDate.value.replace(expReg, ','));
        const formatQtd = parseInt(this._inputQtd.value);
        const formatValue = parseFloat(this._inputValue.value)
        
        return new Negociation(
            formatDate,
            formatQtd,
            formatValue
        );

    }

    clearForm(): void {

        this._inputDate.value = "";
        this._inputQtd.value = "1";
        this._inputValue.value = "0.0"

        this._inputDate.focus();

    }

}