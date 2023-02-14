import {User} from './User'
import {Company} from './Company'
const user = new User()
const company = new Company()

console.log(user)
console.log(company)


//
// The @types/googlemaps library that is installed in the next video has been deprecated. Instead, we need to install a different library:
//
//     npm install @types/google.maps
//
// Also, you will still see a TS error in your code editor:
//
//     Cannot find name 'google'.ts(2304)
//
// As the very first line in the index.ts file, you will need to add a triple slash directive:
//
// /// <reference types="@types/google.maps" />
//     You can read about this in the official docs here:
//
//     https://developers.google.com/maps/documentation/javascript/using-typescript#Module_Import
