//Variables to string

//1
var username;

//2
var myName = "M.Jawwad"

//3
var message = "Hello World"
alert(message)

//4
var naam = "M.Jawwad"
var age = "17 years old"
var university = "DUET"
var course = "Web & App Development"

alert(naam)
alert(age)
alert(university)
alert(course)

//5
alert('PIZZA\nPIZZ\nPIZ\nPI\nP')

//6
var noOfKids = 4
var partnerName = "not exist"
var locat = "Karachi"
var job = "FrontEnd Developer"
alert(`You will be a ${job} in ${locat}, and married ${partnerName} with ${noOfKids} kids`)

//7
var email = "jawwadsiddique0987"
alert(`my email address is ${email+"@gmail.com"}`)

//8
var book = "A smarter way to learn JavaScript."
alert(`I am trying to learn from the book '${book}'`)

//9
alert(`my name is ${naam}, I am ${age}, I study in ${university}, I take ${course} classes`)

//10
document.write("<h1>Yay! I can write HTML content through Javascript")

//VARIABLES FOR NUMBERS

//1
var age = 22
alert(`I am ${age} year old`)

//2
let visitCount = localStorage.getItem('visitCount');
if (visitCount === null) {
    visitCount = 0;
}
visitCount++;
localStorage.setItem('visitCount', visitCount);
document.write(`You have visited this site ${visitCount} times.`);

//3
var birthYear = 2003
document.write(`<br>My birth year is ${birthYear}`)
document.write(`<br>Data type of my declared variable is ${typeof(birthYear)}`)

//4
var visitorName = "kumail abbas";
var productTitle = "T-shirt";
var quantity = 5;
var orderMessage = `<br>${visitorName} ordered ${quantity} ${productTitle}(s) on XYZ Clothing store`;
document.write(orderMessage);

//VARIABLE NAMES: LEGAL & ILLEGAL

//1
var name = "Jawwad", age = 22, country ="Pakistan"

//2
//Legal
var myName = "Jawwad"
var _Age = 22
var $country = "Pakistan"
var count1 = 1000
var my1BirthYear = 2003

//Illegal
// var 1name = 'illegal'
// var -name = 'illegal'
// var @name = 'illegal'
// var var name = 'illegal'
// var = 'illegal'
//3

document.write('\nRules for naming JS variables')
document.write('<br>Variable can only contain lette, number, underscore, dollar For example $my_1stName')
document.write('<br>Variables must begin with a dollar, underscore, string. For example $name,_name or name')
document.write('<br>Variable names are case sensitive')
document.write('<br>Variable names should not be JS reserved keywords')

//MATH EXPRESSIONS

//1
var num1 = 10
var num2 = 4
alert(`sum of ${num1} and ${num2} is ${num1 + num2}`)
//2
alert(`sub of ${num1} and ${num2} is ${num1 - num2}`)
alert(`mul of ${num1} and ${num2} is ${num1 * num2}`)
alert(`div of ${num1} and ${num2} is ${num1 / num2}`)
alert(`modulus of ${num1} and ${num2} is ${num1 % num2}`)

//3
var num3;
document.write(`<br>Value after variable declaration is ${num3}`)
num3 = 3
document.write(`<br>Initial value: ${num3}`)
document.write(`<br>Value after increment is ${++num3}`)
document.write(`<br>Value after addition is ${num3+=7}`)
document.write(`<br>Value after decrement is ${--num3}`)
document.write(`<br>The remainder is ${num3 % 3}`)

//4
var ticketPrice = 600
var amount = 5
document.write(`<br>Total cost to buy ${amount} tickets to a movie is ${600 * amount} <b>PKR</b>`)

//5
var tableOf = 4
document.write(`<br>Multiplication table of ${tableOf}`)
for(var i = 1; i <= 10; i++){
    document.write(`<br>${tableOf} X ${i} = ${tableOf * i}`)
}

//6
var celsius = 12
var celToFa = (celsius * 9/5) + 32
var fahrenheit = 68
var fatoCel = (fahrenheit - 32)*5/9
document.write(`<br>${celsius}°C is ${celToFa}°F`)
document.write(`<br>${fahrenheit}°F is ${fatoCel}°C`)

