import faker from 'faker';

export class Company {
    companyName: string;
    catchPhrase: string;
    location: {
        lat: number;
        lng: number;
    }

    constructor() {
        this.companyName = faker.company.companyName();
        this.catchPhrase = faker.company.catchPhrase();
        this.location = {
            lat: parseFloat(faker.address.latitude()),
            lng: parseFloat(faker.address.longitude())
        };
    }

    markerContent(): string {
        return `
        <div>
        <p>Company located here is ${this.companyName}.</p>
        <p>Their catchphrase is '${this.catchPhrase}'</p>
        </div>
        `
    }
}