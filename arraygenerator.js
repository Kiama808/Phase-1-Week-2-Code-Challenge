//Create a function that generates an array to output numbers inbetween given numbers
function numbers(num1, num2) {
    let arrayOfnumbers = []; //Create an empty array which will hold the numbers
        if(num1 <= num2){ 
        for(i = num1;i <= num2; i++)// Create a loop that shows If the first number is less than or equal to the second number, it starts counting all the numbers from num 1 to num2 and increases by 1
        arrayOfnumbers.push(i);//We then push the changes to the empty array
        } else {
            for(i = num1;i >= num2; i--)
            // Here we have created a loop that shows If num1 is greater than or equal to num2, it starts counting from it starts counting all the numbers from num 1 to num2 and decreases by 1
        arrayOfnumbers.push(i);//Then we push the changes to the empty array
        }
    return arrayOfnumbers;//We then return the array with the function we created
}

//Then log in the numbers
console.log(numbers(4, 7)); 
console.log(numbers(-4, 7));
