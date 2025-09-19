let grocery1;
let grocery2;
let grocery3;

function calculateGrocery(){
    
    // Get the values of each input field
    grocery1 = parseFloat(document.getElementById("amount1").value);
    grocery2 = parseFloat(document.getElementById("amount2").value);
    grocery3 = parseFloat(document.getElementById("amount3").value);

    // Add grocery amounts together
    const totalAmount = grocery1 + grocery2 + grocery3;

    // Set result text
    document.getElementById("total").innerText = `The total amount is: $${totalAmount}`;
}