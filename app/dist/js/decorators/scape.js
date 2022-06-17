export function scape() {
    return function (target, propertyKey, descriptor) {
        const originalMethod = descriptor.value;
        descriptor.value = function (...args) {
            let returnMethod = originalMethod.apply(this, args);
            if (typeof returnMethod === "string") {
                returnMethod = returnMethod
                    .replace(/<script>[\s\S]*?<\/script>/, '');
            }
            return returnMethod;
        };
        return descriptor;
    };
}
