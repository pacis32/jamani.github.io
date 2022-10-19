let simpleObject = {a:1, b:2,c:{a:[1,2]}}
//count 
function countKeys(obj){
    let count=Object.keys(obj).length;
  for (let key in obj){
    if(typeof(obj[key])=='object' && !Array.isArray(obj[key])){
        let newCount= countKeys(obj[key]);
        count+= newCount;
    }  

  }
  return count;
       
    }
console.log(countKeys(simpleObject));
//print leaf node
function printleaves(obj){
    let leavesArr= [];
    for(let key in obj){
        if(typeof(obj[key])=='object)' && (!Array.isArray(obj[key]))){
            leavesArr=leavesArr.concat(printleaves(obj[key]));
        }

        else{
            leavesArr= leavesArr.concat([{[key]:obj[key]}]);
        }
    }
}
console.log(printleaves(simpleObject))