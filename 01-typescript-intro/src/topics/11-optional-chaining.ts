export interface Passenger {
    name : string;
    children?: string[];

}

const passenger1 : Passenger = {
    name: 'Meru'
}
const passenger2 : Passenger = {
    name: 'Peruca',
    children: ['jose','pepe'],
}

const printChildren = ( passenger : Passenger ) => {
    const howManyChildren = passenger.children?.length || 0;
    console.log(howManyChildren)
}
printChildren(passenger2);