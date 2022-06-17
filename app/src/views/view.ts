import { logExecuteTime } from "../decorators/log-execute-time.js";

export abstract class View<T> {

    protected element: HTMLElement;
    private scape: boolean = false;

    constructor(selector: string, scape?: boolean) {
        const elementTemp = document.querySelector(selector);

        if(elementTemp) {
            this.element = elementTemp as HTMLElement;
        } else {
            throw Error("Element does not exists in DOM")
        }

        if(scape) this.scape = scape;
    }

    @logExecuteTime()
    public update(model: T): void {

        let template = this.template(model);

        if (this.scape) {
            template = template
                .replace(/<script>[\s\S]*?<\/script>/, '')
        }

        this.element.innerHTML = template;

    }

    protected abstract template(model: T): string

}