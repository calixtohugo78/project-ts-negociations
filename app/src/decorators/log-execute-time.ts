export function logExecuteTime(inSeconds: boolean = false)
{

    return function(
        target: any,
        propertyKey: string,
        descriptor: PropertyDescriptor
    ) {

        const originalMethod = descriptor.value;

        descriptor.value = function(...args: Array<any>) {

            let divisor = 1;
            let unit = 'milliseconds';
            if(inSeconds) {
                divisor = 1000;
                unit = "seconds"
            }

            const t1 = performance.now();

            const returnMethod = originalMethod.apply(this, args);

            const t2 = performance.now();

            console.log(`"${propertyKey}" execute time: ${(t2-t1)/divisor} ${unit}`);

            returnMethod;
        }

        return descriptor;

    }

}