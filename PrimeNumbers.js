//Here we are creating a code that will output prime numbers
let arrayOfNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
//First we have created an array and inout the numbers
// We then create a function that will carry out the finding of prime numbers
function primeNumbers(numbers) {
// We are using the if function to ensure that the numbers are not equals to or less than 1
    if(numbers <= 1) {
        return undefined;
    }
// This condition states that the (number) once square rooted should begin to divide the (number) itself from i which is 2 and the numbers in between upto the square-rooted value found 
    for(i = 2; i <= Math.sqrt(numbers); i++) {
// We use if to ensure that the numbers outputed should not include any value that is not a prime number.
        if(numbers % i === 0) {
            return undefined;
        } 
    }
    return numbers; //return the numbers with the function in place
}
//then we filter the array to return the prime numbers 
console.log(arrayOfNumbers.filter(primeNumbers));
