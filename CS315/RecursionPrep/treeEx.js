function TreeNode(value){
    this.value = value;
    this.descendents=[];
}

const flowers= new TreeNode("flowers");
const subtropicalFlowers= new TreeNode("subtropicalFlowers");
const temperateFlowers= new TreeNode("temperateFlowers");
const bougainvillea= new TreeNode("bougainvillea");
const daffodils= new TreeNode("dafoffodils");
const roses=new TreeNode("roses");

flowers.descendents.push(subtropicalFlowers);

flowers.descendents.push(temperateFlowers);

subtropicalFlowers.descendents.push(bougainvillea);

temperateFlowers.descendents.push(roses);

temperateFlowers.descendents.push(daffodils);

function countParent(tree){
    let count=0;
    if(tree.descendents.lengh==0){
        return 0;
    }
    // let count = tree.descendents.lengh==0?1:0
    for(let child of tree.descendents){
        count=1+countParent(child);

    }
    return count;
}
console.log(countLeaves(flowers))
//////////////////////////////////////////////////
function countLeaves(tree){
 let count=0;
 if(tree.descendents.length==0){
    count++;
 }
 for(let child of tree.descendents){
    count=count+countLeaves(child)
 }
   return count;

}

console.log(countLeaves(flowers))
/////////////////////////////////////////////////////////////////////

function flatternTree(tree){
    let arr=[{name:tree.value, children:tree.descendents.length}];
    for(let child of tree.descendents){
        arr=arr.concat(flatternTree(child));
    }
    return arr;
}
console.log(flatternTree(flowers));