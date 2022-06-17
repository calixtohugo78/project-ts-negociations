export function scape() {

    return function (
        target: any,
        propertyKey: string,
        descriptor: PropertyDescriptor
    ) {

        const originalMethod = descriptor.value;

        descriptor.value = function (...args: Array<any>) {

            let returnMethod = originalMethod.apply(this, args);

            if (typeof returnMethod === "string") {
                /* console.log(`@scape in action in class "${this.constructor.name}" for method "${propertyKey}"`); */

                returnMethod = returnMethod
                    .replace(/<script>[\s\S]*?<\/script>/, '')
            }

            return returnMethod;

        }

        return descriptor;

    }

}