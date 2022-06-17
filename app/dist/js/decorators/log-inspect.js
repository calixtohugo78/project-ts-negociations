export function logInspect() {
    return function (target, propertyKey, descriptor) {
        const originalMethod = descriptor.value;
        descriptor.value = function (...args) {
            console.log(`--- Method: ${propertyKey}`);
            console.log(`--- Params: ${JSON.stringify(args)}`);
            const returnMethod = originalMethod.apply(this, args);
            console.log(`--- retorm method: ${JSON.stringify(returnMethod)}\n\n`);
            return returnMethod;
        };
        return descriptor;
    };
}
