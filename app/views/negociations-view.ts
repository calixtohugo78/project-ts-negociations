import { Negotiations } from '../models/negotiations.js'
import { View } from './view.js';

export class NegotiationsView extends View<Negotiations>
{

    protected template(model: Negotiations): string {

        return `
        
           <table class="table table-hover table-bordered">
           
                <thead>
                    <tr>
                        <th>Data</th>
                        <th>Quantidade</th>
                        <th>Valor</th>
                    </tr>
                </thead>

                <tbody>
                    ${model.list().map(negociation => {
                            return `
                                <tr>
                                    <td>${this.formatDate(negociation.date)}</td>
                                    <td>${negociation.quantity}</td>
                                    <td>${negociation.value}</td>
                                </td>
                            `
                        }).join('')
                    }
                </tbody>

           </table>

        `;

    }

    private formatDate(date: Date): string {

        return new Intl.DateTimeFormat()
            .format(date)

    }

}