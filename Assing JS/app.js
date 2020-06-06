// chapter 1
alert("Welcome to our website!");
alert("Error! Please enter a valid password.");
alert("Welcome to the JS land..." + "<br>"+ "Happy Coding!");
alert("Welcome to the JS land...");
alert("Happy Coding");

// chapter 2
// Q1
var username;
// Q2
var myName = 'Muhammad Hammad Raza';
// Q3
var message = 'Hello World';
alert(message);
// Q4
var stName = "Hammad Raza";
var age = "21 yrs old";
var course = "Certified Mobile Application Developer";
alert(stName);
alert(age);
alert(course);
// Q5


// Q6
var email ="hammadr809@gmail.com"
alert("My email address is "+email);
// Q7
var book = "A smarter way to learn javascript."
alert("I am trying to learn from book "+book);
// Q8
document.write("Yah! I can write HTML content through JavaScript.")
// Q9
var string = "▬▬▬▬▬▬▬▬▬ஜ ۩۞۩ ஜ▬▬▬▬▬▬▬▬▬"
alert(string);

// chapter 3
// Q1
var age2 = 22;
alert("I am "+age2+" years old");
// Q2
var counter = 0;

// Q3
var birthYear = 1997;
document.write("My birth year is "+birthYear);
document.write("<br> Data type of my declared varaible is "+typeof(birthYear) +"<br>");
// Q4
var visName = "John Doe";
var prdTitle = "T-Shirt(s)";
var quantity = 10;
document.write("<b>"+visName+"</b> ordered <b>" +quantity +" "+ prdTitle+ "</b> on XYZ clothing.");

// chapter 4
// Q1
var one,two,three;
// Q2
var one, _name, $surname, two2, legal;
// var and, or, if, for,switch, 2two, 
document.write("<h2>Rules for naming JS variables.</h2><br>");
document.write("Variables name can only contain, numbers, $ and _. For example: $my_1stVariable.<br>")
document.write("Variables must begin with a letter, $ or _. For example: $name, _name or name.<br>")
document.write("Variables names are case sensitive.<br>")
document.write("Variables name should not be JS keywords.<br>")

// chapter 5
// Q1
var num1 = prompt("Enter 1st Number.");
var num2 = prompt("Enter 2nd Number");
var ans = (+num1) + (+num2);
document.write("Sum of "+num1+" and "+num2+" is "+ans);
// Q2
var num1 = prompt("Enter 1st Number.");
var num2 = prompt("Enter 2nd Number");
var ans = (+num1) - (+num2);
document.write("Difference of "+num1+" and "+num2+" is "+ans);

var num1 = prompt("Enter 1st Number.");
var num2 = prompt("Enter 2nd Number");
var ans = (+num1) * (+num2);
document.write("Multiplication of "+num1+" and "+num2+" is "+ans);

var num1 = prompt("Enter 1st Number.");
var num2 = prompt("Enter 2nd Number");
var ans = (+num1) / (+num2);
document.write("Division of "+num1+" and "+num2+" is "+ans);

