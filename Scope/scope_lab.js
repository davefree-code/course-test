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

function show(){
    var functionVar = "I'm a block-scoped var";
    let functionLet = "I'm a block-scoped let";
    const functionConst = "I'm a block-scoped const";
    }
    show();
    
{
    var blockVarTest = "This is for the test var";
    let blockLetTest = "This is for the test let";
    const blockConstTest = "This is for the test const";

    console.log(blockVarTest);
    console.log(blockLetTest);
    console.log(blockConstTest);

    blockVarTest = "This is the updated var";
    blockLetTest = "This is the updated let";
    // blockConstTest = "This is the updated const";

    console.log(blockVarTest);
    console.log(blockLetTest);
    console.log(blockConstTest);
}

    blockVarTest = "This is the updated var out of scope";
    blockLetTest = "This is the updated let out of scope";
    blockConstTest = "This is the updated const out of scope";

    console.log(blockVarTest);
    console.log(blockLetTest);
    console.log(blockConstTest);
