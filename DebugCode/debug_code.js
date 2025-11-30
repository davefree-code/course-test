    
    function performOperation() {
    // Get user input from input fields
    let num1 = parseInt(document.getElementById('input1').value);
    let num2 = parseInt(document.getElementById('input2').value);
    // Check if inputs are valid numbers
    if (!isNaN(num1) && !isNaN(num2)) {
    // Perform the operation
                    let result = arithmetic(num1, num2);

                    console.log(result)

                    // Display the result
                    displayResult(result);
                } else {
                    displayResult('Please enter valid numbers');
                }
            }

            function arithmetic(a, b) {
                // Introduce a debugger statement to pause execution
                // debugger;

                const sum = a + b;
                const product = a * b;
                const quotient = a/b;

                const arit_list = {
                    sum: sum,
                    product: product,
                    quotient: quotient
                }

                // Multiply the numbers
                return arit_list;
            }

            function displayResult(result) {
                // Display the result in the paragraph element
                const resultElement = document.getElementById('result');
                console.log(`Sum is ${result.sum}`);
                console.log(`Product is ${result.product}`);
                console.log(`Quotient is ${result.quotient}`);
                resultElement.innerHTML = `<h3> The Results are: </h3>` +
                `<p> The sum is: ${result.sum} </p>` +
                `<p> The product is: ${result.product} </p>` +
                `<p> The quotient is: ${result.quotient} </p>` ;
                
            }
        