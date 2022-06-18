import { NegociationOfDay } from "../interfaces/negociation-of-day.js";
import { Negociation } from "../models/negociation.js";

export class NegociationsService {

    public getNegociationsOfDay(): Promise<Negociation[]> {

        return fetch('http://localhost:8080/dados')
            .then(response => response.json())
            .then((data: Array<NegociationOfDay>) => {

                return data.map(item => {
                    return new Negociation(
                        new Date(),
                        item.vezes,
                        item.montante
                    )
                });

            })

    }

}