var num1 = prompt("Enter 1st Number.");
var num2 = prompt("Enter 2nd Number");
var ans = (+num1) % (+num2);
document.write("Modulus of "+num1+" and "+num2+" is "+ans);
// Q3
var value;
document.write("Value after declaration is "+value);
value = 10;
document.write("<br> Initial value: "+value);
value++;
document.write("<br> Vlaue after increament is "+value);
value = value+7;
document.write("<br> Value after addition is "+value);
value--;
document.write("<br> Value aftter decrement is "+value);
document.write("<br> The Remainder is "+(value%3));
// Q4
var cost = 600;
var tickets = 5;
document.write("Cost of buying "+tickets+" tickets is "+(cost*tickets)+"PKR.");
// Q5
var no = prompt("Enter the no for the table.");
var no = (+no);
for(var i=1; i<=10; i++){
    document.write(no+"x"+i+"="+(i*no)+"<br>");
}
// Q6
var cel = prompt("Enter celsius temperature: ");
var fer = prompt("Enter the Farenhite temperature: ");
cel = (+cel);
fer = (+fer);
var celtemp = (fer-32)*(5/9);
var fertemp = (cel * (9/5))+32;
document.write(cel +" C is "+fertemp+" F <br>");
document.write(fer +" F is "+celtemp+ "C");
// Q7
var item1 = 650;
var item2 = 100;
var item1Order = 3;
var item2order = 4;
var shippingChrages = 120;
document.write("Price of item 1 is "+item1);
document.write("<br> Quantity of item 1 is "+item1Order);
document.write("<br> Price of item 2 is "+item2);
document.write("<br> Quantity of item 2 is "+item2order);
document.write("<br> Shipping charges "+shippingChrages);
var total = (item1*item1Order)+(item2*item2order)+shippingChrages
document.write("<br><br> Total cost of you order is "+total);
// Q8
var marksObt = 697;
var totalMarks = 1100;
var per = (697/1100)*100;
document.write("Total Marks: "+totalMarks);
document.write("<br> Marks Obtained: "+marksObt);
document.write("<br> Percentage is: "+per+"%");
// Q9
var USD = 104.80;
var riyal = 28;
var noUSD = 10;
var noRiyal = 25;
var totalPKR = (USD*noUSD)+(riyal*noRiyal);
document.write("Total currency in PKR is "+totalPKR); 
// Q10
var number=12;
var ansr= ((12+5)*10)/2;
document.write(ansr);
// Q11
var crntYear = 2020;
var birthYear = 1997;
var agee = crntYear-birthYear;
document.write("Current Year is: "+crntYear);
document.write("<br> Your Birth Year is: "+birthYear);
document.write("<br> Your age is: "+agee);
// Q12
var radius = 20;
var circum = 2*3.142*radius;
var area = 3.142*(radius*radius);
document.write("<h1>The Geometrizer</h1><br><br>");
document.write("<br> The Radius of the Circle is: "+radius);
document.write("<br> The Area of the Circle is: "+area);
document.write("<br> The Circumferencce of the circle is: "+circum);
// Q13
var favSnack = "Chocolate chips";
var crntage = 15;
var maxAge = 65;
var estAmnt = 3;
var snackNeed = (maxAge-crntage)*estAmnt;
document.write("<h1>The Lifetime Supply Calculator</h1><br>");
document.write("<br> Favourite Snack: "+favSnack);
document.write("<br> Current Age: "+crntage);
document.write("<br> Estimated Maximum Age: "+maxAge);
document.write("<br> Amount of Snack perday: "+estAmnt);
document.write("<br> You will need "+snackNeed+" "+favSnack+" to last you until ripe old age of "+maxAge); 

// chapter 6-9
Q1
var a=10;
document.write("Result");
document.write("<br> The value of a is "+a);
document.write("<br>---------------------------");
++a;
document.write("<br><br> The value of ++a is "+a);

document.write("<br> Now the value of a is "+a);

document.write("<br><br> The value of a++ is "+a);

a++;

document.write("<br> Now the value of a is "+a);

--a;

document.write("<br><br> The value of --a is "+a);

document.write("<br> Now the value of a is "+a);

document.write("<br><br> The value of a-- is "+a);

a--;

document.write("<br> Now the value of a is "+a);
// Q2
var aa=2, b=1;
var result = --aa- --b + ++b + b;
document.write("<br> a is "+aa);
document.write("<br> b is "+b);
document.write("<br> --a is "+(--aa));
document.write("<br> --a - --b is "+(--aa - --b));
document.write("<br> --a - --b + ++b is "+(--aa - --b + ++b));
document.write("<br> Result is "+result);
// Q3
var user= prompt("Enter your name.");
document.write("Welcome to my website "+user);
// Q5
var input = prompt("Enter a number of table: ");
if(input == null || input == ""){
    for(var i=1; i<=10 ; i++){
        document.write("5x"+i+"="+5*i+"<br>");
    }
}else{
    for(var i=1; i<=10; i++){
        document.write(input+"x"+i+"="+(input*i)+"<br>");
    }
}
// Q6
var subjct1 = prompt("Enter First subject Name:");
var sub1Marks = prompt("Enter First Subject Marks:");
var subject2 = prompt("Enter Second Subject Name:");
var sub2Marks = prompt("Enter Second Subject Marks:");
sub1Marks = (+sub1Marks);
sub2Marks = (+sub2Marks);
document.write("<table>"+
                "<tr>"+
                    "<th>Subject</th>"+
                    "<th>Total Marks</th>"+
                    "<th>Obtained Marks</th>"+
                    "<th>Percentage</th>"+
                "</tr>"+
                "<tr>"+
                    "<td>"+subjct1+"</td>"+
                    "<td>100</td>"+
                    "<td>"+sub1Marks+"</td>"+
                    "<td>"+(sub1Marks/100)*100+"</td>"+
                "</tr>"+
                "<tr>"+
                    "<td>"+subject2+"</td>"+
                    "<td>100</td>"+
                    "<td>"+sub2Marks+"</td>"+
                    "<td>"+(sub2Marks/100)*100+"</td>"+
                "</tr>"+
                "<tr>"+
                    "<td></td>"+
                    "<td>200</td>"+
                    "<td>"+(sub1Marks+sub2Marks)+"</td>"+
                    "<td>"+(((sub1Marks+sub2Marks)/200)*100)+"</td>"+
                "</tr>"+
            "</table>");

