function classDecorator<T extends {new (...args:any[]): {}}>
(constructor:T

) {
    return class extends constructor{
        newProperty='new  Property';
        hello = 'override';
    }
}


@classDecorator
class Superclass {
    public myProperty: string = 'awadeuwu';
    print() {
        console.log('añoña')
    }
}
console.log(Superclass);
const myClass = new Superclass();
console.log(myClass);