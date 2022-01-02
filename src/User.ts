import faker from 'faker';

export class User {
    name: string;
    location: {
        lat: number;
        lng: number;
    }
    //initialize
    constructor() {
        this.name = faker.name.firstName();
        //this.location.lat would return error, must init first
        this.location = {
            lat: parseFloat(faker.address.latitude()),
            lng: parseFloat(faker.address.longitude())
        };
    }
}
