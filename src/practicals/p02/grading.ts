// Write your code below
const input = +process.argv[2];

if((typeof input != "number") || input > 100 || input < 0){
    console.log("Invalid input");
}else if(input >= 80){
    console.log("Grade is A");
}else if(input >= 70){
    console.log("Grade is B");
}else if(input >= 60){
    console.log("Grade is C");
}else if(input >= 50){
    console.log("Grade is D");
}else{
    console.log("Grade is F");
}