// chapter 9-11
// Q1
var cityName = prompt("Enter a city name:");
if (cityName === "Karachi" || cityName === "karachi") {
    alert("Welcome to city of lights.")
}
// Q2
var gender = prompt("Enter your gender:");
if (gender === "Male" || gender === "male") {
    alert("Good Morning Sir");
}
if (gender === "Female" || gender === "female") {
    alert("Good Morning Ma'am")
}
// Q3
var signalColor = prompt("Enter the signal color:");
if (signalColor === "Red" || signalColor === "red") {
    alert("Must Stop.");
}
if (signalColor === "Yellow" || signalColor === "yellow") {
    alert("Ready to move.");
}
if (signalColor === "Green" || signalColor === "green") {
    alert("Move now.")
}
// Q4
var fuel = prompt("Enter remaining fuel in liters:")
if (fuel <= 0.25) {
    alert("Please refill the fuel in your car.")
}
// Q5
var a = 4;
if (++a === 5) {
    alert("given condition for variable a is true");
}
var b = 82;
if (b++ === 83) {
    alert("given condition for variable b is true");
}
var c = 12; 
if (c++ === 13) { 
    alert("condition 1 is true"); 
} 
if (c === 13) { 
    alert("condition 2 is true"); 
} 
if (++c < 14) { 
    alert("condition 3 is true"); 
} 
if (c === 14) { 
    alert("condition 4 is true"); 
}
var materialCost = 20000; 
var laborCost = 2000; 
var totalCost = materialCost + laborCost; 
if (totalCost === laborCost + materialCost){ 
    alert("The cost equals"); 
}
if (true){ 
    alert("True"); 
} 
if (false){ 
    alert("False"); 
}
if("car" < "cat"){ 
    alert("car is smaller than cat"); 
}
// Q6
var sub1mrk = prompt("Enter First subject marks:");
var sub2mrk =prompt("Enter Second subject marks:");
var sub3mrk = prompt("Enter third sbject marks:");
var totalmrks = prompt("Enter total marks of subjects:");
sub1mrk = +sub1mrk;
sub2mrk = +sub2mrk;
sub3mrk = +sub3mrk
var percent = (sub1mrk+sub2mrk+sub3mrk)/300*100;
document.write("Total Marks: "+totalmrks);
document.write("<br> Marks Obtained: "+(sub1mrk+sub2mrk+sub3mrk));
document.write("<br> Percentage: "+percent);
if(percent>=80){
    document.write("<br> Grade: A-one");
    document.write("<br> Excellent");
}
if(percent>=70 && percent<=79){
    document.write("<br> Grade: A");
    document.write("<br> Good");
}
if(percent>=60 && percent<=69){
    document.write("<br> Grade: B");
    document.write("<br> You need to improve.");
}
if(percent<=59){
    document.write("<br> Fail");
    document.write("<br> Sorry")
}
// Q7
var secNumbr = 7;
var userNum = prompt("Enter a random no from 1 to 10 to guess a secret no.");
userNum = +userNum;
if(userNum === 7){
    alert("Bingo! Correct answer.");
}
if((userNum+1) === secNumbr){
    alert("Close Enought to correect answer.");
}
// Q8
var num = prompt("Enter a number:");
num = +num;
if(num%3===0){
    alert("Number is divisible by 3.")
}
// Q9
var numb=prompt("Enter a number");
numb = +numb;
if(numb%2===0){
    alert("Even Number.");
}
if(numb%2!==0){
    alert("Odd Number.");
}
// Q10
var temp = prompt("Enter temperature:");
temp = +temp;
if(temp>40){
    alert("Its too hot outside.");
}
if(temp>30 && temp<39){
    alert("The weather today is normal.");
}
if(temp>20 && temp<29){
    alert("Today's weather is cool.");
}
if(temp>10 && temp<19){
    alert("OMG! Today's weather is so cool.")
}
// Q11
var frstno = prompt("Enter First No.");
var opert = prompt("Enter operator.");
var secndNo = prompt("Enter Second Number");
frstno = +frstno;
secndNo = +secndNo;
if(opert === "+"){
    alert(frstno+" + "+secndNo+" = "+(frstno+secndNo));
}
if(opert === "-"){
    alert(frstno+" - "+secndNo+" = "+(frstno-secndNo));
}
if(opert === "*"){
    alert(frstno+" * "+secndNo+" = "+(frstno*secndNo));
}
if(opert === "/"){
    alert(frstno+" / "+secndNo+" = "+(frstno/secndNo));
}
if(opert === "%"){
    alert(frstno+" % "+secndNo+" = "+(frstno%secndNo));
}

