import { Company } from './models/Company';
import { CustomMap } from './models/CustomMap';
import { User } from './models/User';

const user = new User();

const company = new Company();

console.log(user);

console.log(company);

const myMap = new CustomMap('map');
myMap.addMarker(user);
myMap.addMarker(company);
