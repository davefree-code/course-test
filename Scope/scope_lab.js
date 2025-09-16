// Global scope
let globalLet = "this is a global let variable";
var globalVar = "this is a global variable";
const globalConst = "this is a global constant"

{
// Block scope
var blockVar = "this is a block variable";
let blockLet = "this is a block let variable";
const blockConst = "this is a block constant";
}

console.log(globalVar);
console.log(globalLet);
console.log(globalConst);

console.log(blockVar);
console.log(blockConst);

function show(){
    var functionVar = "I'm a block-scoped var";
    let functionLet = "I'm a block-scoped let";
    const functionConst = "I'm a block-scoped const";
    }
    show();
    
    // console.log(functionVar); // Throws ReferenceError
    // console.log(functionLet); // Throws ReferenceError
    // console.log(functionConst); // Throws ReferenceError