//7
var priceOfItem1 = 560
var quantityOfItem1 = 2
var priceOfItem2 = 200
var quantityOfItem2 = 5
var shippingCharges = 150

var total = (priceOfItem1 * quantityOfItem1) + (priceOfItem2 * quantityOfItem2) + shippingCharges
document.write(`<br>Price of item 1 is ${priceOfItem1}`)
document.write(`<br>Quantity of item 1 is ${quantityOfItem1}`)
document.write(`<br>Price of item 2 is ${priceOfItem2}`)
document.write(`<br>Quantity of item 2 is ${quantityOfItem2}`)
document.write(`<br><br>Shipping Charger ${shippingCharges}<br>`)
document.write(`<br>Total cost of your order is ${total} <b>PKR</b>`)

//8
var totalMarks = 1200
var marksObtained = 900
var percentage = marksObtained*100/totalMarks
document.write(`<br><h1>Marks Sheet</h1>`)
document.write(`<br>Total marks: ${totalMarks}`)
document.write(`<br>Marks Obtainer: ${marksObtained}`)
document.write(`<br>Percentage: ${percentage}%`)

//9
var dollar = 10
var saudiRiyal = 25
var dollarExchange = 104
var saudiExchange = 28
var total = (dollar * dollarExchange) + (saudiRiyal * saudiExchange)
document.write(`<br><h1>Currency to PKR</h1>`)
document.write(`<br>Total currency in PKR: ${total}`)

//10
var num4 = 10
var result = ((10 + 5) * 10) / 2
alert(result)

//11
currentYear = 2025
birthYear = 2003
document.write(`<br><h1>The Age Calculator</h1>`)
document.write(`<br>Current Year: ${2025}`)
document.write(`<be>BirthYear: ${birthYear}`)
document.write(`<br>They are either ${currentYear-birthYear-1} or ${currentYear-birthYear}`)

//12
var radius = 12
document.write(`<br><h1>The Geometrizer</h1>`)
document.write(`<br>Radius of a circle : ${radius}`)
document.write(`<br>The circumference : ${2 * 3.142 * radius}`)
document.write(`<br>The area is : ${3.142 * radius * radius}`)

//13
var a = 10
document.write(`<br>Result:`)
document.write(`<br>The value of a is : ${a}`)
document.write(`<br>................................`)
document.write(`<br><br>The value of ++a is: ${++a}`)
document.write(`<br>Now the value of a is ${a}`)
document.write(`<br><br>The values of a++ is: ${a++}`)
document.write(`<br>Now the value of a is: ${a}`)
document.write(`<br><br>The value of --a is: ${--a}`)
document.write(`<br>Now the value of a is: ${a}`)
document.write(`<br><br>The value of a-- is: ${a--}`)
document.write(`<br>Now the value of a is: ${a}`)

//14
var a = 2, b = 1;
var result =  --a - --b + ++b + b--;
document.write(`<br>a is ${a}`)
document.write(`<br>b is ${b}`)
document.write(`<br>result is ${result}`)

document.write(`<br>Here how it works`)
document.write(`<br>First --a which decrease value of a from 2 to 1`)
document.write(`<br>then --b which decrease value of b from 1 to 0`)
document.write(`<br>then --a - --b sub (b from a) = 1 because a was 1 and b was 0`)
document.write(`<br>then 1 + ++b = 2 because ++b add up 1 in b `)
document.write(`<br>then 2 + b-- = 3 because b was = 1 also b-- decrease 1 after calculation`)
document.write(`<br>Note:--, ++ sign increase or decrease based on their position if you place them before variable they will process during calculation but if u place after variable they will process after calculation so if u place after it won't effect ur calculation`)

//15
var favoriteSnack = "Kurkure";
var currentAge = 22
var maxAge = 100
var perDay = 5
var totalSnacks = (maxAge - currentAge) * 365 * perDay
document.write(`<br>The Lifetime supply Calculator`)
document.write(`<br>Favorite Snack: ${favoriteSnack}`)
document.write(`<br>CurrentAge: ${currentAge}`)
document.write(`<br>Estimate Maximum Age: ${85}`)
document.write(`<br>Amout of snacks per day: ${perDay}`)
document.write(`<br>You will need ${totalSnacks} to last you until ripe old age of ${maxAge}`)