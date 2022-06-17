export class View {
    constructor(selector, scape) {
        this.scape = false;
        const elementTemp = document.querySelector(selector);
        if (elementTemp) {
            this.element = elementTemp;
        }
        else {
            throw Error("Element does not exists in DOM");
        }
        if (scape)
            this.scape = scape;
    }
    update(model) {
        let template = this.template(model);
        if (this.scape) {
            template = template
                .replace(/<script>[\s\S]*?<\/script>/, '');
        }
        this.element.innerHTML = template;
    }
}
