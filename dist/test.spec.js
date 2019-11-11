"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Animal_1 = require("./Animal");
var chai_1 = require("chai");
require("mocha");
describe("Animal test", function () {
    describe("Animal", function () {
        var animal = new Animal_1.Animal("Animals", 3);
        animal.SetAge(2);
        animal.SetName("Animal");
        var GetName = animal.GetName();
        var GetAge = animal.GetAge();
        var someText = animal.SaySomething();
        it("SaySomething", function () {
            chai_1.expect(someText).to.equal("I class am animal your can inherent me age: " + animal.GetAge() + ", name: " + animal.GetName());
            chai_1.expect(GetName).to.equal("Animal");
        });
        it("Get Name of animal", function () {
            chai_1.expect(GetName).to.equal("Animal");
        });
        it("GetAge", function () {
            chai_1.expect(GetAge).to.equal(2);
        });
        it("isString Animal", function () {
            chai_1.expect(GetName).to.be.a('string');
        });
        it("isNumber Animal", function () {
            chai_1.expect(GetAge).to.be.a('number');
        });
    });
    describe("Snake", function () {
        var snake = new Animal_1.Snake("Snaki", 22, 10);
        snake.SetCrawl(6);
        var GetCrawl = snake.getCrawl();
        var someText = snake.SaySomething();
        it("GetCrawl Snake", function () {
            chai_1.expect(GetCrawl).to.equal(6);
        });
        it("isNumber", function () {
            chai_1.expect(GetCrawl).to.be.a('number');
        });
        it("isString", function () {
            chai_1.expect(someText).to.be.a('string');
        });
        it("Say Something", function () {
            chai_1.expect(someText).to.equal("hello my name is Snaki. i am 22 years old");
        });
    });
    describe("Monkey", function () {
        var monkey = new Animal_1.Monkey("Monkey", 12, 32);
        monkey.SetJump(23);
        var GetJump = monkey.GetJump();
        var SaySomething = monkey.SaySomething();
        it("GetCrawl Snake", function () {
            chai_1.expect(GetJump).to.equal(23);
        });
        it("isNumber", function () {
            chai_1.expect(GetJump).to.be.a('number');
        });
        it("isString", function () {
            chai_1.expect(SaySomething).to.be.a('string');
        });
        it("Say Something", function () {
            chai_1.expect(SaySomething).to.equal("hello my name is Monkey. i am 12 years old");
        });
    });
});
//# sourceMappingURL=test.spec.js.map