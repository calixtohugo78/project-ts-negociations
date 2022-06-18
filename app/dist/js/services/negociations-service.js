import { Negociation } from "../models/negociation.js";
export class NegociationsService {
    getNegociationsOfDay() {
        return fetch('http://localhost:8080/dados')
            .then(response => response.json())
            .then((data) => {
            return data.map(item => {
                return new Negociation(new Date(), item.vezes, item.montante);
            });
        });
    }
}
//# sourceMappingURL=negociations-service.js.map