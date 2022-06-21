import FruitFactory from "./fruitFactory";
import displayFactoryTwo from "./factoryTwo";



const fruit = FruitFactory.create({size: 10, sugar: 10}, 'constructor argument');

console.log(fruit.name());



export default {
    FruitFactory,
    displayFactoryTwo
}
