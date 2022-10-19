function TreeNode(value) {
    this.value = value;
    this.descendents = [];
    }
   // create nodes with values
   const abe = new TreeNode('Abe');
   const homer = new TreeNode('Homer');
   const bart = new TreeNode('Bart');
   const lisa = new TreeNode('Lisa');
   const maggie = new TreeNode('Maggie');
   // associate root with is descendents
   abe.descendents.push(homer);
   homer.descendents.push(bart, lisa, maggie);

   // contains

   function contains(abe,nodeName){
    if(abe.value==nodeName){
        return true; 
    }
    for(let  child of abe.descendents){
        let result= contains(child);
        if(result){
            return true;
        }

    }
    return false;
   }
console.log(contains(abe,'Abe'))
   // count none

   function countLeaf(abe){
    if(abe.descendents.length==0){
        return 1;
    }
    let count=0;
    for(let child of abe.descendents){
    count= count+ countLeaf(child)
    }

    return count;
   }

   console.log(countLeaf(abe,'Abe'));

   // count only parent
//    function countParent(abe){
//     if(abe.descendents.length==0){
//         return 0;
//     }
//     let count=0;
//     for(let child of abe.descendents){
//         count=1+countParent(child);
//     }
//     return count;
//    }

//    console.log(countParent(abe));

   /// collecting all names:
//    function flattenThree(abe){
//     // if(abe.descendents.length==0){
//     //  return[abe.value]
//     // }

//     let names=[abe.value];
//         for(let child of abe.descendents){
//             names=names.concat(flattenThree(child))
//     }
//     return names;
//    }
//    console.log(flattenThree(abe));