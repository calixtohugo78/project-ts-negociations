import { View } from "./view.js";

export class MensageView extends View<String>
{

    template(model: string):string {
        return`
            <p class="alert alert-info">${model}</p>
        `
    }

}