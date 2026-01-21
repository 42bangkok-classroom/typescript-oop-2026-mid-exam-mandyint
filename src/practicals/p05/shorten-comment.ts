const comment = "TypeScript is a strongly typed programming language"

export function shortenComment(comment: string): string {
  // Write your code below
  const result: string[] = comment.split(" ");
  let finalResult = '';
  for(const i of result){
    if(i.length >= 5 && i.length <= 10){
      if(result.indexOf(i) === (result.length - 1)){
        finalResult += i;
      }else{
        finalResult += i;
        finalResult += " ";
      }
    }
  }

  return finalResult;
}

console.log(shortenComment(comment));