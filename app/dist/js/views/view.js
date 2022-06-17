export class View {
    constructor(selector) {
        const elementTemp = document.querySelector(selector);
        if (elementTemp) {
            this.element = elementTemp;
        }
        else {
            throw Error("Element does not exists in DOM");
        }
    }
    update(model) {
        let template = this.template(model);
        this.element.innerHTML = template;
    }
}
