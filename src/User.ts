import { faker } from "@faker-js/faker";

export class User {
    name: string;
    location : {
        lat: number;
        lng: number;
    };

    constructor() {
        this.name = faker.name.findName();
        this.location = {
            lat: parseFloat(faker.address.latitude()),
            lng: parseFloat(faker.address.longitude())
        };
    };

}



// In the upcoming lecture, we will be installing the Faker library. You may notice that the GitHub repository for Faker is empty or is displaying some confusing messaging. The library currently no longer exists and is not being maintained.
//
//     A community fork of Faker was made to save the project:
//
//     https://github.com/faker-js/faker
//
//         To use this library, you can install it by running:
//
//     npm install @faker-js/faker
//
// You'll then need to update all of your imports:
//
// import { faker } from "@faker-js/faker";
//
// As of their v6 release, TS support is now native and does not require installing the @types declarations.
//
//     https://github.com/faker-js/faker#typescript-support