chapter 12-13
// Q1
var usrinp = prompt("Enter letter or number");
if(isNaN(usrinp)){
    if(usrinp>='A' && usrinp<='Z'){
        alert("Upper case Letter.");
    } else if(usrinp>='a' && usrinp<= 'z'){
        alert("Lower case Letter");
    }
} else {
    alert("Number");
}
// Q2
var int1 = prompt("Enter a number:");
var int2 = prompt("Enter second number:");
int1 = +int1;
int2 = +int2;
if(int1>int2){
    alert(int1+" is greater than "+int2);
} else if(int1<int2){
    alert(int2+" is greater than "+int1);
} else {
    alert("Both numbers are equals.")
}
// Q3
var usinput = prompt("Enter any number(negative/non-negative):");
usinput = +usinput;
if(usinput>0){
    alert("Number is positive");
}else if(usinput<0){
    alert("Number is negative");
}else{
    alert("Number is 0");
}
// Q4
var chr=prompt("Enter a single character");
if(chr === 'a' || chr === 'e' || chr === 'i' || chr === 'o' || chr === 'u'){
    alert("You enter a vowel");
}else{
    alert("A constant");
}
// Q5
var crtPass = "abcd";
var usrPass = prompt("Enter a password.");
if(usrPass === null || usrPass === ""){
    alert("Please enter a password.");
    usrPass = prompt("Enter a password.")
} else if(usrPass===crtPass){
    alert("You enter correct password.")
}else{
    alert("Incorrect password");
}
// Q6
var greeting = ""; 
var hour = 13; 
if (hour < 18) { 
    alert(greeting = "Good day"); 
}else{ 
    alert(greeting = "Good evening"); 
}
// Q7
var userTime = prompt("Enter time in 24 hours formate.")
userTime = +userTime;
if(userTime >= 0000 && userTime <1200){
    alert("Good Morning.");
} else if(userTime >= 1200 && userTime <1700){
    alert("Good Afternoon");
}else if(userTime>= 1700 && userTime<2100){
    alert("Good Evening");
}else if(userTime>=2100 && userTime<=2359){
    alert("Good Night");
}

// chapter 14-16
// Q1
var arr = [];
// Q2
var arr = {};
// Q3
var stringArr = ["calss","object","string"];
// Q4
var numbArr = [12,123,1234];
// Q5
var boolArr = [true,false];
// Q6
var mixArra = ["string",1234,null,true];
// Q7
var edu = ["SSC","HSC","BCS","BS","BCOM","MS","P.hD","M.Phil"];
document.write("<h1>Qualifications:</h1>")
document.write(edu[0]+"<br>");
document.write(edu[1]+"<br>");
document.write(edu[2]+"<br>");
document.write(edu[3]+"<br>");
document.write(edu[4]+"<br>");
document.write(edu[5]+"<br>");
document.write(edu[6]+"<br>");
document.write(edu[7]+"<br>");
// Q8
var stName = ["Hammad","Faizan","Raza"];
var scores = [320,230,480];
document.write("Score of "+stName[0]+ " is "+scores[0]+" . Percentage: "+(scores[0]/500)*100+"% <br>");
document.write("Score of "+stName[1]+ " is "+scores[1]+" . Percentage: "+(scores[1]/500)*100+"% <br>");
document.write("Score of "+stName[2]+ " is "+scores[2]+" . Percentage: "+(scores[2]/500)*100+"% <br>");
// Q9
var color = ["Red","Green","Blue"];
document.write(color+"<br>");
var strtColor = prompt("What color you want to add at the begining?");
color.unshift(strtColor);
document.write(color+"<br>");
var endColor = prompt("What color you want to add at the end?");
color.push(endColor);
document.write(color+"<br>");
color.unshift("Yellow","Pink");
document.write(color+"<br>");
color.shift();
document.write(color+"<br>");
color.pop();
var position = prompt("What postion you want to add color?")
position = +position;
var colorName = prompt("What color you want to add?");
color.splice(position,0,colorName);
document.write(color+"<br>");
var deltIndex = prompt("Which index you want to delete?");
deltIndex = +deltIndex;
var noOfElemnt = prompt("How many color you want to delete?");
noOfElemnt = +noOfElemnt;
color.splice(deltIndex,noOfElemnt);
document.write(color+"<br>");
// Q10
var stuScore = [240,520,160,480,170,10];
document.write("Scores of Student: "+stuScore);
var orderScore = stuScore.sort();
document.write("<br> Ordered Score of Student: "+orderScore);
// Q11
var cities = ["Karachi","Islamabad","Lahore","Faislabad","Peshawar"];
document.write(cities+"<br>");
var selectedCities = cities.slice(1,4);
document.write("Selected Cities: "+selectedCities);
// Q12
var arrString = ["This","is","my","cat."];
document.write("Array: <br>"+arrString);
var arrjoin = arrString.join(" ");
document.write("<br>String:<br>")
document.write(arrjoin);
// Q13
var fifodevices = ["keyboard","mouse","printer","monitor"];
document.write(devices+"<br>");
document.write("FIFO <br>")
document.write("out: "+devices.shift()+"<br>");
document.write("out: "+devices.shift()+"<br>");
document.write("out: "+devices.shift()+"<br>");
document.write("out: "+devices.shift()+"<br>");
// Q14
var lifodevices = ["keyboard","mouse","printer","monitor"];
document.write(devices+"<br>");
document.write("LIFO <br>");
document.write("out: "+devices.pop()+"<br>");
document.write("out: "+devices.pop()+"<br>");
document.write("out: "+devices.pop()+"<br>");
document.write("out: "+devices.pop()+"<br>");
// Q15
var phoneManufacture = ["Apple","Motrola","Samsung","Nokia","Sony","Haier"];
document.write("<select>"+
                    "<option>"+phoneManufacture[0]+"</option>"+
                    "<option>"+phoneManufacture[1]+"</option>"+
                    "<option>"+phoneManufacture[2]+"</option>"+
                    "<option>"+phoneManufacture[3]+"</option>"+
                    "<option>"+phoneManufacture[4]+"</option>"+
                    "<option>"+phoneManufacture[5]+"</option>"+
            "</select>");

