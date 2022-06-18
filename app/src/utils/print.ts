import { Printable } from "./printable.js"

export function print(...objs: Array<Printable>) 
{

    objs.forEach(item => {

        console.log(item.forText())

    })

}