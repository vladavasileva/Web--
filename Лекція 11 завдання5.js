let str = prompt("Введіть текст :");
function correct(str)
{
   let num1 = str[0];
   let num2 = str.substring(1, str.length);

    return num1.toUpperCase() + num2.toLowerCase();
}
console.log(correct(str));