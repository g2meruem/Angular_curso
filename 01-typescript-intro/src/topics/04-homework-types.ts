


interface SuperHero {
    name: string,
    age: number,
    address: Adress;
    showAdress: () => string;
}

interface Adress {
    street: string,
    country: string,
    city: string,
}
const superHeroe: SuperHero = {
    name: 'Spiderman',
    age: 30,
    address: {
        street: 'Main St',
        country: 'USA',
        city: 'NY'
    },
    showAdress() {
        return this.name + ',' + this.address.city + ',' + this.address.country;
    }
}
const adress = superHeroe.showAdress();
console.log(adress);
export { };