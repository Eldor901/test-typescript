import {Snake, Animal, Monkey} from "./Animal";
import { expect } from 'chai';
import 'mocha';

describe("Animal test", () => {
    describe("Animal", () => {

        let  animal = new Animal("Animals", 3);
        animal.SetAge(2);
        animal.SetName("Animal");

        let GetName = animal.GetName();
        let GetAge = animal.GetAge();
        let someText:string  = animal.SaySomething();

        it("SaySomething", () => {
            expect(someText).to.equal(`I class am animal your can inherent me age: ${animal.GetAge()}, name: ${animal.GetName()}`);
            expect(GetName).to.equal("Animal");
        });


        it("Get Name of animal", () => {
            expect(GetName).to.equal("Animal");
        });


        it("GetAge", ()=>{
            expect(GetAge).to.equal(2);
        });

        it("isString Animal", ()=> {
            expect(GetName).to.be.a('string');
        });

        it("isNumber Animal", () =>{
            expect(GetAge).to.be.a('number');
        });
    });


    describe("Snake", ()=>{

        let snake = new Snake("Snaki", 22, 10);
        snake.SetCrawl(6);

        let GetCrawl = snake.getCrawl();
        let someText = snake.SaySomething();

        it("GetCrawl Snake", ()=>{
            expect(GetCrawl).to.equal(6);
        });

        it("isNumber", ()=>{
            expect(GetCrawl).to.be.a('number');
        });

        it("isString", ()=>{
            expect(someText).to.be.a('string');
        });

        it("Say Something", ()=>{
            expect(someText).to.equal("hello my name is Snaki. i am 22 years old")
        });
    });

    describe("Monkey", ()=>{
        let monkey = new Monkey("Monkey", 12, 32);
        monkey.SetJump(23);



        let GetJump = monkey.GetJump();
        let SaySomething = monkey.SaySomething();


        it("GetCrawl Snake", ()=>{
            expect(GetJump).to.equal(23);
        });

        it("isNumber", ()=>{
            expect(GetJump).to.be.a('number');
        });

        it("isString", ()=>{
            expect(SaySomething).to.be.a('string');
        });

        it("Say Something", ()=>{
            expect(SaySomething).to.equal(`hello my name is Monkey. i am 12 years old`);
        });
    })

});

