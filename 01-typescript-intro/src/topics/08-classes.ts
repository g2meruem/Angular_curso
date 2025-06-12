export class Person {

    constructor(
        public name: string,
        private adress: string) {
    }
}
export class Hero extends Person{
constructor(
    public alterEgo:string,
    public age:number,
    public realName :string,
){
    super()
}
}

const ironman = new Hero('Pepe',25,'Tony');
console.log(ironman);

