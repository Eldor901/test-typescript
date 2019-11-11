"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var Animal = /** @class */ (function () {
    function Animal(Name, Age) {
        this.name = Name;
        this.age = Age;
    }
    Animal.prototype.SetAge = function (Age) {
        this.age = Age;
    };
    Animal.prototype.SetName = function (Name) {
        this.name = Name;
    };
    Animal.prototype.GetAge = function () {
        return this.age;
    };
    Animal.prototype.GetName = function () {
        return this.name;
    };
    Animal.prototype.SaySomething = function () {
        return "I class am animal your can inherent me age: " + this.age + ", name: " + this.name;
    };
    return Animal;
}());
exports.Animal = Animal;
var Snake = /** @class */ (function (_super) {
    __extends(Snake, _super);
    function Snake(Name, Age, Crawl) {
        var _this = _super.call(this, Name, Age) || this;
        _this.crawl = Crawl;
        return _this;
    }
    Snake.prototype.SetCrawl = function (Crawl) {
        this.crawl = Crawl;
    };
    Snake.prototype.getCrawl = function () {
        return this.crawl;
    };
    Snake.prototype.SaySomething = function () {
        return "hello my name is " + this.name + ". i am " + this.age + " years old";
    };
    return Snake;
}(Animal));
exports.Snake = Snake;
var Monkey = /** @class */ (function (_super) {
    __extends(Monkey, _super);
    function Monkey(Name, Age, Crawl) {
        var _this = _super.call(this, Name, Age) || this;
        _this.jump = Crawl;
        return _this;
    }
    Monkey.prototype.SetJump = function (jump) {
        this.jump = jump;
    };
    Monkey.prototype.GetJump = function () {
        return this.jump;
    };
    Monkey.prototype.SaySomething = function () {
        return "hello my name is " + this.name + ". i am " + this.age + " years old";
    };
    return Monkey;
}(Animal));
exports.Monkey = Monkey;
//# sourceMappingURL=Animal.js.map