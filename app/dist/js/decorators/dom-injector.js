export function domInjector(selector) {
    return function (target, propertyKey) {
        console.log(`Modify Prototype "${target.constructor.name}" and add getter to prop "${propertyKey}"`);
        let element;
        const getter = function () {
            if (!element) {
                element = document.querySelector(selector);
                console.log("Searching DOM element...");
            }
            return element;
        };
        Object.defineProperty(target, propertyKey, {
            get: getter
        });
    };
}
//# sourceMappingURL=dom-injector.js.map