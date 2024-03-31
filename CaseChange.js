//The function below changes the case of stringed text to the opposite of the displayed case
function changeCase(text){
    return text
.split("")
//Split will create a new array from the  argument above. There is no space in the array hence the hence the arguments are individual characters
.map(function (character) //map will transform the array to function we created.
    {
        if(character === character.toLowerCase()) //if is used to check the elements in the array and return the desired argument
        {
            return character.toUpperCase();
        } else {return character.toLowerCase()};
    })
    .join("");//join is used to merge the elements of the array to a single string
}
console.log(changeCase("The Quick Brown Fox"));//input the string to undergo the function created