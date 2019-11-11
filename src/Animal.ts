
export class Animal {
    protected name: string;
    protected age: number;
    constructor(Name: string, Age:  number)
    {
        this.name = Name;
        this.age = Age;
    }

    SetAge(Age: number)
    {
        this.age = Age;
    }

    SetName(Name: string)
    {
        this.name = Name;
    }

    GetAge():number
    {
        return this.age;
    }

    GetName():string
    {
        return this.name;
    }

    SaySomething():string
    {
        return`I class am animal your can inherent me age: ${this.age}, name: ${this.name}`;
    }

}

export class Snake extends Animal{

    private crawl: number;

    constructor(Name: string, Age:  number, Crawl: number)
    {
        super(Name, Age);
        this.crawl = Crawl;
    }

    SetCrawl(Crawl: number)
    {
        this.crawl = Crawl;
    }

    getCrawl():number
    {
        return this.crawl;
    }


    SaySomething():string
    {
        return`hello my name is ${this.name}. i am ${this.age} years old`;
    }

}

export  class  Monkey extends  Animal{
    private jump: number;

    constructor(Name: string, Age:  number, Crawl: number)
    {
        super(Name, Age);
        this.jump = Crawl;
    }

    SetJump(jump:number)
    {
        this.jump = jump;
    }

    GetJump():number
    {
        return this.jump;
    }

    SaySomething(): string {
        return`hello my name is ${this.name}. i am ${this.age} years old`;
    }

}


