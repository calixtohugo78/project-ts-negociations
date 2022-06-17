
export abstract class View<T> {

    protected element: HTMLElement;

    constructor(selector: string) {
        const elementTemp = document.querySelector(selector);

        if(elementTemp) {
            this.element = elementTemp as HTMLElement;
        } else {
            throw Error("Element does not exists in DOM")
        }
    }

    public update(model: T): void {

        let template = this.template(model);

        this.element.innerHTML = template;

    }

    protected abstract template(model: T): string

}