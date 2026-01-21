// Write your code below
const pattern = +process.argv[2];

if((typeof pattern != "number") || pattern <= 0 || !pattern){
}else{
    let result = "";
    for(let i = 1; i <= pattern; i++){
        for(let j = 1; j <= pattern; j++){
            if((i + j) <= pattern){
                result += " ";
            }else{
                result += (pattern + 1) - j;
            }
        }
        result += "\n";
    }
    console.log(result);
}
