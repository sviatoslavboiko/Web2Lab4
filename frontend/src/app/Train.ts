export class Train {
    id: number;
    name: string;
    route: string;
    seats: number;

    constructor(id: number, name: string, route: string, seats: number) {
        this.id = id;
        this.name = name;
        this.route = route;
        this.seats = seats;
    }
}