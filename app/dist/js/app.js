import { NegociationController } from "./controllers/negociation-controller.js";
const controller = new NegociationController;
const form = document.querySelector('.form');
if (form) {
    form.addEventListener('submit', (event) => {
        event.preventDefault();
        controller.add();
    });
}
else {
    throw Error("Not possible to execute the code, please check if form selector exists!");
}
const buttonImport = document.querySelector('#button-import');
if (buttonImport) {
    buttonImport.addEventListener('click', () => {
        controller.importData();
    });
}
else {
    throw Error("Button import is not found!");
}
//# sourceMappingURL=app.js.map