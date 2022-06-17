export function domInjector(selector: string) {

    return function (
        target: any,
        propertyKey: string,
    ) {

        console.log(`Modify Prototype "${target.constructor.name}" and add getter to prop "${propertyKey}"`)

        let element: HTMLElement;

        const getter = function () {
            if(!element) {
                element = document.querySelector(selector) as HTMLInputElement;
                console.log("Searching DOM element...")
            }
            return element;
        }

        Object.defineProperty(
            target,
            propertyKey,
            {
                get: getter
            }
        );

    }

}