// Write your code below
const n = +process.argv[2];

if((typeof n != "number") || n <= 0){
}else{
    for(let i = 1; i <= n; i++){
        if((i % 15) === 0){
            console.log("FizzBuzz");
        }else if((i % 5) === 0){
            console.log("Buzz");
        }else if((i % 3) === 0){
            console.log("Fizz");
        }else{
            console.log(i);
        }
    }
}