// chapter 17-20
// Q1
var multi = [[]];
// Q2
var mulitArray = [[0,1,2,3],[1,0,1,2],[2,1,0,1]];
document.write(mulitArray);
// Q3
for(var i=1; i<=10; i++){
    document.write(i+"<br>")
}
// Q4
var tableNo = prompt("Enter a number to show its multiplication table: ");
tableNo = +tableNo;
var tableLength = prompt("Enter length multiplication table: ");
tableLength = +tableLength;
for(var i=1; i<=tableLength; i++){
    document.write(tableNo+"x"+i+"="+(i*tableNo)+"<br>");
}
// Q5
var fruits = ["apple", "banana", "mango", "orange", "strawberry"];
for(var i=0;i<fruits.length;i++){
    document.write(fruits[i]+"<br>");
}
for(var i=0;i<fruits.length;i++){
    document.write("Element at index "+i+" is "+fruits[i]+"<br>");
}
// Q6
document.write("<h4>Counting:</h4><br>");
for(var i=1;i<=15;i++){
    document.write(i+",")
}
document.write("<h4>Reverse Counting:</h4><br>");
for(var i=10;i>0;i--){
    document.write(i+",")
}
document.write("<h4>Even:</h4><br>");
for(var i=0; i<=20; i++){
    if((i%2) === 0){
        document.write(i+",")
    }
}
document.write("<h4>Odd:</h4><br>");
for(var i=0; i<=20; i++){
    if((i%2) !== 0){
        document.write(i+",")
    }
}
document.write("<h4>Series:</h4><br>");
for(var i=1; i<=20; i++){
    if((i%2) === 0){
        document.write(i+"k,")
    }
}
// Q7
var matchFound = false;
var userWant = prompt("Welcome to ABC Bakery. What do you want to order?");
var verity = ["cake","apple pie","cookie","chips","patties"];
for(var j=0; j<verity.length; j++){
    if(userWant === verity[j]){
        matchFound = true;
        document.write(userWant+" is <b>available</b> at index "+j+" in our bakery.");
    }
}
    if(!matchFound){
        document.write(userWant+" is <b> not available</b> in our bakery.");
    }
// Q8
var givenArr = [24,53,78,91,12];
document.write("Array elements: "+givenArr);
givenArr.sort();
document.write("<br> Largest Element: "+givenArr.pop());
// Q9
var givenArr = [24,53,78,91,12];
document.write("Array elements: "+givenArr);
givenArr.sort();
document.write("<br> Smallest Element: "+givenArr.shift());
Q10
for(var i=1;i<=20;i++){
    document.write(i*5+",")
}