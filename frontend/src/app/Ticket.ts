import { Passenger } from './Passenger';
import { Train } from './Train';

export class Ticket {
    constructor(
        public id: number, 
        public price: number, 
        public passenger: Passenger, 
        public train: Train, 
        public seat: number, 
        public date: Date
    ) {}
}