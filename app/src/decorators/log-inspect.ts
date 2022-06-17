export function logInspect() {

    return function (
        target: any,
        propertyKey: string,
        descriptor: PropertyDescriptor
    ) {

        const originalMethod = descriptor.value;

        descriptor.value = function (...args: Array<any>) {

            console.log(`--- Method: ${propertyKey}`)
            console.log(`--- Params: ${JSON.stringify(args)}`)
            
            const returnMethod = originalMethod.apply(this, args);

            console.log(`--- retorm method: ${JSON.stringify(returnMethod)}\n\n`)

            return returnMethod;

        }

        return descriptor;

    }

}