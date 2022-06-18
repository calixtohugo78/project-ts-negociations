import { NegociationController } from "./controllers/negociation-controller.js";

const controller = new NegociationController;

// Form:

const form = document.querySelector('.form');

if(form){

    form.addEventListener('submit', (event: Event) => {
    
        event.preventDefault();
    
        controller.add();
    
    })

} else {
    throw Error("Not possible to execute the code, please check if form selector exists!")
}

// Button Import:

const buttonImport = document.querySelector('#button-import');

if(buttonImport) {

    buttonImport.addEventListener('click', () => {
        controller.importData();
    })

} else {
    throw Error("Button import is not found!")
}

