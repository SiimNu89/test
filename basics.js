// Global Scope
const teacherName= "Siim Nurja";
// String "String väärtus"
// Number (Int, float)
// Boolean true/false
// const is Mate=true/false
// Array []
// Object {}
// Muutujad- nimetus ja väärtus (NB! Muutumatu vs Muudetav)
// Muutujate nimetus on camelCase.

const fruit="banaan";   
let model= "BMW";       
model="audi";

//Koodiblokk= Scope
//Function scope

const calculateSum = (number1, number2) =>{
    const number3 = 256;
    //console .log(teacherName);
    return number1 + number2;
};

calculateSum(1,2);

// Type casting
// Muudame number andmetüübi string andmetüübiks

const castNumber = 123456
console.log(typeof Number(castNumber));
console.log(Bootlean(castnNumber));


// Array= sümbol on []

const characters = ["T", "P", "I", "C","S","V","A","J","R"];

console.log(characters[7]);
console.log(characters[6]);
console.log(characters[5]);
console.log(characters[6]);
console.log(characters[4]);
console.log(characters[4]);
console.log(characters[8]);
console.log(characters[2]);
console.log(characters[1]);
console.log(characters[0]);

//Loopimine= korduslause. Igast array elemendist minnakse üle ning käiakse läbi script
//For loop

for(i=0; i < characters.length; i++) {
    console.log(characters[i]);
}

//forEach loop
characters.forEach((char)=> {
console.log("For Each loop", char);    
});
