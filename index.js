// Write your solution here!
let cats =["Milo", "Otis", "Garfield"];

function destructivelyAppendCat (){
    cats.push("Ralph")
}
console.log = cats;

function destructivelyPrependCat(){
    cats.unshift("Bob");
}

function destructivelyRemoveLastCat(){
    cats.pop();
}

function destructivelyRemoveFirstCat(){
    cats.shift();
}

function appendCat(){
    return cats.concat("Broom");
}

function prependCat(){
    return  ["Arnold"].concat(cats);
}

function removeLastCat(){
    return cats.slice(0, -1)
    
}
function removeFirstCat() {
    return cats.slice(1)
}